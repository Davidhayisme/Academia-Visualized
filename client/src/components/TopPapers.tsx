import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OastatusProps {
  disease: string | null;
}

export default function TopPapers({disease}: OastatusProps) {
  const [rdata, setrdata] = useState<{ hyperlink: string; name: string; association: number;}[]>([]);
  useEffect(() => {
    if (!disease) return;

    const apiUrl = import.meta.env.VITE_API_URL + "/tp";

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
        if (rawData && Array.isArray(rawData.tp)) {
          setrdata(rawData.tp);
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
        <CardTitle>Top Papers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rdata.map((item, index) => (
            <div
              key={index} 
              className="p-4 border border-border rounded-md hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-medical-blue">{item.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.hyperlink}</p>
              <p className="mt-2 text-sm">Number of Citations: {item.association}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};