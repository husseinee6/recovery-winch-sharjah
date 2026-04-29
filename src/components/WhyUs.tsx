import { Clock, Award, Users, Star, ThumbsUp, HeartHandshake } from 'lucide-react'

export default function WhyUs() {
  const reasons = [
    {
      icon: Clock,
      title: 'استجابة سريعة',
      description: 'نصل إليك خلال 15-30 دقيقة في جميع مناطق الشارقة'
    },
    {
      icon: Award,
      title: 'فريق محترف',
      description: 'فريقنا مدرب ومؤهل للتعامل مع جميع أنواع السيارات'
    },
    {
      icon: Users,
      title: 'خدمة عملاء متميزة',
      description: 'نضع رضا العملاء في أولوية عملنا'
    },
    {
      icon: Star,
      title: 'معدات حديثة',
      description: 'نستخدم أحدث المعدات والأوناش لضمان خدمة آمنة'
    },
    {
      icon: ThumbsUp,
      title: 'أسعار تنافسية',
      description: 'نقدم أسعارًا مناسبة بدون تكاليف مخفية'
    },
    {
      icon: HeartHandshake,
      title: 'ضمان الجودة',
      description: 'نضمن لك خدمة احترافية وآمنة في كل مرة'
    }
  ]

  const stats = [
    { number: '+5000', label: 'عميل سعيد' },
    { number: '24/7', label: 'خدمة متواصلة' },
    { number: '15-30', label: 'دقيقة متوسط الوصول' },
    { number: '10+', label: 'سنوات خبرة' }
  ]

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-500/20 text-yellow-600 font-semibold px-4 py-2 rounded-full text-sm mb-4">
            لماذا نحن
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            لماذا تختار ريكفري ونش الشارقة؟
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نحن الخيار الأول لسكان الشارقة عندما يتعلق الأمر بخدمات الإنقاذ والسحب على الطريق
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-l from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 bg-gray-50 rounded-2xl hover:bg-blue-900 group transition-all duration-300"
            >
              <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors">
                <reason.icon className="w-7 h-7 text-blue-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-white transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 transition-colors">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-3xl text-white font-bold">م</span>
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-4 italic">
                "خدمة ممتازة وسريعة! تعطلت سيارتي في المنتصف واستجابوا خلال 20 دقيقة فقط. شكراً جزيلاً للفريق المحترف."
              </p>
              <div className="font-bold text-blue-900">أحمد محمد</div>
              <div className="text-gray-500 text-sm">سكان دبي</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}