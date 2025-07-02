import { Award, Users, Clock, Shield } from 'lucide-react';
import { Button } from './ui/button';
import dentistImage from '../assets/dentist-portrait.jpg';

const AboutSection = () => {
  const whatsappLink = "https://wa.me/5551996615024?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20clínica%20e%20agendar%20uma%20consulta.";

  return (
    <section id="sobre" className="section-padding bg-[hsl(var(--dental-gray))]">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative slide-in-left">
            <div className="relative">
              <img 
                src={dentistImage}
                alt="Dr. Lenon Uteich - Dentista especialista em estética dental e reabilitação oral em Cachoeirinha"
                className="w-full max-w-md mx-auto rounded-3xl shadow-[var(--shadow-hero)]"
              />
              <div className="absolute -top-4 -right-4 bg-[hsl(var(--dental-blue))] text-white rounded-2xl p-4 float-animation">
                <Award className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--dental-blue))]">
                Sobre o Profissional
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Dr. Lenon Uteich</span>
                <br />
                <span className="text-2xl md:text-3xl text-muted-foreground font-medium">CRO-RS 54321</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Especialista em <strong>Estética Dental e Reabilitação Oral</strong> com mais de 10 anos de experiência. 
                Formada pela Universidade Federal do Rio Grande do Sul (UFRGS), com especializações em 
                implantodontia e estética dental.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[hsl(var(--dental-blue))]">Especialidades:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(var(--dental-blue))] rounded-full"></div>
                  <span>Estética Dental e Harmonização Facial</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(var(--dental-blue))] rounded-full"></div>
                  <span>Implantodontia e Reabilitação Oral</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(var(--dental-blue))] rounded-full"></div>
                  <span>Clareamento Dental Avançado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[hsl(var(--dental-blue))] rounded-full"></div>
                  <span>Ortodontia Tradicional e Invisível</span>
                </li>
              </ul>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="dental-card text-center">
                <Users className="w-8 h-8 text-[hsl(var(--dental-blue))] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[hsl(var(--dental-blue))]">500+</div>
                <div className="text-sm text-muted-foreground">Pacientes Atendidos</div>
              </div>
              <div className="dental-card text-center">
                <Clock className="w-8 h-8 text-[hsl(var(--dental-blue))] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[hsl(var(--dental-blue))]">10+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="dental-card text-center">
                <Award className="w-8 h-8 text-[hsl(var(--dental-blue))] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[hsl(var(--dental-blue))]">100%</div>
                <div className="text-sm text-muted-foreground">Especializada</div>
              </div>
              <div className="dental-card text-center">
                <Shield className="w-8 h-8 text-[hsl(var(--dental-blue))] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[hsl(var(--dental-blue))]">100%</div>
                <div className="text-sm text-muted-foreground">Segurança</div>
              </div>
            </div>

            <div className="pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="btn-dental-primary">
                  Conhecer Mais Sobre o Dr. Lenon
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;