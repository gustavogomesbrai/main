import { Apple, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Apple className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Apple Town</span>
            </div>
            <p className="text-gray-300 text-sm">
              Especialistas em assistência técnica Apple desde 2007. 
              Técnicos certificados, peças originais e garantia de 90 dias.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Reparo iPhone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reparo iPad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reparo MacBook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reparo iMac</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apple Watch</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Outros Serviços</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orçamento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-400" />
                <div>
                  <p>Rua Exemplo, 123 - Centro</p>
                  <p>Curitiba - PR, 80010-000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <div>
                  <p>(41) 3333-4444</p>
                  <p>(41) 99999-8888</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <p>contato@appletown.com.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Apple Town. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Garantia
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>
              Apple, iPhone, iPad, MacBook, iMac e Apple Watch são marcas registradas da Apple Inc.
              A Apple Town é uma assistência técnica independente e não possui afiliação oficial com a Apple Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

