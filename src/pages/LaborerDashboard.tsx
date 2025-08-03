import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Briefcase, MessageSquare, User, MapPin, DollarSign, Clock } from "lucide-react";

const LaborerDashboard = () => {
  const navigation = [
    { label: "Dashboard", href: "/laborer/dashboard", icon: <Home className="w-4 h-4" />, active: true },
    { label: "Browse Jobs", href: "/jobs", icon: <Briefcase className="w-4 h-4" /> },
    { label: "Messages", href: "/chat", icon: <MessageSquare className="w-4 h-4" /> },
    { label: "Profile", href: "/profile", icon: <User className="w-4 h-4" /> },
  ];

  const recentJobs = [
    {
      id: 1,
      title: "Construction Worker - Downtown Project",
      company: "BuildCorp LLC",
      location: "New York, NY",
      wage: "$25/hour",
      type: "Full-time",
      posted: "2 days ago",
      skills: ["Construction", "General Labor"]
    },
    {
      id: 2,
      title: "Experienced Plumber Needed",
      company: "Metro Plumbing Services",
      location: "Brooklyn, NY",
      wage: "$30-35/hour",
      type: "Contract",
      posted: "1 day ago",
      skills: ["Plumbing", "HVAC"]
    },
    {
      id: 3,
      title: "Landscaping Crew Member",
      company: "Green Spaces Inc",
      location: "Queens, NY",
      wage: "$18-22/hour",
      type: "Part-time",
      posted: "3 hours ago",
      skills: ["Landscaping", "General Labor"]
    }
  ];

  return (
    <DashboardLayout
      userType="laborer"
      userName="John Smith"
      userLocation="New York, NY"
      navigation={navigation}
    >
      <div className="space-y-6">
        {/* Welcome Banner */}
        <Card className="bg-gradient-to-r from-laborer/10 to-laborer/5 border-laborer/20">
          <CardHeader>
            <CardTitle className="text-2xl text-laborer">Good morning, John! 👋</CardTitle>
            <CardDescription>
              You have 3 new job matches and 2 unread messages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="laborer">
                View New Matches
              </Button>
              <Button variant="outline">
                Update Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications Sent</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 from last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                This week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Job Listings */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Job Listings</CardTitle>
                <CardDescription>Jobs that match your skills and location</CardDescription>
              </div>
              <Button variant="outline" onClick={() => window.location.href = '/jobs'}>
                View All Jobs
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentJobs.map((job) => (
                <Card key={job.id} className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {job.wage}
                        </div>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <p className="text-xs text-muted-foreground">{job.posted}</p>
                      <Button variant="laborer" size="sm">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LaborerDashboard;