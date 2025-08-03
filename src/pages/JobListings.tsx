import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, DollarSign, Clock, Briefcase, Search, Filter, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JobListings = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [wageFilter, setWageFilter] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skillOptions = [
    "Construction", "Plumbing", "Electrical", "Carpentry", "Painting", 
    "Roofing", "Landscaping", "Welding", "HVAC", "General Labor"
  ];

  const jobs = [
    {
      id: 1,
      title: "Construction Worker - Downtown Project",
      company: "BuildCorp LLC",
      companyLogo: "/placeholder.svg",
      location: "New York, NY",
      wage: "$25/hour",
      type: "Full-time",
      posted: "2 days ago",
      deadline: "Dec 15, 2024",
      description: "Looking for experienced construction workers for a major downtown development project. Must have experience with concrete work and steel framing.",
      skills: ["Construction", "General Labor", "Safety"],
      benefits: ["Health Insurance", "Paid Time Off", "Safety Training"]
    },
    {
      id: 2,
      title: "Experienced Plumber Needed",
      company: "Metro Plumbing Services",
      companyLogo: "/placeholder.svg",
      location: "Brooklyn, NY",
      wage: "$30-35/hour",
      type: "Contract",
      posted: "1 day ago",
      deadline: "Dec 20, 2024",
      description: "Seeking skilled plumber for residential and commercial projects. Must have valid license and 3+ years experience.",
      skills: ["Plumbing", "HVAC", "Pipe Fitting"],
      benefits: ["Flexible Schedule", "Tool Allowance", "Performance Bonus"]
    },
    {
      id: 3,
      title: "Landscaping Crew Member",
      company: "Green Spaces Inc",
      companyLogo: "/placeholder.svg",
      location: "Queens, NY",
      wage: "$18-22/hour",
      type: "Part-time",
      posted: "3 hours ago",
      deadline: "Dec 25, 2024",
      description: "Join our landscaping team for seasonal work including lawn care, tree trimming, and garden maintenance.",
      skills: ["Landscaping", "General Labor", "Equipment Operation"],
      benefits: ["Outdoor Work", "Team Environment", "Growth Opportunities"]
    },
    {
      id: 4,
      title: "Electrical Technician",
      company: "PowerTech Solutions",
      companyLogo: "/placeholder.svg",
      location: "Manhattan, NY",
      wage: "$28-32/hour",
      type: "Full-time",
      posted: "1 week ago",
      deadline: "Dec 18, 2024",
      description: "Electrical technician needed for commercial building maintenance and installations. Must have electrical license.",
      skills: ["Electrical", "Troubleshooting", "Safety"],
      benefits: ["Health Insurance", "401k", "Training Programs"]
    }
  ];

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleApply = (jobId: number, jobTitle: string) => {
    toast({
      title: "Application Submitted!",
      description: `Your application for "${jobTitle}" has been sent successfully.`,
    });
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || job.location.includes(locationFilter);
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => job.skills.includes(skill));
    
    return matchesSearch && matchesLocation && matchesSkills;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => window.location.href = '/laborer/dashboard'}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Job Listings</h1>
              <p className="text-muted-foreground">Find your next opportunity</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Job title or company"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Location Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All locations</SelectItem>
                      <SelectItem value="Manhattan">Manhattan, NY</SelectItem>
                      <SelectItem value="Brooklyn">Brooklyn, NY</SelectItem>
                      <SelectItem value="Queens">Queens, NY</SelectItem>
                      <SelectItem value="Bronx">Bronx, NY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Wage Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Hourly Wage</label>
                  <Select value={wageFilter} onValueChange={setWageFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any wage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any wage</SelectItem>
                      <SelectItem value="15-20">$15-20/hour</SelectItem>
                      <SelectItem value="20-25">$20-25/hour</SelectItem>
                      <SelectItem value="25-30">$25-30/hour</SelectItem>
                      <SelectItem value="30+">$30+/hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Skills Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Skills</label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {skillOptions.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill)}
                        />
                        <label htmlFor={skill} className="text-sm">
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchTerm("");
                    setLocationFilter("");
                    setWageFilter("");
                    setSelectedSkills([]);
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  {filteredJobs.length} jobs found
                </h2>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest first</SelectItem>
                    <SelectItem value="wage-high">Highest wage</SelectItem>
                    <SelectItem value="wage-low">Lowest wage</SelectItem>
                    <SelectItem value="deadline">Deadline soon</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="p-6 hover:shadow-md transition-shadow">
                    <div className="space-y-4">
                      {/* Job Header */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <Badge variant="secondary">{job.type}</Badge>
                          </div>
                          <p className="text-laborer font-medium">{job.company}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-3 h-3" />
                              {job.wage}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              Posted {job.posted}
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="w-3 h-3" />
                              Deadline: {job.deadline}
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant="laborer" 
                          onClick={() => handleApply(job.id, job.title)}
                        >
                          Apply Now
                        </Button>
                      </div>

                      {/* Job Description */}
                      <p className="text-foreground">{job.description}</p>

                      {/* Skills Required */}
                      <div className="space-y-2">
                        <h4 className="font-medium">Required Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-2">
                        <h4 className="font-medium">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.benefits.map((benefit) => (
                            <Badge key={benefit} variant="secondary" className="bg-success/10 text-success">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <Card className="p-12 text-center">
                  <CardContent>
                    <Briefcase className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters or search terms to find more opportunities.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;