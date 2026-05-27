import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Rocket, GraduationCap, Briefcase, Laptop, Cpu, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const serviceSummaries = [
  {
    title: 'Elite Training & Leadership',
    description: 'Mastering AI literacy, future-skills, and leadership strategies for the modern workforce.',
    icon: GraduationCap,
    color: 'text-blue-500',
  },
  {
    title: 'Business Transformation',
    description: 'Strategic operational redesign and consulting to modernize your business architecture.',
    icon: Briefcase,
    color: 'text-indigo-500',
  },
  {
    title: 'Digital Innovation & Automation',
    description: 'Scalable workflow automation, no-code solutions, and AI integration for peak efficiency.',
    icon: Cpu,
    color: 'text-purple-500',
  },
  {
    title: 'Custom Software & AI Engineering',
    description: 'Enterprise-grade software and custom AI solutions engineered for high performance.',
    icon: Laptop,
    color: 'text-sky-500',
  },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-24 lg:py-36">
        {/* Elite Architectural Digital Background */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Main Blueprint Perspective Grid */}
          <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.2] [perspective:1500px]">
            <div className="absolute inset-0 [transform:rotateX(45deg)_translateY(-20%)_scale(2.5)]"
              style={{ 
                backgroundImage: `
                  linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 75%)'
              }} 
            />
          </div>

          {/* Floating Architectural Isometric Frames */}
          <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] opacity-[0.05] dark:opacity-[0.1] border-[1px] border-primary rotate-[15deg] skew-x-[15deg] skew-y-[15deg] transition-transform duration-[20s] animate-pulse" />
          <div className="absolute -bottom-[5%] left-[10%] w-[300px] h-[300px] opacity-[0.03] dark:opacity-[0.08] border-[2px] border-blue-500 -rotate-[10deg] skew-x-[-10deg]" />
          
          {/* Intricate Network Nodes & Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.25] dark:opacity-[0.4]" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Architectural connection paths */}
            <path d="M 100 200 L 300 150 L 500 250 L 400 450 L 200 400 Z" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M 800 100 L 950 300 L 850 500 L 700 400 Z" fill="none" stroke="hsl(var(--blue-500))" strokeWidth="0.5" strokeDasharray="10,5" />
            <path d="M 50 800 L 250 950 L 450 850 L 300 700 Z" fill="none" stroke="hsl(var(--indigo-500))" strokeWidth="0.5" />
            
            {/* Dynamic Data Flow Points */}
            <circle cx="300" cy="150" r="2.5" fill="hsl(var(--primary))" filter="url(#glow)">
              <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="850" cy="500" r="2.5" fill="hsl(var(--blue-500))" filter="url(#glow)">
              <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="450" cy="850" r="2.5" fill="hsl(var(--indigo-500))" filter="url(#glow)">
              <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" begin="2s" />
            </circle>
          </svg>

          {/* Layered Color Diffusion */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary),0.08),transparent_40%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(var(--blue-500),0.05),transparent_40%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white dark:via-slate-950/5 dark:to-slate-950" />
        </div>

        <div className="container relative z-10 px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                Registered under CAMA 2020
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Innovating for a <span className="gradient-text">Global Future</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Bhoyee Global Enterprise is your trusted partner for elite training, business transformation, digital innovation, and custom AI engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <Button asChild size="lg" className="px-8 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 backdrop-blur-sm bg-white/50 dark:bg-black/20 hover:bg-white/80 dark:hover:bg-black/40 transition-all">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-muted animate-fade-in">
                <img 
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3429b3bf-a9a5-4d3e-9e41-1b5e22927df8.jpg" 
                  alt="Professional team collaborating on innovative software and business strategies"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Credibility</p>
                    <p className="text-xs text-muted-foreground">Certified & Registered Business</p>
                    <p className="text-[10px] font-mono opacity-60">BN 3098721</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container px-4 md:px-8">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Driving Excellence Across Industries</h2>
          <p className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
            Core competencies
          </p>
        </div>
      </section>

      {/* Core Services Summary */}
      <section className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceSummaries.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-none bg-slate-50 dark:bg-slate-900/50"
            >
              {/* Animated Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative">
                <div className={`${service.color} mb-2 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <CardDescription className="text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </CardDescription>
                <div className="pt-2">
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-sm font-semibold text-primary transition-all duration-300 gap-1 group/link"
                  >
                    <span className="relative">
                      Read more
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </CardContent>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 shadow-sm transition-opacity">
                <Zap className="h-12 w-12 text-primary" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-8">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-primary-foreground text-center space-y-8">
          <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Elevate Your Business?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Whether you need expert consulting, professional training, or custom software solutions, we are here to help you achieve your goals.
          </p>
          <Button asChild variant="secondary" size="lg" className="rounded-full px-10">
            <Link to="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;