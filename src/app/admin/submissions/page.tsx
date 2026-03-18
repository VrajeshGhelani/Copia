"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, CheckCircle, Circle, ArrowLeft, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import Link from "next/link";

interface Submission {
    _id: string;
    name: string;
    email?: string;
    phone: string;
    message: string;
    status: 'new' | 'contacted' | 'closed';
    createdAt: string;
}

const AdminDashboard = () => {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'closed'>('all');

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        try {
            const res = await fetch('/api/contact');
            const data = await res.json();
            if (data.success) {
                setSubmissions(data.submissions);
            }
        } catch (error) {
            console.error("Failed to fetch submissions", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleStatusUpdate = async (id: string, newStatus: string) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status: newStatus })
            });
            const data = await res.json();
            
            if (data.success) {
                setSubmissions(prev => 
                    prev.map(sub => sub._id === id ? { ...sub, status: newStatus as any } : sub)
                );
            }
        } catch (error) {
            console.error("Failed to update status", error);
        }
    };

    const filteredSubmissions = filter === 'all' 
        ? submissions 
        : submissions.filter(s => s.status === filter);

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-gray-50 dark:bg-black/90 pt-32 pb-20 px-6 transition-colors duration-700">
                <Navbar />
                
                <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-6 text-sm font-medium tracking-wide">
                                <ArrowLeft className="w-4 h-4" />
                                BACK TO SITE
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                                Submissions
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400">
                                Manage and track your incoming contact requests.
                            </p>
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex items-center gap-2 bg-white dark:bg-white/5 p-2 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10">
                            {['all', 'new', 'contacted', 'closed'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setFilter(tab as any)}
                                    className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all capitalize ${
                                        filter === tab 
                                        ? 'bg-primary text-white shadow-md' 
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white dark:bg-black/40 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-premium p-6 md:p-10 min-h-[500px] transition-colors duration-700">
                        {isLoading ? (
                            <div className="w-full h-full min-h-[400px] flex items-center justify-center">
                                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                            </div>
                        ) : filteredSubmissions.length === 0 ? (
                            <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center text-center text-gray-400">
                                <CheckCircle className="w-16 h-16 mb-4 opacity-20" />
                                <h3 className="text-xl font-semibold mb-2">No submissions found</h3>
                                <p>You have zero {filter === 'all' ? '' : filter} active submissions.</p>
                            </div>
                        ) : (
                            <div className="grid gap-6">
                                {filteredSubmissions.map((sub, i) => (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        key={sub._id} 
                                        className="p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:border-primary/30 transition-all flex flex-col lg:flex-row gap-8 justify-between"
                                    >
                                        <div className="space-y-4 max-w-2xl">
                                            <div className="flex items-center gap-4">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                                                    {sub.name}
                                                </h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                                    sub.status === 'new' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                                                    sub.status === 'contacted' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                                                    'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                                                }`}>
                                                    {sub.status}
                                                </span>
                                            </div>
                                            
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                                                {sub.message}
                                            </p>
                                            
                                            <div className="flex flex-wrap items-center gap-6 mt-4 pt-4 border-t border-gray-200 dark:border-white/10 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    {new Date(sub.createdAt).toLocaleDateString()} at {new Date(sub.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                                </div>
                                                <a href={`tel:${sub.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                                                    <Phone className="w-4 h-4" />
                                                    {sub.phone}
                                                </a>
                                                {sub.email && (
                                                    <a href={`mailto:${sub.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                                                        <Mail className="w-4 h-4" />
                                                        {sub.email}
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex flex-row lg:flex-col gap-3 min-w-[160px]">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden lg:block mb-2">Actions</p>
                                            <button 
                                                onClick={() => handleStatusUpdate(sub._id, 'new')}
                                                className={`flex-1 flex items-center gap-2 text-sm font-medium px-4 py-3 rounded-xl transition-all ${sub.status === 'new' ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' : 'bg-transparent text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}
                                            >
                                                {sub.status === 'new' ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                                                Mark New
                                            </button>
                                            <button 
                                                onClick={() => handleStatusUpdate(sub._id, 'contacted')}
                                                className={`flex-1 flex items-center gap-2 text-sm font-medium px-4 py-3 rounded-xl transition-all ${sub.status === 'contacted' ? 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' : 'bg-transparent text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}
                                            >
                                                {sub.status === 'contacted' ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                                                Mark Contacted
                                            </button>
                                            <button 
                                                onClick={() => handleStatusUpdate(sub._id, 'closed')}
                                                className={`flex-1 flex items-center gap-2 text-sm font-medium px-4 py-3 rounded-xl transition-all ${sub.status === 'closed' ? 'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400' : 'bg-transparent text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}
                                            >
                                                {sub.status === 'closed' ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                                                Close Ticket
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </SmoothScroll>
    );
};

export default AdminDashboard;
