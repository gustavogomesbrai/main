import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    problem: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Form submitted:', formData)
    alert('Formulário enviado! Entraremos em contato em breve.')
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Exemplo, 123 - Centro\nCuritiba - PR, 80010-000',
      action: 'Ver no mapa'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(41) 3333-4444\n(41) 99999-8888',
      action: 'Ligar agora'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda à Sexta: 9h às 18h\nSábado: 9h às 13h',
      action: null
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@appletown.com.br\norcamento@appletown.com.br',
      action: 'Enviar e-mail'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precisa de ajuda com seu dispositivo Apple? Entre em contato conosco 
            para um orçamento gratuito e sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite um Orçamento
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(41) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="device" className="block text-sm font-medium text-gray-700 mb-2">
                  Dispositivo
                </label>
                <select
                  id="device"
                  name="device"
                  value={formData.device}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione o dispositivo</option>
                  <option value="iphone">iPhone</option>
                  <option value="ipad">iPad</option>
                  <option value="macbook">MacBook</option>
                  <option value="imac">iMac</option>
                  <option value="apple-watch">Apple Watch</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                  Problema
                </label>
                <select
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione o problema</option>
                  <option value="tela-quebrada">Tela quebrada</option>
                  <option value="bateria">Problema na bateria</option>
                  <option value="nao-liga">Não liga</option>
                  <option value="camera">Problema na câmera</option>
                  <option value="carregamento">Problema de carregamento</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descreva o problema em detalhes..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                Enviar Solicitação
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 whitespace-pre-line mb-2">
                          {info.content}
                        </p>
                        {info.action && (
                          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                            {info.action}
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Atendimento via WhatsApp
                  </h4>
                  <p className="text-sm text-gray-600">
                    Resposta rápida e direta
                  </p>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Falar no WhatsApp
              </Button>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>Mapa da localização</p>
                <p className="text-sm">Google Maps será integrado aqui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

