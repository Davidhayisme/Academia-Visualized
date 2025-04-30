import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OastatusProps {
  disease: string | null;
}

export default function TopInstitutions({disease}: OastatusProps) {
  const [rdata, setrdata] = useState<{ title: string; date: string; description: string; impact:string; institution:string; }[]>([]);
  useEffect(() => {
    if (!disease) return;

    const apiUrl = import.meta.env.VITE_API_URL + "/tinst";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ disease })
    })
      .then((response) => response.json())
      .then((rawData) => {
        console.log(rawData)
        if (rawData && Array.isArray(rawData.tinst)) {
          setrdata(rawData.tinst);
        } else {
          console.error("Invalid response format from backend");
        }
      })
      .catch((error) => {
        console.error("Error fetching OA status data:", error);
      });
  }, [disease]);
  return (
    <Card className="data-card">
      <CardHeader>
        <CardTitle>Top Institutions</CardTitle>
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