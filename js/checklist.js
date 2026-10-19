// js/checklist.js — BSIT Industry-Ready Portfolio Helper & Scroll Refresh
document.addEventListener('DOMContentLoaded', () => {
    // If GSAP and ScrollTrigger are loaded, refresh geometry after content injection
    if (typeof ScrollTrigger !== 'undefined') {
        window.addEventListener('load', () => {
            ScrollTrigger.refresh();
        });

        // Also refresh when details/accordion elements toggle size
        document.querySelectorAll('details').forEach((el) => {
            el.addEventListener('toggle', () => {
                ScrollTrigger.refresh();
            });
        });
    }
});
