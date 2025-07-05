import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Como funciona o clareamento dental?",
      answer: "O clareamento dental é realizado com gel clareador profissional aplicado nos dentes. O procedimento é indolor e pode clarear até 8 tons em uma única sessão. Utilizamos tecnologia de LED para acelerar o processo, garantindo resultados superiores e duradouros."
    },
    {
      question: "Quanto tempo dura o tratamento com lentes de contato dental?",
      answer: "O tratamento com lentes de contato dental geralmente leva de 2 a 3 consultas. Na primeira, fazemos a avaliação e planejamento. Na segunda, preparamos os dentes minimamente e moldamos. Na terceira, instalamos as lentes definitivas. Todo o processo é feito com máximo cuidado para preservar seus dentes naturais."
    },
    {
      question: "Os procedimentos são doloridos?",
      answer: "Não! Utilizamos técnicas modernas e anestesia local quando necessário. Nosso foco é no conforto total do paciente. A maioria dos procedimentos como clareamento e limpeza são totalmente indolores. Para tratamentos como implantes, garantimos que você não sinta nenhum desconforto."
    },
    {
      question: "Aceitam convênio ou plano de saúde?",
      answer: "Trabalhamos de forma particular para garantir a melhor qualidade e personalização do atendimento. No entanto, oferecemos condições especiais de pagamento e parcelamento facilitado em até 12x sem juros para todos os tratamentos."
    },
    {
      question: "Posso parcelar meu tratamento?",
      answer: "Sim! Oferecemos diversas formas de pagamento: cartões de débito e crédito, PIX à vista com desconto, e parcelamento em até 12x sem juros. Também temos planos de tratamento personalizados para facilitar seu investimento no sorriso dos sonhos."
    },
    {
      question: "Onde fica a clínica?",
      answer: "Nossa clínica está localizada no centro de Cachoeirinha, com fácil acesso e estacionamento próximo. Atendemos pacientes de Cachoeirinha, Gravataí, Canoas e região metropolitana de Porto Alegre. Entre em contato para receber o endereço completo e como chegar."
    },
    {
      question: "Quanto tempo duram os implantes dentários?",
      answer: "Os implantes dentários são uma solução definitiva e podem durar a vida toda com os cuidados adequados. Utilizamos implantes de titânio de primeira qualidade com garantia. Com boa higiene bucal e consultas regulares, seus implantes permanecerão perfeitos por décadas."
    },
    {
      question: "Como agendar minha avaliação gratuita?",
      answer: "É muito simples! Clique no botão do WhatsApp e envie uma mensagem. Responderemos rapidamente para agendar sua avaliação gratuita no horário que for mais conveniente para você. Também pode ligar diretamente ou preencher o formulário de contato."
    }
  ];

  const whatsappLink = "https://wa.me/5551996615024?text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20os%20tratamentos%20e%20gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <section id="faq" className="section-padding bg-[hsl(var(--dental-gray))]">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--dental-blue))]">
            Dúvidas Frequentes
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Perguntas</span> e Respostas
            <br />
            Sobre Nossos Tratamentos
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Esclarecemos as principais dúvidas sobre nossos tratamentos odontológicos. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="dental-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left p-2 focus:outline-none"
                  aria-expanded={openItems.includes(index)}
                >
                  <h4 className="text-lg font-semibold text-[hsl(var(--dental-blue))] pr-4">
                    {faq.question}
                  </h4>
                  <div className="flex-shrink-0 w-8 h-8 bg-[hsl(var(--dental-blue))] rounded-full flex items-center justify-center transition-transform duration-300">
                    {openItems.includes(index) ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  openItems.includes(index) ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-2 pt-4 border-t border-[hsl(var(--border))]">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center fade-in-up">
            <div className="dental-card bg-gradient-to-r from-[hsl(var(--dental-blue))] to-[hsl(var(--dental-blue-dark))] text-white">
              <h4 className="text-2xl font-bold mb-4">
                Ainda tem dúvidas?
              </h4>
              <p className="text-lg mb-6 opacity-90">
                Entre em contato conosco pelo WhatsApp e tire todas suas dúvidas pessoalmente
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-[hsl(var(--dental-blue))] hover:bg-gray-100 font-semibold px-8 py-3">
                    Falar com a Dra. Ana
                  </Button>
                </a>
                <Button 
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[hsl(var(--dental-blue))] font-semibold px-8 py-3"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Agendar Avaliação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;