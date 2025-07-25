import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What makes CoachMind AI unique as a career and interview preparation tool?",
    answer:
      "CoachMind AI is more than just a career development platform — it's your personal AI coach. It blends intelligent resume and cover letter generation with advanced mock interview simulations, real-time analytics, and mental wellness prompts to prepare you holistically for your next job opportunity.",
  },
  {
    question: "How does CoachMind AI generate personalized content?",
    answer:
      "During onboarding, CoachMind AI learns about your career goals, job role, industry, and experience. Based on this data, it generates resumes, cover letters, and tailored interview questions. Our adaptive system evolves with your feedback and helps you present your best self, aligned with your target role.",
  },
  {
    question: "How frequently is CoachMind AI updated with industry insights?",
    answer:
      "CoachMind AI pulls real-time trends, salary benchmarks, and top skill requirements using continuous AI-powered analysis. This ensures your content and practice sessions reflect the latest industry standards, keeping you one step ahead in the job market.",
  },
  {
    question: "Does CoachMind AI support mental wellness during interview prep?",
    answer:
      "Yes. CoachMind AI integrates supportive prompts, stress-reducing strategies, and motivational feedback throughout your preparation journey. We believe success starts with a clear, confident mindset — so we help you build both professional and emotional readiness.",
  },
  {
    question: "Is my data safe with CoachMind AI?",
    answer:
      "Absolutely. We use industry-standard encryption and secure authentication via Clerk to protect your personal and professional data. Your privacy and safety are our top priorities, and we never share your information with third parties.",
  },
  {
    question: "How does interview simulation work in CoachMind AI?",
    answer:
      "CoachMind AI provides adaptive, role-specific interview questions, listens to your answers, and delivers real-time feedback on tone, confidence, content quality, and delivery. Over time, you can track your improvement through analytics dashboards and receive AI-driven suggestions for each session.",
  },
  {
    question: "Can I customize the AI-generated documents and responses?",
    answer:
      "Yes, CoachMind AI gives you full control. Our content is a high-quality starting point, and you can easily edit, refine, and personalize it using our user-friendly markdown editor. Make it yours before you send it to recruiters.",
  },
];


const Faq = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">
             Frequestly Asked Questions
          </h2>
          <p className="text-muted-foreground"> Find answers to common questions about our platfrom  </p>
        </div>

        <div className="max-w-6xl mx-auto w-full">
        <Accordion type="single" collapsible>
            {faqs.map((faqs:FAQ, index:number) => {
                return(
                    <AccordionItem value={`item-${index}`} key={index}>
    <AccordionTrigger>{faqs.question}</AccordionTrigger>
    <AccordionContent>{faqs.answer}</AccordionContent>
  </AccordionItem>
                )
            })}
  
</Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
