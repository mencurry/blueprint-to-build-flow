import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/hero-elderly-woman.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-soft-purple via-background to-warm-pink/20 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Ignite Joy in a{" "}
                <span className="text-primary">Senior's Golden Years</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Join our mission to bring hope, care, and happiness to seniors. Your contribution creates lasting impact in their lives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-semibold shadow-soft transition-all duration-300">
                Get Involved →
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm text-muted-foreground">A Safe & Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">♥</span>
                </div>
                <span className="text-sm text-muted-foreground">Team Cerita</span>
              </div>
            </div>
          </div>

          {/* Right Content - Donation Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl transform rotate-3"></div>
            <Card className="relative bg-background/95 backdrop-blur-sm shadow-medium border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Choose an amount to donate</h3>
                  <p className="text-muted-foreground">Your generosity makes a real difference</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    {["$10", "$25", "$50", "$100"].map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        className="h-12 text-lg font-semibold border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-amount" className="text-sm font-medium">
                      Custom Amount
                    </Label>
                    <Input
                      id="custom-amount"
                      placeholder="Enter amount"
                      className="h-12 text-lg border-border/50"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Donation Type</Label>
                    <div className="flex space-x-4">
                      <Button variant="outline" className="flex-1 h-10 border-primary text-primary">
                        One Time
                      </Button>
                      <Button variant="outline" className="flex-1 h-10">
                        Monthly
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full h-12 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-lg shadow-soft">
                    Donate Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block opacity-20">
        <img
          src={heroImage}
          alt="Elderly woman smiling"
          className="w-full h-full object-cover rounded-l-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;