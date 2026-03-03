import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";
import { 
  ArrowRight, 
  ExternalLink, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  ChevronDown 
} from "lucide-react";
import Scene from "./components/Scene";
import HireMeModal from "./components/HireMeModal";
import Work from "./components/Work";
import { cn } from "./lib/utils";

const EXPERIENCE = [
  {
    company: "Interactive Bees Pvt. Ltd.",
    role: "Sr. Motion Graphic Artist & Video Editor",
    period: "2022 - Present",
    description: "Partner with creative directors to concept and storyboard motion graphic projects. Design and edit 50+ high-quality videos monthly."
  },
  {
    company: "Redefine Marcom Pvt. Ltd.",
    role: "Sr. Motion Graphic Artist & Video Editor",
    period: "2021 - 2022",
    description: "Consulted with clients to gain in-depth understanding of needs. Collaborated with directors to achieve animation goals."
  },
  {
    company: "Sonotek Cassettes",
    role: "Visual Effects & Video Editor",
    period: "2020 - 2021",
    description: "Worked with video editing team in all aspects of film production. Managed and regularly updated film library."
  },
  {
    company: "YouTube",
    role: "Content Creator",
    period: "2018 - 2020",
    description: "Created, directed and edited YouTube videos. Wrote scripts for videos on a array of diverse topics."
  }
];

const SKILLS = [
  { name: "Adobe Premiere Pro", level: 95 },
  { name: "Adobe After Effects", level: 90 },
  { name: "AI Video Generation Tools", level: 85 },
  { name: "AI Image Generation", level: 80 },
  { name: "AI Workflow Automation", level: 75 },
  { name: "Prompt Engineering", level: 85 }
];

const AWARDS = [
  { title: "Transformation Award", provider: "Redefine Marcom", date: "July 2022" },
  { title: "Top Performer", provider: "Sonotek Cassettes", date: "Sept 2020" }
];

const EDUCATION = [
  { school: "Delhi University", period: "2020 - Present" },
  { school: "Arena Animation", period: "2017 - 2021" },
  { school: "Gyandeep Vidya Bhawan", period: "2016 - 2017" }
];

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative">
      <Scene />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-center z-10"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white font-sans tracking-[0.5em] uppercase mb-6 text-[10px] md:text-xs font-medium"
          >
            Ashish Sharma
          </motion.p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-12 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-200/50 max-w-5xl mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Senior Motion Graphic Artist <br className="hidden sm:block" /> & Video Editor
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-black rounded-full font-semibold text-sm hover:bg-blue-500 hover:text-white transition-all duration-500 flex items-center gap-2 group shadow-xl shadow-white/5"
            >
              Hire Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link 
              to="/work"
              className="px-8 py-4 glass rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-500 border border-white/10"
            >
              Show Work
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-48 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10 space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-blue-500/50" />
                <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-white/40">The Artist</h2>
              </div>
              
              <p className="text-xl md:text-3xl font-medium leading-[1.6] tracking-tight text-white/90">
                I am a <span className="text-blue-400 font-semibold">Motion Graphics Artist</span> with over 6 years of experience crafting cinematic visuals for global production houses and corporate sectors. 
                <br /><br />
                My approach blends <span className="text-white italic">technical precision</span> with <span className="text-white italic">creative storytelling</span>, now enhanced by <span className="text-blue-400 font-semibold">AI Tools Knowledge</span> to streamline workflows and deliver cutting-edge visual impact for the modern era.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-48 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-48 h-fit"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
              WORK<br />
              <span className="text-blue-500">HISTORY</span>
            </h2>
            <p className="mt-6 text-white/40 font-medium max-w-xs leading-relaxed">
              A timeline of professional growth and creative contributions across leading media houses.
            </p>
          </motion.div>
          
          <div className="space-y-10">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 1, 
                  delay: idx * 0.15,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group relative p-10 glass rounded-[2rem] hover:border-blue-500/30 transition-all duration-700"
              >
                <div className="flex flex-wrap justify-between items-start gap-6 mb-8">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-500">{exp.company}</h3>
                    <p className="text-white/40 font-medium tracking-wide uppercase text-xs">{exp.role}</p>
                  </div>
                  <span className="px-5 py-1.5 rounded-full bg-white/5 text-[10px] font-mono tracking-widest text-white/30 border border-white/5">
                    {exp.period}
                  </span>
                </div>
                <p className="text-white/60 leading-relaxed text-lg max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Stats */}
      <section className="py-48 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code2 className="text-blue-500 w-5 h-5" />
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-white/40">Technical Arsenal</h2>
              </div>
              <h3 className="text-4xl font-bold tracking-tight">Mastering the <span className="text-blue-500">Craft</span></h3>
            </div>

            <div className="space-y-10">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="space-y-4 group">
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-medium group-hover:text-blue-400 transition-colors duration-500">{skill.name}</span>
                    <span className="text-xs font-mono text-white/30">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-[2.5rem] p-12 space-y-10 border-blue-500/10"
            >
              <div className="flex items-center gap-3">
                <Award className="text-blue-500 w-5 h-5" />
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-white/40">Recognition</h2>
              </div>
              <div className="space-y-8">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors duration-500">
                      <Award className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">{award.title}</h4>
                      <p className="text-sm text-white/40 font-medium">{award.provider} • {award.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="glass rounded-[2.5rem] p-12 space-y-10 border-white/5"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="text-blue-500 w-5 h-5" />
                <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-white/40">Education</h2>
              </div>
              <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors duration-500">
                      <GraduationCap className="w-6 h-6 text-white/20" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">{edu.school}</h4>
                      <p className="text-sm text-white/40 font-medium">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-64 px-6 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            LET'S CREATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 animate-gradient-x">SOMETHING ICONIC.</span>
          </h2>
          
          <div className="pt-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-14 py-6 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-500 active:scale-95 shadow-2xl shadow-white/5"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </section>

      <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
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

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}
