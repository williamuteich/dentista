import { ChevronLeft, ChevronRight, Star, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import beforeAfterImage from '../assets/before-after-whitening.jpg';

const ResultsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const results = [
    {
      id: 1,
      image: beforeAfterImage,
      treatment: "Clareamento Dental",
      description: "Clareamento profissional com 8 tons de diferença",
      duration: "1 sessão",
      rating: 5
    },
    {
      id: 2,
      image: beforeAfterImage,
      treatment: "Lentes de Contato Dental",
      description: "Transformação completa do sorriso com lentes de porcelana",
      duration: "2 sessões",
      rating: 5
    },
    {
      id: 3,
      image: beforeAfterImage,
      treatment: "Implante Dentário",
      description: "Reabilitação completa com implante e coroa em porcelana",
      duration: "3 meses",
      rating: 5
    },
    {
      id: 4,
      image: beforeAfterImage,
      treatment: "Restauração Estética",
      description: "Restauração em resina com técnica minimamente invasiva",
      duration: "1 sessão",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length);
  };

  const whatsappLink = "https://wa.me/5551991581059?text=Olá!%20Vi%20os%20resultados%20dos%20tratamentos%20e%20gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section id="resultados" className="section-padding bg-[hsl(var(--dental-gray))]">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--dental-blue))]">
            Resultados Comprovados
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Transformações</span> Reais
            <br />
            de Nossos Pacientes
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja os resultados incríveis que alcançamos com nossos tratamentos especializados. 
            Cada sorriso tem uma história de transformação única.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {results.map((result) => (
                <div key={result.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 items-center p-8 bg-white rounded-3xl">
                    {/* Image */}
                    <div className="relative">
                      <img 
                        src={result.image}
                        alt={`Resultado do tratamento: ${result.treatment} - antes e depois`}
                        className="w-full rounded-2xl shadow-[var(--shadow-card)]"
                      />
                      <div className="absolute top-4 left-4 bg-[hsl(var(--dental-blue))] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Antes & Depois
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-[hsl(var(--dental-blue))] mb-3">
                          {result.treatment}
                        </h4>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {result.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5 text-[hsl(var(--dental-blue))]" />
                          <span className="font-semibold">Duração: {result.duration}</span>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          {[...Array(result.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 py-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[hsl(var(--dental-blue))]">100%</div>
                          <div className="text-sm text-muted-foreground">Satisfação</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[hsl(var(--dental-blue))]">0</div>
                          <div className="text-sm text-muted-foreground">Dor</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[hsl(var(--dental-blue))]">5★</div>
                          <div className="text-sm text-muted-foreground">Avaliação</div>
                        </div>
                      </div>

                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-dental-primary w-full">
                          Quero Resultados Como Este
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[hsl(var(--dental-blue))] hover:text-white transition-all duration-300"
            aria-label="Resultado anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[hsl(var(--dental-blue))] hover:text-white transition-all duration-300"
            aria-label="Próximo resultado"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[hsl(var(--dental-blue))] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para resultado ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Mais de <strong>500 pacientes</strong> já transformaram seus sorrisos conosco
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="btn-dental-primary text-lg px-8 py-4">
              Ver Mais Resultados no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;