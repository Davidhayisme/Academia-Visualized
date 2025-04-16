import { useState, useEffect } from "react";
import React from "react";
import Header from "@/components/Header";
import MainNav from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResearchAreas() {
  const [data, setData] = useState({
    research_areas_data: []
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
    <div className="container mx-auto px-4 py-6 max-w-7xl animate-fade-in">
      <Header />
      <div className="mt-6">
        <MainNav />
      </div>
      
      <main className="mt-8">
        <section>
          <h2 className="text-xl font-bold mb-4 text-medical-blue">Research Areas</h2>
          <p className="text-muted-foreground mb-6">Explore the key focus areas driving cancer research forward</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.research_areas_data.map((area, index) => (
              <Card key={index} className="data-card">
                <CardHeader>
                  <CardTitle className="text-lg text-medical-blue">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{area.description}</p>
                  <div className="flex justify-between text-sm">
                    <span>
                      <span className="font-medium">{area.projects}</span> active projects
                    </span>
                    <span>
                      <span className="font-medium">{area.institutions}</span> institutions
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="mt-12 border-t border-border pt-6 pb-12 text-center text-sm text-muted-foreground">
        <p>Cancer Spark Insights • Data updated April 2025</p>
        <p className="mt-2">© 2025 Cancer Research Collaborative</p>
      </footer>
    </div>
  );
};