import { MapPin, CheckCircle } from 'lucide-react'

export default function Coverage() {
  const areas = [
    'الشارقة سيتي',
    'الخانقية',
    'مركز الشارقة',
    'industrial area',
    'الملقا',
    'umbulya',
    'Al Qasba',
    'Al Majaz',
    'Al Taawun',
    'Al Nahda',
    'Al Musalla',
    'Al Yarmook',
    'Al Ghubaiba',
    'Al Bidya',
    'Al Madam',
    'Khor Fakkan',
    'Kalba',
    'Dibba Al Hisn',
    'Jebel Ali',
    'كلباء'
  ]

  return (
    <section id="coverage" className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-500/20 text-yellow-400 font-semibold px-4 py-2 rounded-full text-sm mb-4">
            تغطية المناطق
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            نغطي جميع مناطق الشارقة
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            فريقنا جاهز للوصول إليك في أي مكان بإمارة الشارقة وخارجها
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Illustration */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Simplified UAE Map */}
                <path
                  d="M200 50 L280 100 L320 180 L300 260 L260 340 L180 360 L120 300 L80 220 L100 140 L150 80 Z"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
                {/* Sharjah highlight */}
                <path
                  d="M180 140 L260 160 L280 220 L240 280 L180 260 L160 200 Z"
                  fill="rgba(255,215,0,0.4)"
                  stroke="#FBBF24"
                  strokeWidth="3"
                />
                {/* Location markers */}
                <circle cx="200" cy="200" r="15" fill="#FBBF24" className="animate-pulse" />
                <circle cx="200" cy="200" r="25" fill="none" stroke="#FBBF24" strokeWidth="2" className="animate-ping" />
                {/* Secondary points */}
                <circle cx="150" cy="180" r="6" fill="#fff" />
                <circle cx="250" cy="190" r="6" fill="#fff" />
                <circle cx="220" cy="250" r="6" fill="#fff" />
                <circle cx="170" cy="240" r="6" fill="#fff" />
              </svg>
            </div>
          </div>

          {/* Areas List */}
          <div>
            <div className="bg-white rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">المناطق التي نغطيها</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-900/10 rounded-xl">
                <p className="text-blue-900 font-semibold text-center">
                  + نوفر خدمة النقل بين الإمارات المجاورة
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="tel:+97165551234"
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-10 py-5 rounded-full transition-all text-xl shadow-lg hover:shadow-xl"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            اتصل الآن واحجز خدمة السحب
          </a>
        </div>
      </div>
    </section>
  )
}