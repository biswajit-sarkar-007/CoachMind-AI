import React from "react";

import { UserPlus, FileEdit, Users, LineChart } from "lucide-react";

type HowItWork = {
  title: string;
  description: string;
  icon: React.ReactElement;
};

const howItWorks: HowItWork[] = [
 {
  title: "Seamless Onboarding",
  description: "Tell us your goals and industry to unlock personalized growth strategies",
  icon: <UserPlus className="w-8 h-8 text-primary" />,
},
{
  title: "Build Impactful Documents",
  description: "Design ATS-friendly resumes and persuasive cover letters that stand out",
  icon: <FileEdit className="w-8 h-8 text-primary" />,
},
{
  title: "Ace Every Interview",
  description: "Sharpen your skills with AI-driven mock interviews tailored to your role",
  icon: <Users className="w-8 h-8 text-primary" />,
},
{
  title: "Visualize Your Growth",
  description: "Stay on top of your journey with smart analytics and real-time feedback",
  icon: <LineChart className="w-8 h-8 text-primary" />,
}

];

const HowItWorks = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4"> Start Your Journey</h2>
          <p className="text-muted-foreground">Step-by-step guide to unlocking your full potential</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  max-w-6xl mx-auto">
          {howItWorks.map((item: HowItWork, index: number) => {
            return <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                {item.icon}

                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
