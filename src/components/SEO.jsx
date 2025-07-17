import { useEffect } from 'react'

const SEO = ({ 
  title = "Apple Town - Assistência Técnica Apple Curitiba",
  description = "Assistência técnica Apple em Curitiba. Especialistas em iPhone, iPad, MacBook, iMac e Apple Watch. Técnicos certificados, peças originais e 90 dias de garantia. Desde 2007.",
  keywords = "assistência técnica Apple Curitiba, conserto iPhone Curitiba, reparo iPad Curitiba, assistência MacBook Curitiba, conserto iMac Curitiba, Apple Watch reparo, assistência Apple",
  ogImage = "https://www.appletown.com.br/og-image.jpg",
  url = "https://www.appletown.com.br"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', description)
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]')
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', url)
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title)
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description)
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage)
    }
  }, [title, description, keywords, ogImage, url])

  return null
}

export default SEO

