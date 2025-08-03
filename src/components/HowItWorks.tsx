const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and showcase your skills, experience, and availability. Upload your certifications and portfolio.",
      forWorkers: true
    },
    {
      number: "02", 
      title: "Browse & Apply",
      description: "Explore job opportunities that match your skills. Apply with one click or get matched automatically.",
      forWorkers: true
    },
    {
      number: "03",
      title: "Work & Get Paid",
      description: "Complete projects safely with our secure payment system. Build your reputation with reviews.",
      forWorkers: true
    }
  ];

  const employerSteps = [
    {
      number: "01",
      title: "Post Your Project",
      description: "Describe your project needs, timeline, and budget. Our system will help you reach the right talent.",
      forWorkers: false
    },
    {
      number: "02",
      title: "Review Candidates", 
      description: "Get applications from qualified workers. Review profiles, ratings, and past work examples.",
      forWorkers: false
    },
    {
      number: "03",
      title: "Hire & Manage",
      description: "Select the best fit and manage your project. Make secure payments upon completion.",
      forWorkers: false
    }
  ];

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to connect talent with opportunity
          </p>
        </div>

        {/* For Workers */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-primary">
            For Workers
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* For Employers */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-accent">
            For Employers
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {employerSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-foreground rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;