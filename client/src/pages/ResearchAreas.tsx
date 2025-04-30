import { useState, useEffect } from "react";
import React from "react";
import Header from "@/components/Header";
import MainNav from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generalData } from "@/data/cancerData";
import { Button } from "react-day-picker";

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
      <div className="mt-6">
        <MainNav />
      </div>
      
      <main className="mt-8">
        <section>
          <h2 className="text-xl font-bold mb-4 text-medical-blue">Disease Overview</h2>
          <p className="text-muted-foreground mb-6">Data is based on general guidelines with all quantitative data based metrics from 2024 or earlier.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalData.map((disease, index) => (
              <Card key={index} className="data-card">
                <CardHeader>
                  <CardTitle className="text-lg text-medical-blue">{disease.diseaseName}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <span>
                      Cases: <span className="font-medium">{disease.cases}</span>
                    </span>
                    <span>
                      Articles: <span className="font-medium">{disease.researchStats}</span>
                    </span>
                  </div>
                  <br></br>
                  <div className="flex justify-between text-sm">
                    <span>
                      Type: <span className="font-medium">{disease.type}</span>
                    </span>
                    <span>
                      Frequency: <span className="font-medium">{disease.rarity}</span>
                    </span>
                  </div>
                  <br></br>
                  <div className="flex justify-between text-sm">
                    <span>
                      Ages: <span className="font-medium">{disease.age}</span>
                    </span>
                    <span>
                      Gender: <span className="font-medium">{disease.gender}</span>
                    </span>
                  </div>
                  <br></br>
                  <div className="flex justify-between text-sm">
                    <span>
                      Preventable: <span className="font-medium">{disease.preventable}</span>
                    </span>
                    <span>
                      Curable: <span className="font-medium">{disease.curable}</span>
                    </span>
                  </div>
                  <br></br>
                  <div className="flex justify-between text-sm">
                    <span>
                      Infectious: <span className="font-medium">{disease.infectious}</span>
                    </span>
                  </div>
                  <footer className="mt-6 border-t border-border pt-6 pb-0 text-center text-sm text-muted-foreground"></footer>
                  <p className="text-sm mb-4">{disease.description}</p>
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