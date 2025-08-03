import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Plus, MessageSquare, User, Users, Briefcase, Eye, Calendar } from "lucide-react";

const HirerDashboard = () => {
  const navigation = [
    { label: "Dashboard", href: "/hirer/dashboard", icon: <Home className="w-4 h-4" />, active: true },
    { label: "Post Job", href: "/post-job", icon: <Plus className="w-4 h-4" /> },
    { label: "Messages", href: "/chat", icon: <MessageSquare className="w-4 h-4" /> },
    { label: "Profile", href: "/profile", icon: <User className="w-4 h-4" /> },
  ];

  const jobPostings = [
    {
      id: 1,
      title: "Construction Worker - Downtown Project",
      location: "New York, NY",
      wage: "$25/hour",
      posted: "2 days ago",
      applicants: 12,
      status: "Active",
      deadline: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "Experienced Electrician",
      location: "Brooklyn, NY", 
      wage: "$35-40/hour",
      posted: "5 days ago",
      applicants: 8,
      status: "Active",
      deadline: "Dec 20, 2024"
    },
    {
      id: 3,
      title: "General Laborer - Warehouse",
      location: "Queens, NY",
      wage: "$18/hour",
      posted: "1 week ago",
      applicants: 23,
      status: "Closed",
      deadline: "Dec 10, 2024"
    }
  ];

  return (
    <DashboardLayout
      userType="hirer"
      userName="BuildCorp LLC"
      userLocation="New York, NY"
      navigation={navigation}
    >
      <div className="space-y-6">
        {/* Welcome Banner */}
        <Card className="bg-gradient-to-r from-hirer/10 to-hirer/5 border-hirer/20">
          <CardHeader>
            <CardTitle className="text-2xl text-hirer">Welcome back! 🏗️</CardTitle>
            <CardDescription>
              Manage your job postings and connect with talented workers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="hirer" onClick={() => window.location.href = '/post-job'}>
                Post New Job
              </Button>
              <Button variant="outline">
                View Applications
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                2 posted this week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">43</div>
              <p className="text-xs text-muted-foreground">
                +8 new today
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">
                +23% from last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interviews</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">
                Scheduled this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Job Postings */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Your Job Postings</CardTitle>
                <CardDescription>Manage and track your active job listings</CardDescription>
              </div>
              <Button variant="hirer" onClick={() => window.location.href = '/post-job'}>
                Post New Job
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {jobPostings.map((job) => (
                <Card key={job.id} className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <Badge 
                          variant={job.status === "Active" ? "default" : "secondary"}
                          className={job.status === "Active" ? "bg-success" : ""}
                        >
                          {job.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{job.location}</span>
                        <span>{job.wage}</span>
                        <span>Posted {job.posted}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {job.applicants} applicants
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Deadline: {job.deadline}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        View Applicants
                      </Button>
                      <Button variant="ghost" size="sm">
                        Edit Job
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

export default HirerDashboard;