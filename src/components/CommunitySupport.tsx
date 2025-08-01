import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import communityImage from "@/assets/community-seniors.jpg";
import volunteersImage from "@/assets/volunteers-helping.jpg";

const CommunitySupport = () => {
  const programs = [
    {
      title: "Blossom Tribute to Seniors 2023",
      description: "We created a community celebration honoring our wonderful seniors, featuring special awards, entertainment, and a feast celebrating their contributions to our community.",
      image: communityImage,
      category: "ANNUAL PROGRAM",
      date: "March 15, 2023"
    },
    {
      title: "Weekly Social Gatherings",
      description: "Our regular social meetups provide seniors with opportunities to connect, share stories, and build lasting friendships in a warm, welcoming environment.",
      image: volunteersImage,
      category: "ONGOING PROGRAM",
      date: "Every Wednesday"
    },
    {
      title: "Volunteer Training Program",
      description: "Comprehensive training for new volunteers to ensure they're equipped with the skills and knowledge needed to provide the best support for our senior community.",
      image: communityImage,
      category: "VOLUNTEER PROGRAM",
      date: "Monthly Sessions"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-soft-purple/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Supporting Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Through various programs and initiatives, we create meaningful connections and provide essential support for seniors in our community.
          </p>
        </div>

        <div className="space-y-8">
          {/* Featured Program */}
          <Card className="overflow-hidden shadow-medium border-border/50 bg-background/80 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={programs[0].image}
                  alt={programs[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {programs[0].category}
                  </span>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{programs[0].title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{programs[0].description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-muted-foreground">{programs[0].date}</span>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Program Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {programs.slice(1).map((program, index) => (
              <Card key={index} className="overflow-hidden shadow-soft border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-medium transition-all duration-300">
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {program.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{program.date}</span>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;