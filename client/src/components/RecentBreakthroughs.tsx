import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { researchBreakthroughs } from "@/data/cancerData";

export default function RecentBreakthroughs() {
  const [data, setData] = useState({
    recent_breakthrough_data: []
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
    <Card className="data-card">
      <CardHeader>
        <CardTitle>Recent Research Breakthroughs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.recent_breakthrough_data.map((item, index) => (
            <div
              key={index} 
              className="p-4 border border-border rounded-md hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-medical-blue">{item.title}</h3>
                <Badge 
                  variant={item.impact === "high" ? "default" : "outline"}
                  className={item.impact === "high" ? "bg-medical-teal" : ""}
                >
                  {item.impact} impact
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.date} • {item.institution}</p>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};