import penguinMascot from "@/assets/penguin-mascot.png";

const ImpactStats = () => {
  const stats = [
    {
      number: "31,899",
      label: "# of seniors served",
      color: "text-warm-orange"
    },
    {
      number: "20",
      label: "Life-changing Programmes",
      color: "text-primary"
    },
    {
      number: "25",
      label: "Investment for a self-sufficient operations",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Mascot */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 animate-pulse"></div>
              <img
                src={penguinMascot}
                alt="Senior Blossom Mascot"
                className="w-32 h-32 md:w-48 md:h-48 relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Your Impact In Numbers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;