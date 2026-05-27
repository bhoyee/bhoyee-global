import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Target, Heart, Award, CheckCircle2, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 pb-20 pt-12">
      {/* Header Section */}
      <section className="container px-4 md:px-8 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About <span className="text-primary">Bhoyee Global</span></h1>
          <p className="text-2xl font-semibold text-primary/80 italic leading-tight">
            "We architect the future of work & business through technology, insight, and human capital."
          </p>
        </div>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify md:text-center">
          <p>
            Bhoyee Global Enterprise is a registered Nigerian firm (CAMA 2020) operating at the intersection of digital transformation and strategic growth. Our integrated service pillars—Training, Business Consulting, Digital Innovation, and Software Development—empower enterprises to thrive in an AI‑driven world.
          </p>
          <p>
            We don’t just sell services; we embed ourselves as growth partners, helping organizations unlock efficiency, modernize operations, and build scalable digital assets.
          </p>
        </div>
      </section>

      {/* Registration Details */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <ShieldCheck className="h-4 w-4" />
                Legally Registered Entity
              </div>
              <h2 className="text-3xl font-bold tracking-tight leading-tight">Professionalism & Credibility</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Bhoyee Global Enterprise operates under the registration standards of the Companies and Allied Matters Act 2020. Our commitment to legality and professional ethics ensures that every client receives a reliable and high-quality experience.
              </p>
              <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                <p className="font-bold text-primary">Official Registration</p>
                <p className="text-sm text-muted-foreground">Business Name: Bhoyee Global Enterprise</p>
                <p className="text-sm font-mono mt-1">Reg No: BN 3098721</p>
              </div>
              <ul className="space-y-4">
                {[
                  'CAMA 2020 Registered Business',
                  'Professional Ethical Standards',
                  'Client-Centric Growth Partner',
                  'Innovation-Driven Digital Assets',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl shadow-primary/10">
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_02322d93-44ad-411f-9aee-0719e0c5ef52.jpg" 
                alt="Professional corporate office representing legality and trust"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Leadership */}
      <section className="container px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none bg-primary text-primary-foreground shadow-2xl overflow-hidden">
            <CardContent className="p-12 relative">
              <Quote className="absolute top-8 right-8 h-24 w-24 opacity-10" />
              <div className="space-y-8 relative z-10">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold uppercase tracking-widest opacity-80">Our Mission</h3>
                  <p className="text-3xl md:text-4xl font-bold leading-tight">
                    "To democratize intelligence and automation—making cutting-edge capabilities accessible to every forward-thinking organization."
                  </p>
                </div>
                <div className="pt-6 border-t border-primary-foreground/20">
                  <p className="text-xl font-semibold">— Bhoyee Leadership</p>
                  <p className="text-sm opacity-70">Certified under CAMA 2020 | Business Registration: BN 3098721</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Integrity',
              icon: Heart,
              color: 'text-red-500',
              bgColor: 'bg-red-500/10',
              description: 'We maintain the highest ethical standards in all our dealings, ensuring transparency and trust with every partner.'
            },
            {
              title: 'Excellence',
              icon: Award,
              color: 'text-amber-500',
              bgColor: 'bg-amber-500/10',
              description: 'Our commitment to quality ensures that we deliver exceptional results that exceed expectations and drive real business value.'
            },
            {
              title: 'Innovation',
              icon: Target,
              color: 'text-blue-500',
              bgColor: 'bg-blue-500/10',
              description: 'We stay at the forefront of technology, leveraging AI and automation to build future-ready solutions for our clients.'
            }
          ].map((value, idx) => (
            <Card 
              key={idx} 
              className="group relative overflow-hidden border-none bg-slate-50 dark:bg-slate-900/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${value.bgColor} flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed text-lg transition-colors duration-300 group-hover:text-foreground">
                  {value.description}
                </p>
              </CardContent>

              {/* Decorative accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full" />
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;