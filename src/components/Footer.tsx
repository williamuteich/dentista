import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: '📷'
    },
    {
      name: 'Facebook', 
      url: 'https://facebook.com',
      icon: '📘'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com',
      icon: '🎵'
    }
  ];

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    'Clareamento Dental',
    'Lentes de Contato',
    'Implantes Dentários',
    'Aparelhos Ortodônticos',
    'Restauração Estética',
    'Limpeza e Profilaxia'
  ];

  return (
    <footer className="bg-gradient-to-br from-[hsl(var(--dental-blue))] via-[hsl(var(--dental-blue-dark))] to-[hsl(var(--dental-blue))] text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[hsl(var(--dental-blue))] font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Lenon Uteich</h3>
                <p className="text-white/80 text-sm">CRO-RS 54321</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Especialista em Estética Dental e Reabilitação Oral. 
              Transformando sorrisos em Cachoeirinha há mais de 10 anos 
              com tecnologia de ponta e atendimento humanizado.
            </p>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Siga-nos nas redes</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 flex items-center space-x-2">
                    <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                    <span>{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="https://wa.me/5551996615024"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    (51) 99661-5024
                  </a>
                  <p className="text-white/60 text-sm">WhatsApp disponível</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:contato@dranasouza.com.br"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    contato@dranasouza.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white">Centro de Cachoeirinha</p>
                  <p className="text-white/60 text-sm">Rio Grande do Sul</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white">Seg à Sex: 8h às 18h</p>
                  <p className="text-white">Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/80">
                © {currentYear} | Clínica Odontológica em Cachoeirinha | Todos os direitos reservados.
              </p>
              <p className="text-white/60 text-sm mt-1">
                Dr. Lenon Uteich - CRO-RS 54321 | Especialista em Estética Dental
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
          
          {/* Love Note */}
          <div className="text-center mt-6 pt-6 border-t border-white/10">
            <p className="text-white/60 text-sm flex items-center justify-center space-x-2">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>para transformar sorrisos em Cachoeirinha</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;