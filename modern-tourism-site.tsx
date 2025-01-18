import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ChevronDown, Search, Globe2 } from 'lucide-react';

const languages = {
  en: {
    nav: {
      home: "Home",
      destinations: "Destinations",
      hotels: "Hotels",
      transport: "Transport",
      contact: "Contact"
    },
    hero: {
      title: "Discover Sri Lanka",
      subtitle: "Experience the beauty of paradise"
    },
    search: {
      title: "Plan Your Trip",
      destination: "Destination",
      checkIn: "Check In",
      checkOut: "Check Out",
      guests: "Guests",
      search: "Search"
    },
    destinations: {
      title: "Popular Destinations",
      sigiriya: {
        title: "Sigiriya",
        desc: "Ancient palace and fortress complex"
      },
      ella: {
        title: "Ella",
        desc: "Scenic mountain village with tea plantations"
      },
      mirissa: {
        title: "Mirissa",
        desc: "Beautiful beach famous for whale watching"
      }
    }
  },
  si: {
    nav: {
      home: "මුල් පිටුව",
      destinations: "ගමනාන්ත",
      hotels: "හෝටල්",
      transport: "ප්‍රවාහනය",
      contact: "අප අමතන්න"
    },
    hero: {
      title: "ශ්‍රී ලංකාව සොයා යමු",
      subtitle: "ස්වර්ගයේ සුන්දරත්වය විඳගන්න"
    },
    search: {
      title: "ඔබේ සංචාරය සැලසුම් කරන්න",
      destination: "ගමනාන්තය",
      checkIn: "පැමිණෙන දිනය",
      checkOut: "පිටත්වන දිනය",
      guests: "සංචාරකයින්",
      search: "සොයන්න"
    },
    destinations: {
      title: "ජනප්‍රිය ගමනාන්ත",
      sigiriya: {
        title: "සිගිරිය",
        desc: "පුරාණ මාළිගා සහ බලකොටු සංකීර්ණය"
      },
      ella: {
        title: "ඇල්ල",
        desc: "තේ වතු සහිත සුන්දර කඳුකර ගම්මානය"
      },
      mirissa: {
        title: "මිරිස්ස",
        desc: "තල්මසුන් නැරඹීමට ප්‍රසිද්ධ සුන්දර වෙරළ"
      }
    }
  },
  hi: {
    nav: {
      home: "होम",
      destinations: "गंतव्य",
      hotels: "होटल",
      transport: "परिवहन",
      contact: "संपर्क"
    },
    hero: {
      title: "श्रीलंका की खोज करें",
      subtitle: "स्वर्ग की सुंदरता का अनुभव करें"
    },
    search: {
      title: "अपनी यात्रा की योजना बनाएं",
      destination: "गंतव्य",
      checkIn: "चेक इन",
      checkOut: "चेक आउट",
      guests: "मेहमान",
      search: "खोज"
    },
    destinations: {
      title: "लोकप्रिय गंतव्य",
      sigiriya: {
        title: "सिगिरिया",
        desc: "प्राचीन महल और किला परिसर"
      },
      ella: {
        title: "एल्ला",
        desc: "चाय बागानों के साथ सुंदर पहाड़ी गाँव"
      },
      mirissa: {
        title: "मिरिस्सा",
        desc: "व्हेल देखने के लिए प्रसिद्ध सुंदर समुद्र तट"
      }
    }
  }
};

const LanguageSelector = ({ currentLang, setCurrentLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'si', label: 'සිංහල' },
    { code: 'hi', label: 'हिंदी' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        <Globe2 className="w-5 h-5" />
        {languages.find(lang => lang.code === currentLang)?.label}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrentLang(lang.code);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = ({ currentLang, setCurrentLang }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-green-700">Visit Sri Lanka</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-green-600">Home</a>
            <a href="#destinations" className="text-gray-600 hover:text-green-600">Destinations</a>
            <a href="#hotels" className="text-gray-600 hover:text-green-600">Hotels</a>
            <a href="#tours" className="text-gray-600 hover:text-green-600">Tours</a>
            <LanguageSelector currentLang={currentLang} setCurrentLang={setCurrentLang} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-gray-600 hover:text-green-600 px-2">Home</a>
              <a href="#destinations" className="text-gray-600 hover:text-green-600 px-2">Destinations</a>
              <a href="#hotels" className="text-gray-600 hover:text-green-600 px-2">Hotels</a>
              <a href="#tours" className="text-gray-600 hover:text-green-600 px-2">Tours</a>
              <div className="px-2">
                <LanguageSelector currentLang={currentLang} setCurrentLang={setCurrentLang} />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default function TourismSite() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const t = languages[currentLang];

  useEffect(() => {
    // GSAP-like animation using CSS transitions
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="bg-gradient-to-r from-green-800 to-green-600 h-96 flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl">{t.hero.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-24 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-6">{t.search.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.search.destination}</label>
              <select className="w-full border border-gray-300 rounded-lg p-2">
                <option>Sigiriya</option>
                <option>Ella</option>
                <option>Mirissa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.search.checkIn}</label>
              <input type="date" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.search.checkOut}</label>
              <input type="date" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.search.guests}</label>
              <input type="number" min="1" defaultValue="2" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
          </div>
          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
            {t.search.search}
          </button>
        </div>
      </div>

      {/* Destinations Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t.destinations.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="destination-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
            <img src="/api/placeholder/400/300" alt="Sigiriya" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t.destinations.sigiriya.title}</h3>
              <p className="text-gray-600">{t.destinations.sigiriya.desc}</p>
            </div>
          </div>
          <div className="destination-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
            <img src="/api/placeholder/400/300" alt="Ella" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t.destinations.ella.title}</h3>
              <p className="text-gray-600">{t.destinations.ella.desc}</p>
            </div>
          </div>
          <div className="destination-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
            <img src="/api/placeholder/400/300" alt="Mirissa" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t.destinations.mirissa.title}</h3>
              <p className="text-gray-600">{t.destinations.mirissa.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}