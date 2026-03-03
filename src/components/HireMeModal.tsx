import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, X } from "lucide-react";

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md glass rounded-3xl p-8 neon-border"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">Let's Create Something Great</h3>
              <p className="text-white/60">Ready to bring your vision to life? Get in touch directly.</p>
              
              <div className="grid gap-4">
                <a
                  href="tel:9958106865"
                  className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 hover:bg-blue-500/10 border border-white/5 hover:border-blue-500/30 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-1">Call Directly</div>
                    <div className="text-lg font-bold tracking-tight">+91 9958106865</div>
                  </div>
                </a>

                <a
                  href="mailto:ashishjii99@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 hover:bg-blue-500/10 border border-white/5 hover:border-blue-500/30 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-1">Send Email</div>
                    <div className="text-lg font-bold tracking-tight">ashishjii99@gmail.com</div>
                  </div>
                </a>
              </div>
              
              <div className="pt-4">
                <p className="text-xs text-white/30 uppercase tracking-[0.2em]">Based in New Delhi, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
