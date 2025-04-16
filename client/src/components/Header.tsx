
import React from "react";
import { Search, Bell, HelpCircle, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between gap-4 items-center py-6">
      <div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-medical-purple to-medical-teal flex items-center justify-center mr-3 relative animate-float shadow-lg">
            <div className="absolute inset-0 rounded-lg bg-white/10 animate-pulse"></div>
            <span className="text-white font-bold text-xl relative z-10">CS</span>
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-200" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
              Cancer Spark Insights
            </h1>
            <p className="text-muted-foreground">Advanced analytics for cancer research</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search research data..." 
            className="pl-10 w-[250px] rounded-full glass border-medical-blue/20 focus:border-medical-blue focus:ring-medical-blue"
          />
        </div>
        
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-white/50 hover:backdrop-blur-sm transition-all duration-300">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 glass border border-medical-blue/20">
            <div className="space-y-2">
              <h4 className="font-medium">Need help?</h4>
              <p className="text-sm text-muted-foreground">
                Browse through our comprehensive cancer research data or use the search bar to find specific information.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-white/50 hover:backdrop-blur-sm transition-all duration-300 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
        </Button>
        
        <Button variant="outline" className="rounded-full glass border-medical-blue/20 hover:border-medical-blue/50 hover:bg-white/60">
          <Sparkles className="h-4 w-4 mr-1 text-medical-blue" /> Filters
        </Button>
      </div>
    </header>
  );
};

export default Header;
