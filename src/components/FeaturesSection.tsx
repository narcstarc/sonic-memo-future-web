
import { Card } from "@/components/ui/card";
import { Mic, Brain, Cloud, Share2, Lock, Smartphone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms analyze your voice patterns and provide intelligent insights.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Synchronization", 
      description: "Seamlessly sync your voice memos across all devices with enterprise-grade security.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Share2,
      title: "Instant Sharing",
      description: "Share your memos instantly with team members or export to your favorite platforms.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Your voice data is protected with military-grade encryption and zero-knowledge architecture.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Native apps for iOS, Android, Web, and Desktop with unified experience.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Mic,
      title: "Professional Quality",
      description: "Studio-quality recording with adaptive bitrate and noise reduction technology.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the future of voice recording with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="p-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
