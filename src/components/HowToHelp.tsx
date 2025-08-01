import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import volunteersImage from "@/assets/volunteers-helping.jpg";
import communityImage from "@/assets/community-seniors.jpg";

const HowToHelp = () => {
  const helpOptions = [
    {
      title: "One-Time Donation",
      description: "Make a direct impact with a one-time contribution. Your donation goes directly towards supporting senior programs, activities, and essential services.",
      image: volunteersImage,
      buttonText: "Donate Now",
      buttonVariant: "default" as const
    },
    {
      title: "Recurring Donation",
      description: "Join our monthly giving program to provide sustained support. Recurring donations help us plan long-term programs and ensure consistent care for our seniors.",
      image: communityImage,
      buttonText: "Give Monthly",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How You Can Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There are many ways to make a difference in the lives of seniors. Choose the option that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {helpOptions.map((option, index) => (
            <Card key={index} className="overflow-hidden shadow-soft border-border/50 bg-background hover:shadow-medium transition-all duration-300">
              <div className="relative">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{option.description}</p>
                <Button 
                  className={`w-full h-12 font-semibold text-lg ${
                    option.buttonVariant === "default" 
                      ? "bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft" 
                      : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                  variant={option.buttonVariant}
                >
                  {option.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;