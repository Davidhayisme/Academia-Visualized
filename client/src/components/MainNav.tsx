
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Beaker, Microscope, TestTube, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      name: "Research Areas", 
      path: "/research-areas", 
      icon: <Microscope className="h-5 w-5 mr-2" /> 
    },
    { 
      name: "Dashboard", 
      path: "/", 
      icon: <Beaker className="h-5 w-5 mr-2" /> 
    }
  ];

  return (
    <nav className="flex space-x-2 overflow-x-auto pb-4">
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
    </nav>
  );
};

export default MainNav;
