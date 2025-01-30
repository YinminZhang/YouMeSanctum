import React from 'react'
import { Home, Menu, Globe } from 'lucide-react'
import { useLanguage } from './LanguageContext'

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ZH' : 'EN');
  }

  const navItems = [
    { en: 'Home', zh: '首页', href: '#home' },
    { en: 'Our Philosophy', zh: '我们的理念', href: '#philosophy' },
    { en: 'Awards', zh: '荣誉奖项', href: '#awards' },
    { en: 'Gallery & Attractions', zh: '画廊与景点', href: '#gallery' },
    { en: 'Our Activities', zh: '我们的活动', href: '#activities' },
    { en: 'Directions', zh: '如何到达', href: '#directions' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Home className="w-8 h-8 text-gray-800" />
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="text-gray-600 hover:text-gray-900">
              {language === 'EN' ? item.en : item.zh}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <Globe className="w-5 h-5 mr-1" />
            {language}
          </button>
          <Menu className="md:hidden w-6 h-6 text-gray-800" />
        </div>
      </div>
    </header>
  )
}

export default Header