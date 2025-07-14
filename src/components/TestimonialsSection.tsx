import { Star, Quote } from 'lucide-react';
import { Button } from './ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      location: "Cachoeirinha",
      rating: 5,
      text: "Fiz meu clareamento dental com a Dra. Ana e amei o resultado! Atendimento excelente, sem dor e o resultado foi além das minhas expectativas. Super recomendo!",
      treatment: "Clareamento Dental"
    },
    {
      id: 2,
      name: "João Santos",
      location: "Cachoeirinha",
      rating: 5,
      text: "Depois de anos com vergonha do meu sorriso, fiz implantes com a Dra. Ana. Hoje tenho um sorriso que sempre sonhei. Profissional incrível e muito cuidadosa!",
      treatment: "Implantes Dentários"
    },
    {
      id: 3,
      name: "Ana Paula",
      location: "Gravataí",
      rating: 5,
      text: "As lentes de contato dental transformaram completamente meu sorriso! A Dra. Ana é muito técnica e cuidadosa. Clínica moderna e acolhedora. Nota 1000!",
      treatment: "Lentes de Contato"
    },
    {
      id: 4,
      name: "Carlos Ferreira",
      location: "Canoas",
      rating: 5,
      text: "Excelente profissional! Fiz meu tratamento ortodôntico com aparelho invisível. Processo tranquilo, sem dor e com acompanhamento constante. Muito satisfeito!",
      treatment: "Ortodontia Invisível"
    },
    {
      id: 5,
      name: "Luciana Costa",
      location: "Cachoeirinha",
      rating: 5,
      text: "A Dra. Ana é incrível! Além de ser uma excelente profissional, tem um carinho especial com cada paciente. Meu sorriso nunca esteve tão bonito!",
      treatment: "Estética Dental"
    }
  ];

  const whatsappLink = "https://wa.me/5551991581059?text=Olá!%20Vi%20os%20depoimentos%20dos%20pacientes%20e%20gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--dental-blue))]">
            O Que Dizem Nossos Pacientes
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Depoimentos</span> de Quem
            <br />
            Transformou o Sorriso
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos pacientes é nossa maior recompensa. 
            Confira alguns depoimentos de quem já viveu essa transformação conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="dental-card relative fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[hsl(var(--dental-blue))] rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="space-y-2">
                <div className="font-semibold text-[hsl(var(--dental-blue))]">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.location}
                </div>
                <div className="text-xs bg-[hsl(var(--dental-blue-light))] text-[hsl(var(--dental-blue))] px-3 py-1 rounded-full inline-block">
                  {testimonial.treatment}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center fade-in-up">
            <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--dental-blue))] mb-2">500+</div>
            <div className="text-muted-foreground">Pacientes Satisfeitos</div>
          </div>
          <div className="text-center fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--dental-blue))] mb-2">5.0</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--dental-blue))] mb-2">100%</div>
            <div className="text-muted-foreground">Recomendação</div>
          </div>
          <div className="text-center fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--dental-blue))] mb-2">10+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up">
          <div className="dental-card max-w-4xl mx-auto bg-gradient-to-r from-[hsl(var(--dental-blue))] to-[hsl(var(--dental-blue-dark))] text-white">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Você também pode ter um sorriso transformado!
            </h4>
            <p className="text-lg mb-6 opacity-90">
              Junte-se a mais de 500 pacientes que já transformaram suas vidas com um sorriso perfeito
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[hsl(var(--dental-blue))] hover:bg-gray-100 font-semibold px-8 py-3">
                  Quero Meu Depoimento Aqui
                </Button>
              </a>
              <Button 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[hsl(var(--dental-blue))] font-semibold px-8 py-3"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Mais Avaliações
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;