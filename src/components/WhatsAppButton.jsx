function WhatsAppButton({ phone = '919999999999', message = 'Hello, I would like to know more.' }) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  )
}

export default WhatsAppButton
