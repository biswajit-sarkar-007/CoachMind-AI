import React from "react";
import { BrainCircuit, Briefcase, LineChart, ScrollText } from "lucide-react";
import { Card, CardContent } from "./ui/card";

type Feature = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "Smart Career Navigator",
    description:
      "Unlock tailored career paths and goals with the power of AI-driven insights.",
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Interactive Interview Coach",
    description:
      "Sharpen your skills with role-based mock interviews and instant AI feedback.",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Live Industry Analytics",
    description:
      "Track emerging trends, top roles, and salary benchmarks in real time.",
  },
  {
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "AI Resume Builder",
    description:
      "Craft professional, ATS-friendly resumes that stand out instantly.",
  },
];

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background" >
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter text-center mb-12">Unlock Your Career Potential with Smart Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-w-6xl mx-auto">
          {features.map((feature: Feature, index: number) => {
            return (
              <Card
               key={index}
               className="border-2 hover:border-primary transition-colors duration-300"
               >
                 
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2" >{feature.title}</h3>
                    <p  className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
                
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
