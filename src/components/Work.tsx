import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Scene from "./Scene";

// YouTube IDs for the grid
const REELS = [
  { id: "eAfgAnsl3-k", title: "AI Generated Video", category: "AI" },
  { id: "pvomgI8Kpfo", title: "Motion Graphics", category: "Motion" },
  { id: "dEbtv5U-QMQ", title: "AI Generated Video", category: "AI" },
  { id: "9aFhJv1-Ss4", title: "Little Nap Video", category: "Commercial" },
  { id: "IRqaB_2J6og", title: "Self Shoot and Edit", category: "Creative" },
  { id: "CxtynA5_JJc", title: "Government Client Dollar", category: "Client" },
  { id: "RDsWFEKdFM4", title: "Self Shoot and Edit", category: "Creative" },
  { id: "SvLdKrRGNYk", title: "Self Shoot and Edit", category: "Creative" },
  { id: "Rw-H-PDvZKw", title: "Self Shoot and Edit", category: "Creative" },
];

const LANDSCAPE_VIDEOS = [
  { id: "Ws8w4c09y74", title: "Canon NVS" },
  { id: "kzcHXYSBQzo", title: "Dollar" },
  { id: "CziHJSiumZ0", title: "RF Cinema Prime Lenses" },
  { id: "bHgEj5T7n6Q", title: "Indian Navy" },
  { id: "O_aeo4-5S-c", title: "Award Video for IBees" },
  { id: "oQQ44bW5LYs", title: "Canon Singapore" },
  { id: "5KXW9xONm7w", title: "Think Big Think Canon" },
  { id: "FD4yjqEZUqA", title: "MCG Brand Video" },
  { id: "x-x-PitprhY", title: "Get One Device One Tree" },
  { id: "dH24Z1eTNX4", title: "DOLR Pitch Brand Film" },
];

function ReelCard({ videoId, title, category, index }: { videoId: string, title: string, category: string, index: number }) {
  return (
    <div
      className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden bg-black border border-white/5 transition-all duration-500 shadow-xl hover:scale-[1.02]"
    >
      {/* Video Container */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Subtle Info Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 block mb-1">
          {category}
        </span>
        <h3 className="font-bold text-sm tracking-tight text-white/90">{title}</h3>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <div className="min-h-screen bg-[#020202] selection:bg-blue-500/30">
      <Scene />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-8">
        <Link 
          to="/" 
          className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group"
        >
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono tracking-widest uppercase">Back to Home</span>
        </Link>
      </nav>

      {/* Section 1: Netflix Grid */}
      <section className="min-h-screen pt-48 pb-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="space-y-4 mb-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-blue-500/50" />
            <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-white/40">Portfolio</h2>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Selected <span className="text-blue-500">Reels</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {REELS.map((reel, idx) => (
            <ReelCard 
              key={reel.id} 
              videoId={reel.id} 
              title={reel.title} 
              category={reel.category} 
              index={idx} 
            />
          ))}
        </div>
      </section>

      {/* Section 2: Fullscreen Cinematic Landscape Videos */}
      {LANDSCAPE_VIDEOS.map((video, idx) => {
        return (
          <section key={idx} className="min-h-screen w-full flex items-center justify-center bg-[#020202] p-6 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.02)_0%,transparent_70%)]" />
            
            <div className="w-full max-w-[1100px] aspect-video glass rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-xl relative z-10 group">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            ></iframe>
            
            {/* Subtle Glow Border */}
            <div className="absolute inset-0 border border-blue-500/5 rounded-[2rem] md:rounded-[3rem] pointer-events-none group-hover:border-blue-500/10 transition-colors duration-700" />
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
            <div className="text-white/10 font-mono text-[10px] tracking-[1em] uppercase">
              Project 0{idx + 1}
            </div>
            <div className="text-white/40 font-mono text-[11px] tracking-widest uppercase">
              {video.title}
            </div>
          </div>
        </section>
        );
      })}
    </div>
  );
}
