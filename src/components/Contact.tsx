import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const waMessage = `مرحباً، أنا ${formData.name} وأريد طلب خدمة ${formData.service}. رقم الهاتف: ${formData.phone}. الرسالة: ${formData.message}`
    window.open(`https://wa.me/97165551234?text=${encodeURIComponent(waMessage)}`, '_blank')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      details: ['+971 6 555 1234', '+971 50 123 4567'],
      href: 'tel:+97165551234'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@recoverywinch.ae'],
      href: 'mailto:info@recoverywinch.ae'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['الشارقة، الإمارات العربية المتحدة'],
      href: '#'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: ['24/7 - على مدار الساعة'],
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-900/10 text-blue-900 font-semibold px-4 py-2 rounded-full text-sm mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            نحن هنا لخدمتك
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            تواصل معنا الآن وسنكون سعيدين بمساعدتك. فريقنا جاهز لخدمتك على مدار الساعة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors">
                    <item.icon className="w-7 h-7 text-white group-hover:text-blue-900" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </a>
              ))}
            </div>

            {/* Map Embed */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115534.60473878468!2d55.3!3d25.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا على الخريطة"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">أرسل لنا رسالة</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <User className="w-4 h-4 inline ml-2" />
                  الاسم
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <Phone className="w-4 h-4 inline ml-2" />
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <MessageSquare className="w-4 h-4 inline ml-2" />
                  نوع الخدمة
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors bg-white"
                >
                  <option value="">اختر الخدمة المطلوبة</option>
                  <option value="سحب سيارات">سحب سيارات</option>
                  <option value="توصيل وقود">توصيل وقود</option>
                  <option value="تشغيل بطارية">تشغيل بطارية</option>
                  <option value="إصلاح على الطريق">إصلاح على الطريق</option>
                  <option value="تبديل إطارات">تبديل إطارات</option>
                  <option value="إنقاذ سيارات">إنقاذ سيارات</option>
                  <option value="خدمة أخرى">خدمة أخرى</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <MessageSquare className="w-4 h-4 inline ml-2" />
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors resize-none"
                  placeholder="صف لنا المشكلة أو الخدمة التي تحتاجها..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg"
              >
                <Send size={20} />
                إرسال عبر واتساب
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">أو تواصل معنا مباشرة عبر:</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="tel:+97165551234"
                  className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
                >
                  <Phone size={18} />
                  اتصال
                </a>
                <a
                  href="https://wa.me/97165551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}