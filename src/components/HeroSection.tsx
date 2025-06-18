
import { Button } from "@/components/ui/button";
import { Mic, Play, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Voice Memo
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Capture your thoughts with AI-powered voice recording.
            <br />
            <span className="text-purple-400">Transform speech into action.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-full border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              <Mic className="w-5 h-5 mr-2" />
              Start Recording
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 px-8 py-6 text-lg rounded-full transition-all duration-300">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <Zap className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Instant Transcription</h3>
              <p className="text-gray-400 text-sm">Real-time AI-powered speech-to-text conversion</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Smart Organization</h3>
              <p className="text-gray-400 text-sm">Automatically categorize and tag your memos</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <Mic className="w-8 h-8 text-pink-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Crystal Clear</h3>
              <p className="text-gray-400 text-sm">Advanced noise cancellation technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
