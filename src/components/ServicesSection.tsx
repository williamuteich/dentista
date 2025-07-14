import { Sparkles, Smile, Heart, Shield, Zap, Crown } from 'lucide-react';
import { Button } from './ui/button';

const ServicesSection = () => {
  const whatsappLink = "https://wa.me/5551991581059?text=Olá!%20Gostaria%20de%20agendar%20um%20tratamento%20";

  const services = [
    {
      icon: Sparkles,
      title: "Clareamento Dental",
      description: "Clareamento profissional com tecnologia de ponta. Resultado imediato e duradouro.",
      benefits: ["Até 8 tons mais claro", "Sem sensibilidade", "Resultados em 1 sessão"],
      link: whatsappLink + "de%20clareamento%20dental."
    },
    {
      icon: Crown,
      title: "Lentes de Contato Dental",
      description: "Transformação completa do sorriso com lentes ultrafinas de porcelana.",
      benefits: ["Sorriso perfeito", "Mínimo desgaste", "Durabilidade de 15+ anos"],
      link: whatsappLink + "com%20lentes%20de%20contato%20dental."
    },
    {
      icon: Heart,
      title: "Implantes Dentários",
      description: "Reabilitação completa com implantes de titânio premium e próteses personalizadas.",
      benefits: ["Solução definitiva", "100% seguro", "Aparência natural"],
      link: whatsappLink + "de%20implantes%20dentários."
    },
    {
      icon: Smile,
      title: "Aparelhos Ortodônticos",
      description: "Ortodontia tradicional e invisível para alinhar seus dentes com conforto.",
      benefits: ["Tradicional ou invisível", "Tratamento personalizado", "Acompanhamento completo"],
      link: whatsappLink + "ortodôntico."
    },
    {
      icon: Shield,
      title: "Restauração Estética",
      description: "Restaurações em resina e porcelana com técnicas minimamente invasivas.",
      benefits: ["Cor natural", "Longa durabilidade", "Técnica conservadora"],
      link: whatsappLink + "de%20restauração%20estética."
    },
    {
      icon: Zap,
      title: "Limpeza e Profilaxia",
      description: "Limpeza profissional com ultrassom e polimento para manter sua saúde bucal.",
      benefits: ["Remoção total do tártaro", "Prevenção de doenças", "Hálito fresco"],
      link: whatsappLink + "de%20limpeza%20dental."
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--dental-blue))]">
            Nossos Serviços
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Tratamentos <span className="gradient-text">Especializados</span>
            <br />
            para Transformar seu Sorriso
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de tratamentos odontológicos com tecnologia de ponta 
            e técnicas minimamente invasivas para garantir seu conforto e os melhores resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="dental-card group hover:bg-gradient-to-br hover:from-[hsl(var(--dental-blue-light))] hover:to-white fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--dental-blue))] to-[hsl(var(--dental-blue-dark))] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[hsl(var(--dental-blue))] mb-3">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-[hsl(var(--dental-success))] rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <a href={service.link} target="_blank" rel="noopener noreferrer">
                <Button className="btn-dental-outline w-full group-hover:btn-dental-primary group-hover:text-white">
                  Quero agendar esse tratamento
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up">
          <div className="dental-card max-w-4xl mx-auto bg-gradient-to-r from-[hsl(var(--dental-blue))] to-[hsl(var(--dental-blue-dark))] text-white">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Não sabe qual tratamento é ideal para você?
            </h4>
            <p className="text-lg mb-6 opacity-90">
              Agende uma avaliação gratuita e personalize seu plano de tratamento
            </p>
            <a href={whatsappLink + "para%20avaliação%20gratuita."} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-[hsl(var(--dental-blue))] hover:bg-gray-100 font-semibold px-8 py-3">
                Agendar Avaliação Gratuita
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;