import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'لماذا نحن', href: '#why-us' },
    { name: 'تغطية المناطق', href: '#coverage' },
    { name: 'تواصل معنا', href: '#contact' }
  ]

  const services = [
    'سحب السيارات',
    'توصيل الوقود',
    'تشغيل البطارية',
    'إصلاح على الطريق',
    'تبديل الإطارات',
    'إنقاذ السيارات'
  ]

  const contactInfo = [
    { icon: Phone, text: '+971 6 555 1234' },
    { icon: Mail, text: 'info@recoverywinch.ae' },
    { icon: MapPin, text: 'الشارقة، الإمارات العربية المتحدة' }
  ]

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 17h16M6 21h12M8 17l-2 4M16 17l2 4M12 11V3M9 6l3-3 3 3M9 8h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">ريكفري ونش</h3>
                <p className="text-white/70 text-sm">الشارقة</p>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              شركة ريكفري ونش سيارات في الشارقة. نقدم خدمات سحب السيارات والإنقاذ على مدار الساعة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-yellow-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-white/80 hover:text-yellow-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-white/80">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="tel:+97165551234"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-full transition-all"
              >
                <Phone size={18} />
                اتصل الآن
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm text-center md:text-right">
              © {currentYear} ريكفري ونش الشارقة. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-yellow-500 transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}