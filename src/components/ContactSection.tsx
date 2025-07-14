import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0A${formData.message}%0A%0AContatos:%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}`;
    const whatsappLink = `https://wa.me/5551991581059?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Show success toast
    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      info: "(51) 99661-5024",
      action: "tel:+5551996615024"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@dranasouza.com.br",
      action: "mailto:contato@dranasouza.com.br"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Centro de Cachoeirinha - RS",
      action: "#"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      info: "Seg à Sex: 8h às 18h | Sáb: 8h às 12h",
      action: "#"
    }
  ];

  return (
    <section id="contato" className="section-padding bg-[hsl(var(--dental-gray))]">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--dental-blue))]">
            Entre em Contato
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Agende</span> sua Avaliação
            <br />
            Gratuita Agora Mesmo
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atendê-lo! Entre em contato conosco e agende sua avaliação gratuita. 
            Responderemos rapidamente para cuidar do seu sorriso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-[hsl(var(--dental-blue))] fade-in-up">
              Informações de Contato
            </h4>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={contact.title}
                  className="dental-card hover:bg-white fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--dental-blue))] to-[hsl(var(--dental-blue-dark))] rounded-xl flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-[hsl(var(--dental-blue))] mb-1">
                        {contact.title}
                      </h5>
                      <a 
                        href={contact.action}
                        className="text-muted-foreground hover:text-[hsl(var(--dental-blue))] transition-colors"
                      >
                        {contact.info}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="dental-card fade-in-up">
              <h5 className="font-semibold text-[hsl(var(--dental-blue))] mb-4">
                Nossa Localização
              </h5>
              <div className="w-full h-64 bg-[hsl(var(--dental-blue-light))] rounded-xl flex items-center justify-center">
                <div className="text-center text-[hsl(var(--dental-blue))]">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Centro de Cachoeirinha</p>
                  <p className="text-sm">Fácil acesso e estacionamento próximo</p>
                  <Button 
                    className="mt-4 btn-dental-outline"
                    onClick={() => window.open('https://maps.google.com/?q=Cachoeirinha+RS+dentista', '_blank')}
                  >
                    Ver no Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-[hsl(var(--dental-blue))] fade-in-up">
              Envie sua Mensagem
            </h4>

            <div className="dental-card fade-in-up">
              <p className="text-muted-foreground mb-6">
                Preencha os dados abaixo e entraremos em contato o mais breve possível para agendar sua avaliação gratuita.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[hsl(var(--dental-blue))] mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="border-[hsl(var(--dental-blue))] focus:ring-[hsl(var(--dental-blue))]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[hsl(var(--dental-blue))] mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(51) 99999-9999"
                      className="border-[hsl(var(--dental-blue))] focus:ring-[hsl(var(--dental-blue))]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[hsl(var(--dental-blue))] mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="border-[hsl(var(--dental-blue))] focus:ring-[hsl(var(--dental-blue))]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[hsl(var(--dental-blue))] mb-2">
                    Descreva seu caso *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre sua necessidade odontológica ou qual tratamento tem interesse..."
                    rows={4}
                    className="border-[hsl(var(--dental-blue))] focus:ring-[hsl(var(--dental-blue))]"
                  />
                </div>

                <Button type="submit" className="btn-dental-primary w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você será redirecionado para o WhatsApp para finalizar o contato
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;