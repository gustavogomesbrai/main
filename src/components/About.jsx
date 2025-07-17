import { Calendar, Users, Award, MapPin } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Calendar,
      number: '17+',
      label: 'Anos de experiência',
      description: 'Desde 2007 no mercado'
    },
    {
      icon: Users,
      number: '10.000+',
      label: 'Clientes atendidos',
      description: 'Satisfação garantida'
    },
    {
      icon: Award,
      number: '90',
      label: 'Dias de garantia',
      description: 'Em todos os serviços'
    },
    {
      icon: MapPin,
      number: '1',
      label: 'Loja em Curitiba',
      description: 'Localização central'
    }
  ]

  const values = [
    {
      title: 'Honestidade',
      description: 'Transparência em todos os orçamentos e diagnósticos'
    },
    {
      title: 'Qualidade',
      description: 'Peças originais e técnicos especializados'
    },
    {
      title: 'Rapidez',
      description: 'Maioria dos reparos feitos no mesmo dia'
    },
    {
      title: 'Confiabilidade',
      description: 'Garantia de 90 dias em todos os serviços'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sobre a Apple Town
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneiros no Brasil em desbloqueio e reparo de produtos Apple, 
            com mais de 17 anos de experiência e excelência no atendimento.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Nossa História
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                A Apple Town foi criada em setembro de 2007, logo após o lançamento do primeiro iPhone nos Estados Unidos. 
                Fomos pioneiros no Brasil em realizar o desbloqueio do primeiro iPhone, quando ele ainda era exclusivo da operadora AT&T.
              </p>
              <p>
                Após anos de experiência com a marca Apple e sempre visando atender nossos clientes da forma mais profissional possível, 
                inauguramos nossa primeira loja física em 2013, oferecendo um leque completo de soluções para toda a linha Apple.
              </p>
              <p>
                Hoje somos referência em Curitiba pela qualidade dos nossos serviços, 
                com técnicos altamente qualificados e equipamentos de última geração.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Nossa Missão</h4>
              <p className="mb-6">
                Apresentar para nossos clientes serviços de qualidade e procedência, 
                fornecendo um atendimento que supere o satisfatório, tornando possível 
                que o cliente receba o resultado esperado ou superior.
              </p>
              <h4 className="text-xl font-bold mb-4">Nossa Visão</h4>
              <p>
                Alcançar os melhores índices de resolução dos serviços solicitados 
                por nossos clientes, mantendo-nos sempre na vanguarda da tecnologia Apple.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

