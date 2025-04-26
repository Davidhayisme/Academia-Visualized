import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RecentBreakthroughs() {
  const [rdata, setrdata] = useState<{ title: string; date: string; description: string; impact: string; institution: string; }[]>([]);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((rawData) => {
        let parsedData = rawData;

        // If we have a 'body', it probably needs to be parsed
        if (parsedData.body) {
          try {
            parsedData = JSON.parse(parsedData.body);
          } catch (e) {
            console.error("Failed to parse body string:", e);
            parsedData = {};
          }
        }

        if (parsedData && Array.isArray(parsedData.cancer_types_data)) {
          setrdata(parsedData.recent_breakthrough_data);
        } else {
          console.error("recent_types_data not found or not an array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching recent types data:", error);
      });
  }, []);
  return (
    <Card className="data-card">
      <CardHeader>
        <CardTitle>Recent Research Breakthroughs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rdata.map((item, index) => (
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