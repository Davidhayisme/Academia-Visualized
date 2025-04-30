import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Beaker, Microscope, Sparkles } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// ✅ Define props interface
interface MainNavProps {
  onDiseaseChange: (value: string) => void;
  selectedDisease: string | null;
}

// ✅ Accept props in the function component
const MainNav: React.FC<MainNavProps> = ({ onDiseaseChange, selectedDisease }) => {
  const location = useLocation();

  const navItems = [
    {
      name: "Research Areas",
      path: "/",
      icon: <Microscope className="h-5 w-5 mr-2" />,
    },
    {
      name: "Dashboard",
      path: "/research-areas",
      icon: <Beaker className="h-5 w-5 mr-2" />,
    },
  ];

  const diseases = [
    "Cancer",
    "HeartDisease",
    "Covid",
    "Alzheimers",
    "Diabetes",
    "Lymphoma",
    "Bronchitis",
    "LiverDisease",
  ];

  return (
    <nav className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 pb-4">
      {/* Nav links */}
      <div className="flex space-x-2 overflow-x-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
              location.pathname === item.path
                ? "bg-gradient-to-r from-medical-blue to-medical-teal text-white shadow-lg relative overflow-hidden"
                : "text-muted-foreground hover:text-primary hover:bg-muted"
            )}
          >
            {item.icon}
            {item.name}
            {location.pathname === item.path && (
              <>
                <span className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_white_10%,_transparent_60%)]"></span>
                <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-yellow-200 animate-pulse" />
              </>
            )}
          </Link>
        ))}
      </div>

      {/* Disease dropdown */}
      <Select onValueChange={onDiseaseChange} value={selectedDisease || ""}>
        <SelectTrigger className="w-[200px] glass border-medical-blue/20">
          <SelectValue placeholder="Select disease" />
        </SelectTrigger>
        <SelectContent className="bg-white/95 backdrop-blur-sm border-medical-blue/20">
          {diseases.map((disease) => (
            <SelectItem
              key={disease}
              value={disease.toLowerCase().replace(/\s+/g, "-")}
            >
              {disease}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </nav>
  );
};

export default MainNav;
