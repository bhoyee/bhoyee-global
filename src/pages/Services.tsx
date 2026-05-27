import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, Briefcase, Cpu, Laptop, CheckCircle2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const servicesList = [
  {
    id: 'training',
    title: 'Elite Training & Leadership',
    description: 'Empowering individuals and corporate teams with AI literacy, future-skills, and leadership strategies for the modern workforce.',
    icon: GraduationCap,
    color: 'bg-blue-500/10 text-blue-600',
    details: [
      'AI Literacy & Integration Training',
      'Future-Ready Leadership Development',
      'Professional Certification Training',
      'Corporate Team Upskilling Workshops',
      'Skills Gap Analysis & Strategy',
    ],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ce7da229-6bae-4bb3-ba7e-633f10a9bb17.jpg',
    imageAlt: 'Professional workshop focused on AI leadership and future-skills training',
  },
  {
    id: 'transformation',
    title: 'Business Transformation Consulting',
    description: 'Strategic operational redesign and advisory services to modernize your business architecture and drive sustainable growth.',
    icon: Briefcase,
    color: 'bg-indigo-500/10 text-indigo-600',
    details: [
      'Operational Redesign & Optimization',
      'Strategic Business Transformation',
      'Automation Advisory & Readiness',
      'Market Expansion & Scale Strategy',
      'Corporate Governance Consulting',
    ],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_63f94544-230b-4d9c-88ed-1443594716e0.jpg',
    imageAlt: 'Business transformation strategy session with professional consultants',
  },
  {
    id: 'automation',
    title: 'Digital Innovation & Automation',
    description: 'Scalable workflow automation, no-code solutions, and AI integration designed to optimize operations and reduce overhead.',
    icon: Cpu,
    color: 'bg-purple-500/10 text-purple-600',
    details: [
      'End-to-End Workflow Automation',
      'No-Code & Low-Code Implementation',
      'AI-Powered Process Integration',
      'SaaS Ecosystem Optimization',
      'Cloud Infrastructure Automation',
    ],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c3038783-bd00-4626-b1de-eecc9a7aa78a.jpg',
    imageAlt: 'Conceptual visualization of digital innovation and automated workflows',
  },
  {
    id: 'software',
    title: 'Custom Software & AI Engineering',
    description: 'Enterprise-grade software solutions and custom AI models engineered to solve complex business challenges.',
    icon: Laptop,
    color: 'bg-sky-500/10 text-sky-600',
    details: [
      'Enterprise Software Architecture',
      'Custom AI Model Development',
      'Web & Mobile App Engineering',
      'API-First Integration Solutions',
      'Scalable Backend Systems',
    ],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_a79ad6c1-d7ec-4362-9e14-544fd57f11d6.jpg',
    imageAlt: 'Software development and AI engineering environment showing complex code',
  },
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 pb-32 pt-16">
      {/* Header */}
      <section className="container px-4 md:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our <span className="text-primary">Core Services</span></h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          At Bhoyee Global Enterprise, we provide a diverse range of professional services designed to help individuals and businesses thrive in a rapidly evolving global market.
        </p>
      </section>

      {/* Services Sections */}
      {servicesList.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`py-12 ${index % 2 === 1 ? 'bg-slate-50 dark:bg-slate-950/50' : ''}`}
        >
          <div className="container px-4 md:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`inline-flex p-3 rounded-2xl ${service.color}`}>
                  <service.icon className="h-10 w-10" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                  <Button variant="ghost" className="group" onClick={() => toast.info("Brochure download will be available soon.")}>
                    Download Brochure <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              <div className={`relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Trust Banner */}
      <section className="container px-4 md:px-8">
        <div className="bg-primary rounded-3xl p-10 md:p-20 text-center text-primary-foreground space-y-8 shadow-2xl shadow-primary/20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Experience Excellence Today</h2>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto">
            Our multi-disciplinary team is ready to bring innovation and professionalism to your project.
          </p>
          <Button asChild variant="secondary" size="lg" className="rounded-full px-12 h-14 text-lg">
            <Link to="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;