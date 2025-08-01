import { Card, CardContent } from "@/components/ui/card";
import volunteersImage from "@/assets/volunteers-helping.jpg";
import communityImage from "@/assets/community-seniors.jpg";

const Empowerment = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-soft-purple/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Empowering Seniors
            <br />
            <span className="text-primary">to Stay Active</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mission is to help seniors maintain their independence, stay connected with their community, and continue living fulfilling lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Building Stronger Communities Together
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every senior deserves to feel valued, supported, and connected. Our programs are designed to foster independence while providing the care and attention that enriches their daily lives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through our comprehensive community approach, we create environments where seniors can thrive, contribute their wisdom, and continue growing alongside people of all generations.
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
              <blockquote className="text-lg italic text-foreground mb-4">
                "A comprehensive community where seniors can thrive and live their best life possible."
              </blockquote>
              <p className="text-sm text-muted-foreground">- Our Vision Statement</p>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden shadow-soft border-border/50">
              <img
                src={volunteersImage}
                alt="Volunteers helping seniors"
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="overflow-hidden shadow-soft border-border/50 mt-8">
              <img
                src={communityImage}
                alt="Seniors in community activities"
                className="w-full h-48 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empowerment;