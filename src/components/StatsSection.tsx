import { Award, Briefcase, Scale } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years of Experience" },
  { icon: Briefcase, value: "200+", label: "Projects Completed" },
  { icon: Scale, value: "500+", label: "Legal Cases Handled" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container px-4">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="animate-count-up">
                <Icon size={36} className="mx-auto mb-3 text-primary-foreground/80" />
                <div className="text-5xl sm:text-6xl font-bold text-primary-foreground font-serif mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-base font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
