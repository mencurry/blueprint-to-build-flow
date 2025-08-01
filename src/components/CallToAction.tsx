import { Button } from "@/components/ui/button";
import penguinMascot from "@/assets/penguin-mascot.png";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-24 translate-y-24"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full scale-110 animate-pulse"></div>
              <img
                src={penguinMascot}
                alt="Senior Blossom Mascot"
                className="w-24 h-24 md:w-32 md:h-32 relative z-10"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Ready to Help
              <br />
              Seniors Blossom?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of compassionate people in making a difference. Your support helps seniors in our community live their golden years with dignity, joy, and connection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-primary-foreground/90 hover:text-primary-dark px-8 py-4 text-lg font-semibold shadow-soft transition-all duration-300"
            >
              Get Involved
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Donate Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;