import { useState, useEffect } from "react";
import axios from "axios";
import { ArrowUpIcon, ArrowDownIcon, Zap } from "lucide-react";
import { keyStatistics } from "@/data/cancerData";
import { Progress } from "@/components/ui/progress";


export default function KeyStatistics() {
  const [data, setData] = useState({
    overview_stats: []
  });

  // Fetch data from Flask API using fetch
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json()) // Parse JSON response
      .then((data) => {
        console.log(data)
        setData(data); // Set data to state
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {data.overview_stats.map((item, index) => (
        <div 
          key={index} 
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-5 transition-all duration-300 
                    hover:shadow-lg hover:translate-y-[-4px] border-l-4 border-medical-blue
                    animate-fade-in relative overflow-hidden"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute -right-4 -top-4 opacity-10">
            <Zap className="h-20 w-20 text-medical-blue" />
          </div>
          
          <h3 className="text-sm font-medium text-muted-foreground flex items-center">
            {item.name}
          </h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-bold bg-gradient-to-r from-medical-blue to-medical-purple bg-clip-text text-transparent">
              {item.count}
            </p>
          </div>
          <div className="mt-2">
            <Progress
              value={item.trend}
              className="h-2"
              indicatorClassName="bg-gradient-to-r from-medical-blue to-medical-teal animate-pulse" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};