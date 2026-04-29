import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  bgColor?: string;
}

export default function Section({ id, title, children, bgColor = "bg-white/85" }: SectionProps) {
  return (
    <section id={id} className="min-h-screen py-20 px-6 scroll-mt-24">
      <div className={`max-w-5xl mx-auto rounded-3xl ${bgColor} backdrop-blur-xl shadow-2xl p-12 md:p-16`}>
        <h2 className="text-5xl md:text-6xl font-serif text-center mb-12 text-gray-900">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}