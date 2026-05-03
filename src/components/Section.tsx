import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  bgColor?: string;
}

export default function Section({ 
  id, 
  title, 
  children, 
  bgColor = "bg-white/90",
}: SectionProps) {
  return (
    <section id={id} className="min-h-screen py-20 px-6 scroll-mt-24">
      <div className={`max-w-5xl mx-auto rounded-3xl ${bgColor} backdrop-blur-sm shadow-2xl p-10 md:p-16`}>
        <h2 className="text-5xl md:text-6xl font-semibold text-center mb-14 text-white tracking-tight">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}