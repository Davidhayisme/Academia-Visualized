import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CancerTypesPieChart() {
  const [data, setData] = useState({
    cancer_types_data: []
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
        <CardTitle className="text-lg font-medium">Cancer Types Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.cancer_types_data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="percent"
                nameKey="name"
                label={({ name, percent }) => `${name} ${(percent).toFixed(0)}%`}
              >
                {data.cancer_types_data.map((item, index) => (
                  <Cell key={`cell-${index}`} fill={item.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};