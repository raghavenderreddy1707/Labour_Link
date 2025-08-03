import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CalendarIcon, DollarSign } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const PostJob = () => {
  const { toast } = useToast();
  const [deadline, setDeadline] = useState<Date>();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    wage: "",
    wageType: "hourly",
    requiredSkills: [] as string[],
    jobType: "",
    urgency: "",
  });

  const skillOptions = [
    "Construction", "Plumbing", "Electrical", "Carpentry", "Painting", 
    "Roofing", "Landscaping", "Welding", "HVAC", "General Labor"
  ];

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      requiredSkills: prev.requiredSkills.includes(skill)
        ? prev.requiredSkills.filter(s => s !== skill)
        : [...prev.requiredSkills, skill]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase
    toast({
      title: "Job Posted Successfully!",
      description: "Your job listing is now live and visible to laborers.",
    });
    console.log("Job post data:", { ...formData, deadline });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = '/hirer/dashboard'}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-hirer">Post a New Job</h1>
            <p className="text-muted-foreground">Find the perfect laborer for your project</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Job Details</CardTitle>
            <CardDescription>
              Provide clear information about the position to attract qualified candidates
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              {/* Job Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Job Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
                  placeholder="e.g., Construction Worker, Plumber, Electrician"
                  required
                />
              </div>

              {/* Job Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Job Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                  placeholder="Describe the job responsibilities, requirements, and what makes this opportunity great..."
                  rows={6}
                  required
                />
              </div>

              {/* Location and Job Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                    placeholder="City, State"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="jobType">Job Type *</Label>
                  <Select value={formData.jobType} onValueChange={(value) => setFormData(prev => ({...prev, jobType: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="temporary">Temporary</SelectItem>
                      <SelectItem value="seasonal">Seasonal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Wage and Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="wage">Wage Amount *</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="wage"
                      value={formData.wage}
                      onChange={(e) => setFormData(prev => ({...prev, wage: e.target.value}))}
                      placeholder="25 or 25-30"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="wageType">Wage Type *</Label>
                  <Select value={formData.wageType} onValueChange={(value) => setFormData(prev => ({...prev, wageType: value}))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Per Hour</SelectItem>
                      <SelectItem value="daily">Per Day</SelectItem>
                      <SelectItem value="weekly">Per Week</SelectItem>
                      <SelectItem value="project">Per Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Required Skills */}
              <div className="space-y-2">
                <Label>Required Skills *</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skillOptions.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={skill}
                        checked={formData.requiredSkills.includes(skill)}
                        onCheckedChange={() => handleSkillToggle(skill)}
                      />
                      <Label htmlFor={skill} className="text-sm font-normal">
                        {skill}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deadline and Urgency */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Application Deadline *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !deadline && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {deadline ? format(deadline, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={deadline}
                        onSelect={setDeadline}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({...prev, urgency: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Flexible timeline</SelectItem>
                      <SelectItem value="medium">Medium - Standard timeline</SelectItem>
                      <SelectItem value="high">High - Need ASAP</SelectItem>
                      <SelectItem value="urgent">Urgent - Immediate start</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">💡 Tips for a great job posting:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Be specific about the skills and experience required</li>
                  <li>• Include details about working conditions and equipment provided</li>
                  <li>• Mention any benefits like insurance, training, or advancement opportunities</li>
                  <li>• Set a competitive wage based on local market rates</li>
                </ul>
              </div>
            </CardContent>
            
            <CardFooter className="flex gap-4">
              <Button type="button" variant="outline" className="flex-1">
                Save as Draft
              </Button>
              <Button type="submit" variant="hirer" className="flex-1">
                Post Job Now
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PostJob;