import { Smartphone, Tablet, Laptop, Monitor, Watch, Wrench } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'iPhone Repair',
      description: 'Troca de tela, bateria, câmera e outros componentes do iPhone',
      features: ['Tela quebrada', 'Bateria viciada', 'Problemas de câmera', 'Não liga']
    },
    {
      icon: Tablet,
      title: 'iPad Repair',
      description: 'Conserto completo para todos os modelos de iPad',
      features: ['Tela trincada', 'Botão home', 'Problemas de touch', 'Carregamento']
    },
    {
      icon: Laptop,
      title: 'MacBook Repair',
      description: 'Manutenção e reparo para MacBook Air e MacBook Pro',
      features: ['Teclado', 'Tela', 'Bateria', 'SSD/HD']
    },
    {
      icon: Monitor,
      title: 'iMac Repair',
      description: 'Assistência técnica especializada para iMac',
      features: ['Tela', 'HD/SSD', 'Memória RAM', 'Placa lógica']
    },
    {
      icon: Watch,
      title: 'Apple Watch',
      description: 'Reparo e manutenção do Apple Watch',
      features: ['Tela', 'Bateria', 'Pulseira', 'Problemas de software']
    },
    {
      icon: Wrench,
      title: 'Outros Serviços',
      description: 'Apple TV, Mac Mini e outros produtos Apple',
      features: ['Diagnóstico', 'Limpeza', 'Atualização', 'Backup']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos assistência técnica completa para toda a linha Apple com 
            técnicos especializados e peças de qualidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-6">
                  <div className="bg-blue-100 group-hover:bg-blue-200 rounded-xl p-3 w-fit transition-colors">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Saiba mais →
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco para um diagnóstico gratuito. 
              Atendemos todos os produtos Apple.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

