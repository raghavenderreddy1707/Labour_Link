import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Upload, Edit, Star, MapPin, Mail, Phone, Calendar } from "lucide-react";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [userType] = useState<"laborer" | "hirer">("laborer"); // This would come from auth/context
  
  const [laborerData, setLaborerData] = useState({
    fullName: "John Smith",
    email: "john.smith@email.com",
    phone: "(555) 123-4567",
    location: "New York, NY",
    skills: ["Construction", "General Labor", "Safety"],
    experienceLevel: "experienced",
    bio: "Experienced construction worker with 8 years in the industry. Specialized in concrete work, steel framing, and safety procedures. Reliable, hardworking, and committed to quality.",
    profileImage: "",
  });

  const [hirerData, setHirerData] = useState({
    companyName: "BuildCorp LLC",
    contactPerson: "Sarah Johnson",
    email: "sarah@buildcorp.com",
    phone: "(555) 987-6543",
    location: "New York, NY",
    businessType: "Construction Company",
    description: "Leading construction company specializing in commercial and residential projects. We've been building quality structures for over 20 years.",
    logo: "",
  });

  const skillOptions = [
    "Construction", "Plumbing", "Electrical", "Carpentry", "Painting", 
    "Roofing", "Landscaping", "Welding", "HVAC", "General Labor"
  ];

  const handleSkillToggle = (skill: string) => {
    setLaborerData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSave = () => {
    // TODO: Connect to Supabase to save profile data
    toast({
      title: "Profile Updated!",
      description: "Your profile has been saved successfully.",
    });
    setIsEditing(false);
  };

  const reviews = [
    {
      id: 1,
      reviewer: "BuildCorp LLC",
      rating: 5,
      comment: "John is an excellent worker. Professional, punctual, and skilled. Highly recommend!",
      date: "Nov 2024",
      project: "Downtown Office Building"
    },
    {
      id: 2,
      reviewer: "Metro Construction",
      rating: 5,
      comment: "Outstanding work quality and great attention to detail. Will definitely hire again.",
      date: "Oct 2024",
      project: "Residential Complex"
    },
    {
      id: 3,
      reviewer: "Urban Builders",
      rating: 4,
      comment: "Reliable and hardworking. Completed the project on time and within budget.",
      date: "Sep 2024",
      project: "Warehouse Renovation"
    }
  ];

  const jobHistory = [
    {
      id: 1,
      title: "Construction Worker",
      company: "BuildCorp LLC",
      duration: "Mar 2024 - Nov 2024",
      status: "Completed",
      wage: "$25/hour"
    },
    {
      id: 2,
      title: "General Laborer",
      company: "Metro Construction",
      duration: "Jan 2024 - Feb 2024",
      status: "Completed",
      wage: "$22/hour"
    },
    {
      id: 3,
      title: "Concrete Worker",
      company: "Urban Builders",
      duration: "Sep 2023 - Dec 2023",
      status: "Completed",
      wage: "$28/hour"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => window.location.href = userType === 'laborer' ? '/laborer/dashboard' : '/hirer/dashboard'}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Profile</h1>
              <p className="text-muted-foreground">Manage your profile information</p>
            </div>
          </div>
          
          <Button 
            variant={userType === 'laborer' ? 'laborer' : 'hirer'}
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit className="w-4 h-4 mr-2" />
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="history">Job History</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-2xl">
                        {userType === 'laborer' 
                          ? laborerData.fullName.split(' ').map(n => n[0]).join('')
                          : hirerData.companyName.substring(0, 2)
                        }
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button size="icon" variant="secondary" className="absolute -bottom-2 -right-2">
                        <Upload className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold">
                      {userType === 'laborer' ? laborerData.fullName : hirerData.companyName}
                    </h2>
                    <div className="flex items-center gap-4 text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {userType === 'laborer' ? laborerData.location : hirerData.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {userType === 'laborer' ? laborerData.email : hirerData.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {userType === 'laborer' ? laborerData.phone : hirerData.phone}
                      </div>
                    </div>
                    
                    {userType === 'laborer' && (
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">(4.8 • 12 reviews)</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>

            {userType === 'laborer' ? (
              <Card>
                <CardHeader>
                  <CardTitle>Laborer Information</CardTitle>
                  <CardDescription>
                    {isEditing ? 'Update your professional information' : 'Your professional information'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {isEditing ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            value={laborerData.fullName}
                            onChange={(e) => setLaborerData(prev => ({...prev, fullName: e.target.value}))}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={laborerData.email}
                            onChange={(e) => setLaborerData(prev => ({...prev, email: e.target.value}))}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={laborerData.phone}
                            onChange={(e) => setLaborerData(prev => ({...prev, phone: e.target.value}))}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={laborerData.location}
                            onChange={(e) => setLaborerData(prev => ({...prev, location: e.target.value}))}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Skills</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {skillOptions.map((skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Checkbox
                                id={skill}
                                checked={laborerData.skills.includes(skill)}
                                onCheckedChange={() => handleSkillToggle(skill)}
                              />
                              <Label htmlFor={skill} className="text-sm font-normal">
                                {skill}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience Level</Label>
                        <Select value={laborerData.experienceLevel} onValueChange={(value) => setLaborerData(prev => ({...prev, experienceLevel: value}))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                            <SelectItem value="intermediate">Intermediate (3-5 years)</SelectItem>
                            <SelectItem value="experienced">Experienced (6-10 years)</SelectItem>
                            <SelectItem value="expert">Expert (10+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={laborerData.bio}
                          onChange={(e) => setLaborerData(prev => ({...prev, bio: e.target.value}))}
                          rows={4}
                        />
                      </div>

                      <Button onClick={handleSave} variant="laborer" className="w-full">
                        Save Changes
                      </Button>
                    </>
                  ) : (
                    <>
                      <div>
                        <h3 className="font-semibold mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {laborerData.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Experience Level</h3>
                        <Badge variant="outline">
                          {laborerData.experienceLevel === 'entry' && 'Entry Level (0-2 years)'}
                          {laborerData.experienceLevel === 'intermediate' && 'Intermediate (3-5 years)'}
                          {laborerData.experienceLevel === 'experienced' && 'Experienced (6-10 years)'}
                          {laborerData.experienceLevel === 'expert' && 'Expert (10+ years)'}
                        </Badge>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Bio</h3>
                        <p className="text-foreground">{laborerData.bio}</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                  <CardDescription>
                    {isEditing ? 'Update your company information' : 'Your company information'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {isEditing ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name</Label>
                          <Input
                            id="companyName"
                            value={hirerData.companyName}
                            onChange={(e) => setHirerData(prev => ({...prev, companyName: e.target.value}))}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="contactPerson">Contact Person</Label>
                          <Input
                            id="contactPerson"
                            value={hirerData.contactPerson}
                            onChange={(e) => setHirerData(prev => ({...prev, contactPerson: e.target.value}))}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={hirerData.email}
                            onChange={(e) => setHirerData(prev => ({...prev, email: e.target.value}))}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={hirerData.phone}
                            onChange={(e) => setHirerData(prev => ({...prev, phone: e.target.value}))}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={hirerData.location}
                            onChange={(e) => setHirerData(prev => ({...prev, location: e.target.value}))}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="businessType">Business Type</Label>
                          <Input
                            id="businessType"
                            value={hirerData.businessType}
                            onChange={(e) => setHirerData(prev => ({...prev, businessType: e.target.value}))}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Company Description</Label>
                        <Textarea
                          id="description"
                          value={hirerData.description}
                          onChange={(e) => setHirerData(prev => ({...prev, description: e.target.value}))}
                          rows={4}
                        />
                      </div>

                      <Button onClick={handleSave} variant="hirer" className="w-full">
                        Save Changes
                      </Button>
                    </>
                  ) : (
                    <>
                      <div>
                        <h3 className="font-semibold mb-2">Contact Person</h3>
                        <p className="text-foreground">{hirerData.contactPerson}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Business Type</h3>
                        <Badge variant="outline">{hirerData.businessType}</Badge>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Company Description</h3>
                        <p className="text-foreground">{hirerData.description}</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reviews & Ratings</CardTitle>
                <CardDescription>Feedback from your work experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{review.reviewer}</h4>
                          <p className="text-sm text-muted-foreground">{review.project}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job History</CardTitle>
                <CardDescription>Your completed and ongoing projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobHistory.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{job.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={job.status === 'Completed' ? 'default' : 'secondary'} className="mb-2">
                          {job.status}
                        </Badge>
                        <p className="text-sm font-medium">{job.wage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;