import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, MessageSquare, User, LogOut, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "laborer" | "hirer";
  userName: string;
  userLocation?: string;
  navigation: Array<{
    label: string;
    href: string;
    icon: ReactNode;
    active?: boolean;
  }>;
}

const DashboardLayout = ({ children, userType, userName, userLocation, navigation }: DashboardLayoutProps) => {
  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-black text-primary font-work">
          LaborLink
        </h1>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navigation.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? userType : "ghost"}
              className="w-full justify-start gap-3"
              onClick={() => window.location.href = item.href}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </div>
      </nav>
      
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:left-0 md:w-64 md:bg-card md:border-r">
        <NavContent />
      </div>

      {/* Main Content */}
      <div className="md:pl-64">
        {/* Top Bar */}
        <header className="bg-card border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <NavContent />
                </SheetContent>
              </Sheet>

              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Welcome back, {userName}
                </h2>
                {userLocation && (
                  <p className="text-sm text-muted-foreground">{userLocation}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
              
              <Button variant="ghost" size="icon">
                <MessageSquare className="w-5 h-5" />
              </Button>

              <Avatar className="w-8 h-8">
                <AvatarImage src="" />
                <AvatarFallback>
                  {userName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;