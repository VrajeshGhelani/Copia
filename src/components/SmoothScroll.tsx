"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.2,
            wheelMultiplier: 1.8,
            orientation: "vertical",
            gestureOrientation: "vertical",
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};
