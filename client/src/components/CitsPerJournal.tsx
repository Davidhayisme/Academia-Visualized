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

interface OastatusProps {
  disease: string | null;
}

export default function Cpj({ disease }: OastatusProps) {
  const [rdata, setrdata] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    if (!disease) return;

    const apiUrl = import.meta.env.VITE_API_URL + "/jcits";

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
        if (rawData && Array.isArray(rawData.journal_citations)) {
          setrdata(rawData.journal_citations);
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
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Publications Per Journal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={rdata}
              margin={{ top: 5, right: 5, left: 5, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} tick={{ dy: 10 }} />
              <YAxis
                label={{
                  value: "Number of Trials",
                  angle: -90,
                  position: "insideLeft"
                }}
              />
              <Tooltip formatter={(value) => [`${value} trials`, "Count"]} />
              <Bar dataKey="value" fill="#553C9A" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
