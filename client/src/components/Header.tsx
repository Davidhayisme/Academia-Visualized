import React from "react";
import { Search, Bell, HelpCircle, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const diseases = [
    "Heart Disease",
    "Covid",
    "Alzheimer's",
    "Leukemia",
    "Diabetes",
    "Lymphoma",
    "Sarcoma",
    "Lung Cancer",
    "Bronchitis",
    "Liver Disease",
  ];

  return (
    <header className="flex flex-col sm:flex-row justify-between gap-4 items-center py-6">
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
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:bg-white/50 hover:backdrop-blur-sm transition-all duration-300"
            >
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

        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-white/50 hover:backdrop-blur-sm transition-all duration-300 relative"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
        </Button>

        <Button
          variant="outline"
          className="rounded-full glass border-medical-blue/20 hover:border-medical-blue/50 hover:bg-white/60"
        >
          <Sparkles className="h-4 w-4 mr-1 text-medical-blue" /> Filters
        </Button>
      </div>

      <Select>
        <SelectTrigger className="w-[200px] glass border-medical-blue/20">
          <SelectValue placeholder="Select disease" />
        </SelectTrigger>
        <SelectContent className="bg-white/95 backdrop-blur-sm border-medical-blue/20">
          {diseases.map((disease) => (
            <SelectItem key={disease} value={disease.toLowerCase().replace(/\s+/g, "-")}>
              {disease}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </header>
  );
};

export default Header;