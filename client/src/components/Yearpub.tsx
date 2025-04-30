import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function yearpub() {

  // Fetch data from Flask API using fetch
  const [rdata, setrdata] = useState<{ year: string; covid: number; flu: number; mal: number; tube: number; aids: number }[]>([]);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL+"/yearpub";
    console.log(apiUrl)
    fetch(apiUrl)
      .then((response) => response.json())
      .then((rawData) => {
        console.log(rawData);
        let parsedData = rawData;

        // If we have a 'body', it probably needs to be parsed

        if (parsedData && Array.isArray(parsedData.yearpub)) {
          setrdata(parsedData.yearpub);
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
        <CardTitle className="text-lg font-medium">
          Disease Publications by Year
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rdata} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="COVID-19" stroke="#8884d8" name="COVID-19" />
            <Line type="monotone" dataKey="Influenza" stroke="#82ca9d" name="Influenza" />
            <Line type="monotone" dataKey="Malaria" stroke="#ffc658" name="Malaria" />
            <Line type="monotone" dataKey="Tuberculosis" stroke="#ff7300" name="Tuberculosis" />
            <Line type="monotone" dataKey="HIV/AIDS" stroke="#d62728" name="HIV/AIDS" />
          </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}