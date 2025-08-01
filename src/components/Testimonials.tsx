import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonial = {
    quote: "My volunteer team has been life-changing program. Sarah, who has many years. The little group was a thing. At first, and she became so shy and lacked her proper working skills. Because the elderly care provider helped, as well as the little way with them, and they have found their way back home.",
    author: "Sarah Ramos",
    role: "Senior Community Member",
    rating: 5
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            In Their Own Words
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from the seniors and families whose lives have been touched by our community programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-medium">
            <CardContent className="p-8 md:p-12 text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="space-y-2">
                <p className="font-semibold text-lg text-foreground">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;