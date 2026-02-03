"use client";

import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import HowItWorks from "@/components/HowItWorks";
import BentoFeatures from "@/components/BentoFeatures";
import Metrics from "@/components/Metrics";
import IntegratedMesh from "@/components/IntegratedMesh";
import TestimonialsConstellation from "@/components/TestimonialsConstellation";
import KernelLogs from "@/components/KernelLogs";
import Pricing from "@/components/Pricing";
import SpotlightButton from "@/components/ui/SpotlightButton";
import ParticleBackground from "@/components/ui/ParticleBackground";
import ThreeDLayerSection from "@/components/ThreeDLayerSection";
import SmoothScroll from "@/components/SmoothScroll";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SmoothScroll>
      <main className="min-h-screen overflow-x-hidden">
        <ParticleBackground />
        {/* Basic Navigation */}
        <nav className="fixed top-0 left-0 w-full z-[100] glass-panel border-x-0 border-t-0 border-b-white/5 bg-slate-950/20 backdrop-blur-xl">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 font-bold flex items-center justify-center">
                Æ
              </div>
              <span className="font-bold text-xl tracking-tight">AetherOS</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
              <a href="#mesh" className="hover:text-white transition-colors">Integrations</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <SpotlightButton className="hidden sm:inline-flex px-5 py-2 text-sm">
                Sign In
              </SpotlightButton>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <motion.div
            initial={false}
            animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
            className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/5"
          >
            <div className="flex flex-col p-6 gap-6 text-lg font-medium">
              <a href="#features" onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors">How it works</a>
              <a href="#mesh" onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors">Integrations</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors">Pricing</a>
              <SpotlightButton className="w-full mt-2">Sign In</SpotlightButton>
            </div>
          </motion.div>
        </nav>

        {/* 3D Scrolled Sections */}
        <div className="relative">
          <ThreeDLayerSection index={0} isFirst>
            <Hero />
          </ThreeDLayerSection>

          <ThreeDLayerSection index={1}>
            <DashboardPreview />
          </ThreeDLayerSection>

          <ThreeDLayerSection index={2}>
            <div id="how-it-works">
              <HowItWorks />
            </div>
          </ThreeDLayerSection>

          <ThreeDLayerSection index={3}>
            <div id="metrics">
              <Metrics />
            </div>
          </ThreeDLayerSection>

          <ThreeDLayerSection index={4}>
            <div id="features">
              <BentoFeatures />
            </div>
          </ThreeDLayerSection>

          <ThreeDLayerSection index={5}>
            <div id="mesh">
              <IntegratedMesh />
            </div>
          </ThreeDLayerSection>

          <ThreeDLayerSection index={6}>
            <div id="testimonials">
              <TestimonialsConstellation />
            </div>
          </ThreeDLayerSection>

          <ThreeDLayerSection index={7}>
            <div id="kernel">
              <KernelLogs />
            </div>
          </ThreeDLayerSection>

          <ThreeDLayerSection index={8}>
            <div id="pricing">
              <Pricing />
            </div>
          </ThreeDLayerSection>
        </div>

        <footer className="py-20 border-t border-white/5 bg-slate-950 text-center relative z-50">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-violet-500 font-bold text-xs flex items-center justify-center">
                Æ
              </div>
              <span className="font-bold text-lg tracking-tight">AetherOS</span>
            </div>
            <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
              Redefining the boundary between intelligence and execution.
              Built for a future that's already here.
            </p>
            <div className="flex justify-center flex-wrap gap-6 text-slate-500 text-sm mb-12">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
            </div>
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Aether Intelligence Corp. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
