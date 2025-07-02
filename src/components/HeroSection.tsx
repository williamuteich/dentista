import { Phone, Star, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '../assets/hero-dental.jpg';

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5551996615024?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica.";

  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--dental-blue-light))] to-[hsl(var(--background))] pt-20">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[hsl(var(--dental-blue))] font-semibold">
                <MapPin className="w-5 h-5" />
                <span>Cachoeirinha - RS</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Dentista em Cachoeirinha</span>
                <br />
                Especialista em <span className="text-[hsl(var(--dental-blue))]">Clareamento, Implantes</span> e Estética Dental
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Agende sua avaliação com uma clínica moderna, segura e com resultados comprovados. 
                Transforme seu sorriso com a expertise da Dra. Ana Souza.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">5.0</span>
              <span className="text-muted-foreground">500+ pacientes atendidos</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="btn-whatsapp text-lg px-8 py-4">
                  <Phone className="w-5 h-5" />
                  Agendar pelo WhatsApp
                </Button>
              </a>
              <Button 
                className="btn-dental-outline text-lg px-8 py-4"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer a Clínica
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--dental-blue))]">500+</div>
                <div className="text-sm text-muted-foreground">Pacientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--dental-blue))]">10+</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--dental-blue))]">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--dental-blue))]">0</div>
                <div className="text-sm text-muted-foreground">Dor</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-hero)]">
              <img 
                src={heroImage} 
                alt="Consultório odontológico moderno em Cachoeirinha com equipamentos de última geração"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dental-blue))/20] to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-[var(--shadow-card)] float-animation">
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--dental-blue))]">Avaliação</div>
                <div className="text-lg font-semibold text-[hsl(var(--dental-success))]">GRATUITA</div>
                <div className="text-sm text-muted-foreground">Sem compromisso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;