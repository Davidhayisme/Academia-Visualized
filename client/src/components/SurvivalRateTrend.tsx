import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SurvivalRateTrend() {
  const [data, setData] = useState({
    survival_rate_data: []
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
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">5-Year Survival Rate Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data.survival_rate_data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis 
                domain={[50, 80]}
                tickFormatter={(rate) => `${rate}%`}
                label={{ 
                  value: "5-Year Survival Rate", 
                  angle: -90, 
                  position: "insideLeft" 
                }}
              />
              <Tooltip formatter={(rate) => [`${rate}%`, "Survival Rate"]} />
              <Area
                type="monotone"
                dataKey="rate"
                stroke="#285E61"
                fill="#E6FFFA"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};