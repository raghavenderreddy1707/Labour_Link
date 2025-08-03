import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Shield, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Skilled Professionals",
      description: "Access a network of verified, skilled laborers across all trades and industries."
    },
    {
      icon: Briefcase,
      title: "Quality Projects",
      description: "Find legitimate job opportunities from trusted employers and contractors."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Safe payments, verified profiles, and dispute resolution to protect everyone."
    },
    {
      icon: Clock,
      title: "Quick Matching",
      description: "Advanced matching system connects the right talent with the right opportunities fast."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Why Choose LaborLink?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The most trusted platform for connecting skilled workers with meaningful opportunities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center h-full border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="font-bold">
            Get Started Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;