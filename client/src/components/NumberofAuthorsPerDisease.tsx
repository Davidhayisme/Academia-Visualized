import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NumberofAuthorsPerDisease() {

  // Fetch data from Flask API using fetch
  const [rdata, setrdata] = useState<{ name: string; value: Number}[]>([]);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL+"/topinst";
    console.log(apiUrl)
    fetch(apiUrl)
      .then((response) => response.json())
      .then((rawData) => {
        console.log(rawData);
        let parsedData = rawData;

        // If we have a 'body', it probably needs to be parsed

        if (parsedData && Array.isArray(parsedData.authors)) {
          setrdata(parsedData.authors);
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
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Number of Authors per Disease</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={rdata}
              margin={{ top: 5, right: 5, left: 5, bottom: 50}}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} tick={{ dy: 10 }}/>
              <YAxis label={{ 
                value: "Number of Trials", 
                angle: -90,
                position: "insideLeft" 
              }} />
              <Tooltip formatter={(value) => [`${value} trials`, "Count"]} />
              <Bar dataKey="value" fill="#553C9A" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};