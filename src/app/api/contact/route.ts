import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Contact } from '@/models/Contact';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { fullName, phone, email, message } = await req.json();

    // Basic Validation
    if (!fullName || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, phone, and message are required' },
        { status: 400 }
      );
    }

    await dbConnect();

    // 1. Create DB Record
    await Contact.create({
      name: fullName,
      phone,
      email,
      message,
    });

    // 2. Prepare Optional Email Notification Output
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'vghelani9846@gmail.com',
          subject: 'New Contact Request from Copia Website',
          html: `
            <h2>New Contact Request</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || 'Not Provided'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <br/>
            <p><em>Timestamp: ${new Date().toLocaleString()}</em></p>
          `,
        };

        await transporter.sendMail(mailOptions);
        
        // Optional Auto-Reply
        if (email) {
          await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank You for Contacting Copia Water',
            html: `
              <h2>Hello ${fullName},</h2>
              <p>Thank you for reaching out to Copia Water! We have received your inquiry and our team will get back to you shortly.</p>
              <br/>
              <p>Best Regards,</p>
              <p><strong>The Copia Water Team</strong></p>
            `,
          });
        }
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue regardless of optional email failure allowing DB integrity saving
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Request submitted successfully',
    });

  } catch (error: any) {
    console.error('API Error /contact:', error);

    // Mongoose Validation Error Mapping
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { success: false, message: messages.join(', ') },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: error.message || 'Server Configuration Error' },
      { status: 500 }
    );
  }
}

// Support admin dashboard functionality directly referencing model layout
export async function GET(req: Request) {
  try {
    await dbConnect();
    
    // Quick URL params for queries if needed
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    let query = {};
    if (status && ['new', 'contacted', 'closed'].includes(status)) {
        query = { status };
    }

    const submissions = await Contact.find(query).sort({ createdAt: -1 }).limit(100);

    return NextResponse.json({
      success: true,
      submissions,
    });
  } catch (error: any) {
    console.error('API GET Error /contact:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
    try {
        await dbConnect();
        const { id, status } = await req.json();

        if (!id || !status || !['new', 'contacted', 'closed'].includes(status)) {
            return NextResponse.json({ success: false, message: 'Invalid data' }, { status: 400 });
        }

        const updated = await Contact.findByIdAndUpdate(id, { status }, { new: true });
        
        return NextResponse.json({ success: true, submission: updated });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Update failed' }, { status: 500 });
    }
}
