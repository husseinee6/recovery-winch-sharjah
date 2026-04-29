import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'لماذا نحن', href: '#why-us' },
    { name: 'تغطية المناطق', href: '#coverage' },
    { name: 'تواصل معنا', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isScrolled ? 'bg-blue-900' : 'bg-white'
            }`}>
              <svg viewBox="0 0 24 24" className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-blue-900'}`} fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 17h16M6 21h12M8 17l-2 4M16 17l2 4M12 11V3M9 6l3-3 3 3M9 8h6" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-lg ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                ريكفري ونش
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
                الشارقة
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-yellow-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+97165551234"
              className={`flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all ${
                isScrolled
                  ? 'bg-yellow-500 text-blue-900 hover:bg-yellow-400'
                  : 'bg-white text-blue-900 hover:bg-yellow-500'
              }`}
            >
              <Phone size={18} />
              <span>اتصل الآن</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-blue-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+97165551234"
                className="flex items-center justify-center gap-2 bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-full mt-2"
              >
                <Phone size={18} />
                <span>اتصل الآن</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}