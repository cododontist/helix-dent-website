/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Stethoscope,
  ChevronRight,
  Menu,
  X,
  Shield,
  Activity,
  Award
} from "lucide-react";
import { useState } from "react";

const BRAND_TEAL = "#004D4D";
const WHATSAPP_NUMBER = "919990078009"; // Placeholder for user replacement

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const treatments = [
    {
      title: "Painless RCT",
      subtitle: "Root Canal Treatment",
      description: "Advanced rotary endodontics ensuring your procedure is fast, effective, and completely painless.",
      imageUrl: "RCT.jpg",
      tag: "Specialty"
    },
    {
      title: "Dental Implants",
      subtitle: "Permanent Restoration",
      description: "High-grade titanium implants that look, feel, and function exactly like your natural teeth.",
      imageUrl: "implant.jpg",
      tag: "Permanent"
    },
    {
      title: "Aesthetic Fillings",
      subtitle: "Tooth-Coloured",
      description: "Invisible composite restorations that preserve your smile's natural beauty and strength.",
      imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
      tag: "Natural"
    }
  ];

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Helix%20Dent,%20I%20would%20like%20to%20consult%20with%20Dr.%20Arora.`;

  return (
    <div className="min-h-screen bg-brand-white selection:bg-brand-teal/10 selection:text-brand-teal flex flex-col">
      {/* Main Navigation - Ultra Minimal */}
      <nav className="w-full bg-white border-b border-brand-silver py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-baseline gap-1 group cursor-default">
          <span className="text-3xl font-black tracking-tighter text-brand-teal">H</span>
          <span className="text-2xl font-bold tracking-tight text-slate-300 -ml-0.5">elix Dent</span>
        </div>
        
        {/* Top Right Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:+919990078009" 
            className="flex items-center gap-2 bg-white border-2 border-brand-teal text-brand-teal px-5 py-2 rounded-full font-bold text-sm hover:bg-teal-50 transition-all border-opacity-50"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Call Now</span>
          </a>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 bg-brand-teal text-white px-5 py-2 rounded-full font-bold text-sm shadow-md hover:opacity-90 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Book via WhatsApp</span>
          </a>
        </div>
        
        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-brand-teal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-white border-b border-brand-silver px-6 py-6 sticky top-16 z-50 shadow-sm"
        >
          <div className="flex flex-col space-y-4">
            <a href="#treatments" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-brand-teal">Core Treatments</a>
            <a href="#location" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-brand-teal">Chanakya Place Location</a>
            <a 
              href={whatsappLink}
              className="bg-brand-teal text-white w-full py-4 rounded-xl flex items-center justify-center font-bold"
            >
              Consult via WhatsApp
            </a>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row-reverse items-center px-6 md:px-12 py-12 md:py-24 max-w-7xl mx-auto w-full gap-16">
        {/* Hero Text - Now on Right */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-teal-50 border border-teal-200 text-brand-teal text-[10px] font-bold uppercase tracking-widest rounded-full">
                Private Specialist Practice
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Advanced Dental Care.<br />
                <span className="text-brand-teal">Zero Wait Times.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                Experience precision-driven dentistry focused on 1-on-1 attention with Dr. Abhishek Arora. We combine clinical excellence with empathetic care for lasting oral health.
            </p>
            
            <div className="flex gap-8 pt-4">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-brand-teal">100%</span>
                    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Digital Records</span>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-brand-teal">1:1</span>
                    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Priority Care</span>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-brand-teal">ISO</span>
                    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Surgical Safety</span>
                </div>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden border border-brand-silver shadow-card group"
          >
            <img 
              src="https://images.unsplash.com/photo-1445522932250-b00db1103001?q=80&w=1920&auto=format&fit=crop" 
              alt="Modern minimalist macro of a dental chair setup at Helix Dent." 
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl">
               <p className="text-brand-teal font-extrabold uppercase tracking-widest text-[10px] mb-1">Clinic Floor</p>
               <p className="text-slate-800 font-bold text-sm leading-tight italic">"Redefining clinical comfort through modern technology."</p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Treatment Section */}
      <section id="treatments" className="px-6 md:px-12 py-16 md:py-24 bg-slate-50/50 border-t border-brand-silver">
        <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <p className="text-brand-teal font-extrabold uppercase tracking-[0.2em] text-xs">Core Expertise</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Clinical Specializations</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {treatments.map((t, idx) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-white rounded-3xl border border-brand-silver shadow-card hover:border-brand-teal transition-all group overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={t.imageUrl} 
                      alt={t.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-teal text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                          {t.tag}
                       </span>
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-800">{t.title}</h3>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">{t.subtitle}</p>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{t.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Meet Your Dentist Section */}
      <section id="about" className="px-6 md:px-12 py-16 md:py-24 bg-slate-50 border-y border-brand-silver overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full max-w-md mx-auto">
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-square bg-slate-200 rounded-3xl overflow-hidden border-8 border-white shadow-card relative z-10 group">
                <img 
                  src="https://images.unsplash.com/photo-1594824464567-990a2e718641?q=80&w=1200&auto=format&fit=crop" 
                  alt="Dr. Abhishek Arora in clinical setting" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-teal/5 rounded-full blur-3xl" />
            </div>
          </div>
          
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <p className="text-brand-teal font-extrabold uppercase tracking-[0.2em] text-xs">Meet Your Dentist</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Dr. Abhishek Arora, BDS</h2>
              <p className="text-lg font-bold text-slate-400 uppercase tracking-widest italic">Dental Surgeon</p>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Dr. Abhishek Arora founded Helix Dent to redefine the patient experience through a blend of clinical excellence and personalized care. Specializing in restorative and preventive dentistry, he is committed to providing high-precision treatments in a private, focused environment. At Helix Dent, Dr. Arora personally oversees every procedure, ensuring that each patient receives undivided attention and a treatment plan tailored to their unique oral health goals.
            </p>
            
            <div className="pt-4">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-brand-teal font-extrabold uppercase tracking-widest text-sm border-b-2 border-brand-teal pb-1 hover:border-slate-300 transition-all"
              >
                Schedule a Consultation with Dr. Arora <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Helix Standard Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-12">
              <div className="space-y-4">
                <p className="text-brand-teal font-extrabold uppercase tracking-[0.2em] text-xs">Hygiene & Tech</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">The Helix Standard</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-brand-white border border-brand-silver flex items-center justify-center text-brand-teal shadow-sm group-hover:scale-110 transition-transform mt-0.5">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-extrabold text-slate-800 uppercase tracking-widest leading-none mb-2">Advanced Autoclave Sterilization</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">100% sterile instrument protocols for procedural safety.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-brand-white border border-brand-silver flex items-center justify-center text-brand-teal shadow-sm group-hover:scale-110 transition-transform mt-0.5">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-extrabold text-slate-800 uppercase tracking-widest leading-none mb-2">Minimally Invasive Approach</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Preserving maximum natural tooth structure through conservative, precision techniques.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-brand-white border border-brand-silver flex items-center justify-center text-brand-teal shadow-sm group-hover:scale-110 transition-transform mt-0.5">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-extrabold text-slate-800 uppercase tracking-widest leading-none mb-2">Premium Clinical Materials</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Using globally-sourced, high-grade biocompatible materials for lasting health.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden border border-brand-silver shadow-card">
                 <img 
                   src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2000&auto=format&fit=crop" 
                   alt="Professional dental diagnostic instruments at Helix Dent" 
                   className="w-full aspect-[4/3] object-cover grayscale-[0.05] hover:grayscale-0 transition-all duration-700"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-brand-teal/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="px-6 md:px-12 py-16 md:py-24 bg-white border-t border-brand-silver">
        <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-8 text-center">
                <div className="space-y-4">
                  <p className="text-brand-teal font-extrabold uppercase tracking-[0.2em] text-xs">Visit Us</p>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">Clinical Location</h2>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    <div className="flex items-start gap-4 text-left">
                        <MapPin className="w-5 h-5 text-brand-teal mt-1 shrink-0" />
                        <div>
                            <p className="font-bold text-slate-800 uppercase tracking-wide">Chanakya Place, Uttam Nagar, Delhi</p>
                            <p className="text-sm text-slate-500">Doctors Plaza, A 17, 18, Chanakya Place, Uttam Nagar, New Delhi, India</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 text-left">
                        <Clock className="w-5 h-5 text-brand-teal mt-1 shrink-0" />
                        <div>
                            <p className="font-bold text-slate-800 uppercase tracking-wide">Walk-ins Welcome & Appointments</p>
                            <p className="text-sm text-slate-500">Mon - Sat: 11:00 AM - 08:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="h-80 bg-slate-50 rounded-3xl border border-brand-silver overflow-hidden relative shadow-inner group">
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-teal/[0.02] group-hover:bg-brand-teal/[0.04] transition-colors">
                        <div className="text-center space-y-3 p-8">
                             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-brand-silver">
                                <MapPin className="w-6 h-6 text-brand-teal" />
                             </div>
                             <p className="text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em]">Google Maps Integration Placeholder</p>
                             <p className="text-xs text-slate-400 max-w-xs mx-auto">Click to view accurate directions to our Chanakya Place facility.</p>
                        </div>
                    </div>
                    {/* Placeholder for actual iframe */}
                    <img 
                      src="https://picsum.photos/seed/clinic-map/1200/800?grayscale&blur=2" 
                      className="w-full h-full object-cover opacity-20 pointer-events-none" 
                      alt="Map background"
                      referrerPolicy="no-referrer"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="w-full bg-white border-t border-brand-silver p-8 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-baseline gap-1 group cursor-default">
              <span className="text-2xl font-black tracking-tighter text-brand-teal">H</span>
              <span className="text-xl font-bold tracking-tight text-slate-300 -ml-0.5">elix Dent</span>
            </div>
          </div>
          <p className="mb-2 font-bold uppercase tracking-[0.2em] text-[10px] text-slate-400">Painless RCT • Dental Implants • Aesthetic Fillings</p>
          <p className="text-xs">© 2026 Helix Dent. Professional Care by Dr. Abhishek Arora, BDS.</p>
        </div>
      </footer>
    </div>
  );
}
