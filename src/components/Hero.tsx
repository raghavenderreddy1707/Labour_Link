import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${heroImage})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8">
          Connecting Talent with Opportunity
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the premier platform where skilled laborers meet employers. 
          Find your next project or hire the talent you need.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="laborer" 
            size="lg"
            className="w-full sm:w-auto min-w-[200px] font-bold text-base"
            onClick={() => window.location.href = '/laborer/signup'}
          >
            Join as a Laborer
          </Button>
          <Button 
            variant="hirer" 
            size="lg"
            className="w-full sm:w-auto min-w-[200px] font-bold text-base"
            onClick={() => window.location.href = '/hirer/signup'}
          >
            Hire Talent
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;