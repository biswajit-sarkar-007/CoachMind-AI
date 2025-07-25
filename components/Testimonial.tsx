import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

type Testimonial = {
  quote: string;
  author: string;
  image: string;
  role: string;
  company: string;
};
const testimonial: Testimonial[] = [
  {
    quote:
      "This platform transformed the way I prepare for interviews. The mock sessions felt so real!",
    author: "Aarav Mehta",
    image: "/testimonial1.jpg",
    role: "Full Stack Developer",
    company: "CodeCraft Labs",
  },
  {
    quote:
      "I loved how personalized the suggestions were. The progress tracking kept me motivated throughout!",
    author: "Devansh Kapoor",
    image: "/testimonial2.jpeg",
    role: "Data Analyst",
    company: "Insights360",
  },
  {
    quote:
      "From resume to offer letter, every step was guided and effective. Highly recommend this for career switchers!",
    author: "Ishita Roy",
    image: "/testimonial3.jpeg",
    role: "UX Designer",
    company: "CreativeHive",
  },
];

const Testimonial = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 ">
        <h2 className="text-3xl font-bold  tracking-tighter text-center mb-12">
          {" "}
          Start Your Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  max-w-6xl mx-auto">
          {testimonial.map((testimonial: Testimonial, index: number) => {
            return (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          height={32}
                          width={32}
                          alt="testimonial images"
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-primary">{testimonial.company}</p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2"> 
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute  -bottom-6">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
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

export default Testimonial;
