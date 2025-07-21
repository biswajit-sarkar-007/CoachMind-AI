import React from "react";

const Stats = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-muted-foreground">Companies Served</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-3xl font-bold">1K+</h3>
            <p className="text-muted-foreground">Mock Interviews Conducted</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-3xl font-bold">98%</h3>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-3xl font-bold">150+</h3>
            <p className="text-muted-foreground">Expert Mentors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
