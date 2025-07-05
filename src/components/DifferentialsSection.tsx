import { Heart, Shield, Clock, CreditCard, MapPin, Award } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado e sem dor para cada paciente"
    },
    {
      icon: Shield,
      title: "Avaliação Gratuita",
      description: "Consulta inicial sem custo e sem compromisso"
    },
    {
      icon: Award,
      title: "Equipamentos Modernos",
      description: "Tecnologia de ponta e esterilização completa"
    },
    {
      icon: CreditCard,
      title: "Parcelamento Facilitado",
      description: "Condições especiais em até 12x sem juros"
    },
    {
      icon: Clock,
      title: "500+ Pacientes Atendidos",
      description: "Mais de uma década de experiência e excelência"
    },
    {
      icon: MapPin,
      title: "Localização Central",
      description: "Fácil acesso no centro de Cachoeirinha"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-[hsl(var(--dental-blue-light))] via-white to-[hsl(var(--dental-mint))]">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--dental-blue))]">
            Por Que Nos Escolher
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Diferenciais</span> que Fazem
            <br />
            Toda a Diferença
          </h3>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div 
              key={differential.title}
              className="dental-card text-center group hover:bg-white fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--dental-blue))] to-[hsl(var(--dental-blue-dark))] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <differential.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[hsl(var(--dental-blue))] mb-3">
                {differential.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;