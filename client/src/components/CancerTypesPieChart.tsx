import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as dotenv from 'dotenv'

export default function CancerTypesPieChart() {
  const [cancerData, setCancerData] = useState<{ name: string; percent: number; color: string }[]>([]);
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
          setCancerData(parsedData.cancer_types_data);
        } else {
          console.error("cancer_types_data not found or not an array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching cancer types data:", error);
      });
  }, []);

  return (
    <Card className="data-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Cancer Types Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={cancerData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="percent"
                nameKey="name"
                label={({ name, percent }) => `${name} ${(percent ?? 0).toFixed(0)}%`}
              >
                {cancerData.map((item, index) => (
                  <Cell key={`cell-${index}`} fill={item.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}%`} />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}