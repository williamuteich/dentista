import { CreditCard, Smartphone, CalendarDays, Check } from 'lucide-react';

const PaymentSection = () => {
  const paymentMethods = [
    {
      icon: Smartphone,
      title: "PIX",
      description: "Pagamento instantâneo com desconto especial",
      benefit: "5% de desconto à vista"
    },
    {
      icon: CreditCard,
      title: "Cartões",
      description: "Aceitamos todos os cartões de débito e crédito",
      benefit: "Débito e crédito"
    },
    {
      icon: CalendarDays,
      title: "Parcelamento",
      description: "Parcele seu tratamento sem comprometer o orçamento",
      benefit: "Até 12x sem juros"
    }
  ];

  const benefits = [
    "Avaliação inicial sempre gratuita",
    "Orçamento detalhado sem compromisso",
    "Parcelamento personalizado conforme sua necessidade",
    "Formas de pagamento flexíveis",
    "Desconto especial para pagamento à vista",
    "Planos de tratamento adaptados ao seu orçamento"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--dental-blue))]">
            Formas de Pagamento
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Facilitamos</span> seu Investimento
            <br />
            no Sorriso Perfeito
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aceitamos Pix, Cartões de Débito e Crédito, e parcelamos seu tratamento em até 12x sem juros!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Payment Methods */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-[hsl(var(--dental-blue))] mb-8 fade-in-up">
              Métodos de Pagamento Aceitos
            </h4>
            
            <div className="space-y-6">
              {paymentMethods.map((method, index) => (
                <div 
                  key={method.title}
                  className="dental-card flex items-start space-x-4 hover:bg-[hsl(var(--dental-blue-light))] fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--dental-blue))] to-[hsl(var(--dental-blue-dark))] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-[hsl(var(--dental-blue))] mb-2">
                      {method.title}
                    </h5>
                    <p className="text-muted-foreground mb-2">
                      {method.description}
                    </p>
                    <div className="text-sm font-semibold text-[hsl(var(--dental-success))]">
                      ✓ {method.benefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Icons */}
            <div className="dental-card fade-in-up">
              <h5 className="text-lg font-semibold text-[hsl(var(--dental-blue))] mb-4">
                Cartões Aceitos:
              </h5>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <span className="text-sm">Visa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">MC</span>
                  </div>
                  <span className="text-sm">Mastercard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ELO</span>
                  </div>
                  <span className="text-sm">Elo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-8 bg-gradient-to-r from-green-500 to-green-700 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PIX</span>
                  </div>
                  <span className="text-sm">PIX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-[hsl(var(--dental-blue))] mb-8 fade-in-up">
              Benefícios Financeiros
            </h4>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 bg-[hsl(var(--dental-success))] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="dental-card bg-gradient-to-r from-[hsl(var(--dental-blue))] to-[hsl(var(--dental-blue-dark))] text-white fade-in-up">
              <h5 className="text-xl font-bold mb-4">
                🎉 Promoção Especial
              </h5>
              <p className="text-lg mb-4 opacity-90">
                <strong>Avaliação GRATUITA</strong> + Desconto especial para pagamento à vista
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">Até 12x sem juros</div>
                <div className="text-sm opacity-90">
                  Parcele seu tratamento e transforme seu sorriso sem comprometer o orçamento
                </div>
              </div>
            </div>

            {/* Calculator Example */}
            <div className="dental-card fade-in-up">
              <h5 className="text-lg font-semibold text-[hsl(var(--dental-blue))] mb-4">
                Exemplo de Parcelamento:
              </h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Clareamento Dental:</span>
                  <span className="font-semibold">12x de R$ 89,90</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Lentes de Contato:</span>
                  <span className="font-semibold">12x de R$ 299,90</span>
                </div>
                <div className="flex justify-between items-center border-t pt-3">
                  <span className="font-semibold">À vista com desconto:</span>
                  <span className="font-semibold text-[hsl(var(--dental-success))]">5% OFF</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                *Valores aproximados. Consulte condições específicas durante a avaliação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;