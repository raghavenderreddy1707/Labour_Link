import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "@/pages/Index";
import Auth from "@/pages/Auth";
import LaborerSignup from "@/pages/LaborerSignup";
import HirerSignup from "@/pages/HirerSignup";
import LaborerDashboard from "@/pages/LaborerDashboard";
import HirerDashboard from "@/pages/HirerDashboard";
import JobListings from "@/pages/JobListings";
import PostJob from "@/pages/PostJob";
import Chat from "@/pages/Chat";
import Profile from "@/pages/Profile";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background font-work">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/laborer/signup" element={<LaborerSignup />} />
            <Route path="/hirer/signup" element={<HirerSignup />} />
            <Route path="/laborer/dashboard" element={<LaborerDashboard />} />
            <Route path="/hirer/dashboard" element={<HirerDashboard />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;