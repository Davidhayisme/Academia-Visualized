
import React from "react";
import Header from "@/components/Header";
import MainNav from "@/components/MainNav";
import KeyStatistics from "@/components/KeyStatistics";
import CancerTypesPieChart from "@/components/CancerTypesPieChart";
import FundingTrendChart from "@/components/FundingTrendChart";
import ClinicalTrialsChart from "@/components/ClinicalTrialsChart";
import NumberofAuthorsPerDisease from "@/components/NumberofAuthorsPerDisease";
import SurvivalRateTrend from "@/components/SurvivalRateTrend";
import RecentBreakthroughs from "@/components/RecentBreakthroughs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl animate-fade-in">
      <Header />
      <div className="mt-6">
        <MainNav />
      </div>
      
      <main className="mt-8">
        <section className="mb-6 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/20 to-medical-teal/20 blur-xl transform group-hover:scale-105 transition-all duration-1000 rounded-xl"></div>
          <div className="bg-gradient-to-r from-medical-blue to-medical-teal rounded-lg p-6 shadow-lg relative overflow-hidden backdrop-blur-sm">
            <div className="absolute -right-12 -top-12 h-40 w-40 bg-white opacity-20 rounded-full blur-2xl"></div>
            <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
              Cancer Research Dashboard
              <Sparkles className="ml-2 h-5 w-5 text-yellow-200" />
            </h2>
            <p className="text-white/80">Comprehensive insights and analytics for cancer research progress</p>
          </div>
        </section>

        <Tabs defaultValue="charts" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 backdrop-blur-sm bg-white/50">
            <TabsTrigger value="charts" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-medical-blue/80 data-[state=active]:to-medical-teal/80 data-[state=active]:text-white transition-all duration-300">Research Charts</TabsTrigger>
            <TabsTrigger value="breakthroughs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-medical-blue/80 data-[state=active]:to-medical-teal/80 data-[state=active]:text-white transition-all duration-300">Recent Breakthroughs</TabsTrigger>
          </TabsList>
          <TabsContent value="charts" className="mt-4 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-medical-blue text-center">Institutions</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <CancerTypesPieChart />
              <FundingTrendChart />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-medical-blue text-center">Journals</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <NumberofAuthorsPerDisease />
              <FundingTrendChart />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-medical-blue text-center">Authors</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ClinicalTrialsChart />
              <SurvivalRateTrend />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-medical-blue text-center">Papers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ClinicalTrialsChart />
              <SurvivalRateTrend />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-medical-blue text-center">Important Plots</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ClinicalTrialsChart />
              <SurvivalRateTrend />
            </div>
          </TabsContent>
          <TabsContent value="breakthroughs" className="mt-4 animate-fade-in">
            <RecentBreakthroughs />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="mt-12 border-t border-border pt-6 pb-12 text-center text-sm text-muted-foreground backdrop-blur-sm">
        <p>Cancer Spark Insights • Data updated April 2025</p>
        <p className="mt-2">© 2025 Cancer Research Collaborative</p>
      </footer>
    </div>
  );
};

export default Index;
