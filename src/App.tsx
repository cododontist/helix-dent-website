import { motion } from "motion/react";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Award,
  Clock,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const BRAND_TEAL = "#004D4D";
const WHATSAPP_NUMBER = "919990078009";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Helix%20Dent,%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20Dr.%20Arora.`;

  const treatments = [
    {
      title: "Painless RCT",
      subtitle: "Root Canal Treatment",
      description: "Precision rotary endodontics designed for speed, comfort, and absolute preservation of the natural tooth.",
      image: "RCT.jpg",
      tag: "Specialized"
    },
    {
      title: "Dental Implants",
      subtitle: "Permanent Restoration",
      description: "Premium titanium system providing a functional and aesthetic foundation that replicates your natural teeth.",
      image: "implant.jpg",
      tag: "Advanced"
    },
    {
      title: "Aesthetic Fillings",
      subtitle: "Tooth-Coloured",
      description: "Biocompatible composite resins that seamlessly blend with your enamel for invisible, durable protection.",
      image: "fillings.jpg",
      tag: "Cosmetic"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-teal selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-luxury" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black tracking-tighter text-brand-teal">H</span>
            <span className="text-2xl font-bold tracking-tight text-slate-300">elix Dent</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#treatments" className="text-xs font-bold uppercase tracking-luxury hover:text-brand-teal transition-colors py-2">Treatments</a>
            <a href="#location" className="text-xs font-bold uppercase tracking-luxury hover:text-brand-teal transition-colors py-2 mr-4">Location</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-brand-teal text-white rounded-full text-[10px] font-extrabold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-luxury flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Book via WhatsApp</span>
            </a>
            <a 
              href="tel:+919990078009" 
              className="px-6 py-3 border border-brand-teal text-brand-teal rounded-full text-[10px] font-extrabold uppercase tracking-widest hover:bg-brand-teal hover:text-white transition-all shadow-sm"
            >
              Call Clinic
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Hero Content - Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-teal-50 border border-teal-100 text-brand-teal text-[10px] font-bold uppercase tracking-luxury rounded-full">
                PRIVATE CLINICAL SUITE
              </span>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 uppercase">
                Redefining <br />
                <span className="text-brand-teal">Clinical</span> <br />
                Purity
              </h1>
            </div>
            
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg font-medium">
              Experience Bespoke Dentistry. Dr. Abhishek Arora (BDS) provides high-end restorative solutions in an environment defined by focus, hygiene, and zero wait times.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-teal text-white px-8 py-5 rounded-2xl flex items-center gap-3 font-bold text-sm shadow-luxury hover:scale-[1.02] active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book via WhatsApp</span>
              </a>
              
              <a 
                href="tel:+919990078009"
                className="bg-white border border-slate-200 text-slate-800 px-8 py-5 rounded-2xl flex items-center gap-3 font-bold text-sm hover:border-brand-teal transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call Clinic</span>
              </a>
            </div>
          </motion.div>

          {/* Hero Image - Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative group w-full"
          >
            <div className="aspect-[4/5] bg-brand-silver rounded-[3rem] overflow-hidden shadow-luxury relative z-10">
              <img 
                src="doctor.jpg" 
                alt="Dr. Abhishek Arora" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop";
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/20 to-transparent" />
            </div>
            
            {/* Signature Floating Card */}
            <div className="absolute -bottom-10 -left-10 md:-left-20 bg-white p-8 rounded-3xl shadow-luxury z-20 hidden sm:block border border-slate-100 min-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-brand-teal">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-extrabold text-sm uppercase tracking-wider">Clinical Safety</h3>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ISO 9001 Protocol</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                "We operate on a single-chair model to ensure absolute sterilization and dedicated clinical focus for every patient."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="bg-slate-50/50 py-24 md:py-32 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 text-[20rem] font-black text-slate-100 transform -translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-50 z-0">
          CLINIC
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-xl space-y-6 mb-20">
            <span className="text-brand-teal font-extrabold uppercase tracking-luxury text-[11px] block">Specialist Services</span>
            <h2 className="text-5xl font-black tracking-tight text-slate-900 font-serif leading-none">High-Precision <br />Dental Solutions.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {treatments.map((t, i) => (
              <motion.div 
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-luxury border border-white hover:border-brand-teal active:scale-[0.98] transition-all duration-500"
              >
                {/* Treatment Image */}
                <img 
                  src={t.image} 
                  alt={t.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://picsum.photos/seed/" + t.title + "/1200/1800";
                  }}
                  referrerPolicy="no-referrer"
                />
                
                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent group-hover:from-brand-teal/90 transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-10 space-y-4">
                  <div className="space-y-1">
                    <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-widest border border-white/20 mb-2">
                      {t.tag}
                    </div>
                    <h3 className="text-3xl font-black text-white tracking-tight uppercase leading-none">{t.title}</h3>
                    <p className="text-[10px] font-bold text-teal-300 uppercase tracking-widest italic">{t.subtitle}</p>
                  </div>
                  
                  <p className="text-sm text-slate-300 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {t.description}
                  </p>
                  
                  <div className="pt-2">
                    <ChevronRight className="text-white w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Excellence / About Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center">
           <div className="order-2 md:order-1 space-y-12">
              <div className="space-y-4">
                 <p className="text-brand-teal font-extrabold uppercase tracking-luxury text-[11px]">The Gold Standard</p>
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase leading-tight">Expertise Meets <br /><span className="text-slate-400">Empathy.</span></h2>
              </div>
              
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-teal shadow-sm group-hover:bg-brand-teal group-hover:text-white transition-all">
                    <Award className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-lg uppercase tracking-wider">Premium Materials</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">We exclusively use ISO-certified, biocompatible titanium and composite systems from the world's leading dental manufacturers.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-teal shadow-sm group-hover:bg-brand-teal group-hover:text-white transition-all">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-lg uppercase tracking-wider">Dedicated Time</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">No overbooking. Every appointment is a dedicated block of time where Dr. Arora focuses solely on your treatment.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-teal shadow-sm group-hover:bg-brand-teal group-hover:text-white transition-all">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-lg uppercase tracking-wider">Digital Precision</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">Utilizing advanced imaging and computerized rotary systems to ensure surgical-grade accuracy in every procedure.</p>
                  </div>
                </div>
              </div>
           </div>

           <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden border-8 border-white shadow-luxury">
                   <img 
                     src="clinic.jpg" 
                     className="w-full h-full object-cover" 
                     alt="Clinic Environment"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.src = "https://images.unsplash.com/photo-1629909613654-28a3a7c4abd4?q=80&w=1200&auto=format&fit=crop";
                     }}
                     referrerPolicy="no-referrer"
                   />
                </div>
                {/* Decorative teal dot */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-[100px] -z-10" />
              </div>
           </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
             <p className="text-brand-teal font-extrabold uppercase tracking-luxury text-[11px]">Contact & Visit</p>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase">Our Clinical Location</h2>
             <div className="w-20 h-1 bg-brand-teal mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left bg-white p-12 rounded-[2.5rem] shadow-luxury border border-white">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-brand-teal shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="font-black text-sm uppercase tracking-widest text-slate-400">Address</h4>
                  <p className="font-bold text-lg text-slate-800 leading-snug">
                    Doctors Plaza, A 17, 18, Chanakya Place, <br />
                    Uttam Nagar, New Delhi, India
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Doctors+Plaza+Uttam+Nagar+Delhi" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-brand-teal font-extrabold text-[11px] uppercase tracking-luxury pt-4 group border-b-2 border-brand-teal"
                  >
                    Get Directions <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-brand-teal shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="font-black text-sm uppercase tracking-widest text-slate-400">Consultation Hours</h4>
                  <p className="font-bold text-lg text-slate-800 leading-snug">
                    Mon — Sat <br />
                    11:00 AM — 08:00 PM
                  </p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest pt-4 italic">Prior appointment recommended</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="space-y-4 text-center md:text-left">
              <div className="flex items-baseline gap-1 justify-center md:justify-start">
                <span className="text-4xl font-black tracking-tighter text-brand-teal">H</span>
                <span className="text-3xl font-bold tracking-tight text-slate-300">elix Dent</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] italic">Precision Dentistry Suite</p>
           </div>
           
           <div className="flex gap-12 text-center md:text-right">
              <div className="space-y-2">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Expert Care</p>
                 <p className="font-bold text-slate-800">Dr. Abhishek Arora</p>
              </div>
              <div className="space-y-2">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Connect</p>
                 <div className="flex gap-4 justify-center md:justify-end">
                    <a href={whatsappLink} className="text-brand-teal hover:scale-110 transition-transform"><MessageCircle className="w-5 h-5 fill-current" /></a>
                    <a href="tel:+919990078009" className="text-brand-teal hover:scale-110 transition-transform"><Phone className="w-5 h-5" /></a>
                 </div>
              </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 text-center">
            <p className="text-slate-300 text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 Helix Dent. Professional clinical services by clinical head Dr. Abhishek Arora, BDS.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-luxury hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <div className="absolute right-20 bg-white text-slate-900 border border-slate-100 py-3 px-6 rounded-2xl shadow-luxury whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none hidden md:block">
           <p className="text-xs font-black uppercase tracking-widest">Connect with Dr. Arora</p>
        </div>
      </motion.a>
    </div>
  );
}
