'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'fa'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.properties': 'Properties',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'header.schedule': 'Schedule Viewing',
    
    // Global Presence
    'global.title': 'Global Presence',
    'global.subtitle': 'We operate in the world\'s most prestigious real estate markets, offering unparalleled access to luxury properties across continents.',
    'global.properties': 'Properties',
    'global.business': 'Business',
    'global.viewTowers': 'View Luxury Towers',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Comprehensive real estate solutions tailored to meet the unique needs of our discerning clientele worldwide.',
    'services.property.title': 'Property Sales',
    'services.property.desc': 'Exclusive access to the world\'s most prestigious properties with personalized service.',
    'services.investment.title': 'Investment Advisory',
    'services.investment.desc': 'Expert guidance on real estate investments with market insights and portfolio optimization.',
    'services.management.title': 'Property Management',
    'services.management.desc': 'Comprehensive property management services to maximize your investment returns.',
    'services.relocation.title': 'Global Relocation',
    'services.relocation.desc': 'Seamless relocation services for international clients seeking luxury accommodations.',
    
    // Footer
    'footer.company': 'Golden Life',
    'footer.about': 'About Us',
    'footer.properties': 'Properties',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.address': 'Address',
    
    // Hero
    'hero.title1': 'Discover',
    'hero.title2': 'Luxury Living',
    'hero.title3': 'Redefined',
    'hero.subtitle1': 'Experience the world\'s most exclusive properties in prime locations.',
    'hero.subtitle2': 'Where architectural excellence meets unparalleled luxury.',
    'hero.subtitle3': 'Discover breathtaking views and world-class amenities.',
    'hero.subtitle4': 'Your gateway to prestigious addresses worldwide.',
    'hero.subtitle5': 'Redefining luxury living for discerning clients.',
    
    // Schedule Dialog
    'dialog.scheduleViewing': 'Schedule Viewing',
    'dialog.scheduleTour': 'Schedule Tour',
    'dialog.subtitle': 'Fill out the form below and our team will contact you to arrange your visit.',
    'dialog.name': 'Full Name',
    'dialog.email': 'Email Address',
    'dialog.phone': 'Phone Number',
    'dialog.message': 'Additional Message',
    'dialog.namePlaceholder': 'Enter your full name',
    'dialog.emailPlaceholder': 'Enter your email address',
    'dialog.phonePlaceholder': 'Enter your phone number',
    'dialog.messagePlaceholder': 'Any specific requirements or questions?',
    'dialog.submit': 'Schedule Now',
    'dialog.submitting': 'Scheduling...',
    'dialog.success': 'Request Submitted!',
    'dialog.successMessage': 'We will contact you shortly to confirm your appointment.',
  },
  fa: {
    // Header
    'nav.home': 'خانه',
    'nav.properties': 'املاک',
    'nav.services': 'خدمات',
    'nav.about': 'درباره ما',
    'nav.contact': 'تماس',
    'header.schedule': 'رزرو بازدید',
    
    // Global Presence
    'global.title': 'حضور جهانی',
    'global.subtitle': 'ما در معتبرترین بازارهای املاک و مستغلات جهان فعالیت می‌کنیم و دسترسی بی‌نظیری به املاک لوکس در قاره‌ها ارائه می‌دهیم',
    'global.properties': 'املاک',
    'global.business': 'تجاری',
    'global.viewTowers': 'مشاهده برج‌های لوکس',
    
    // Services
    'services.title': 'خدمات ',
    'services.subtitle': 'راه‌حل‌های جامع املاک و مستغلات متناسب با نیازهای منحصر به فرد مشتریان ممتاز ما در سراسر جهان',
    'services.property.title': 'فروش املاک',
    'services.property.desc': 'دسترسی انحصاری به معتبرترین املاک جهان با خدمات شخصی‌سازی شده',
    'services.investment.title': 'مشاوره سرمایه‌گذاری',
    'services.investment.desc': 'راهنمایی تخصصی در سرمایه‌گذاری املاک با بینش بازار و بهینه‌سازی پرتفولیو',
    'services.management.title': 'مدیریت املاک',
    'services.management.desc': 'خدمات جامع مدیریت املاک برای حداکثر بازدهی سرمایه‌گذاری شما',
    'services.relocation.title': 'جابجایی جهانی',
    'services.relocation.desc': 'خدمات جابجایی یکپارچه برای مشتریان بین‌المللی که به دنبال اقامت لوکس هستند',
    
    // Footer
    'footer.company': 'زندگی طلایی',
    'footer.about': 'درباره ما',
    'footer.properties': 'املاک',
    'footer.services': 'خدمات',
    'footer.contact': 'تماس',
    'footer.privacy': 'سیاست حریم خصوصی',
    'footer.terms': 'شرایط خدمات',
    'footer.rights': 'تمامی حقوق محفوظ است.',
    'footer.phone': 'تلفن',
    'footer.email': 'ایمیل',
    'footer.address': 'آدرس',
    
    // Hero
    'hero.title1': 'با ما',
    'hero.title2': 'زندگی لوکس',
    'hero.title3': '!بازتعریف می شود',
    'hero.subtitle1': 'تجربه انحصاری‌ترین املاک جهان در مکان‌های برتر',
    'hero.subtitle2': 'جایی که تعالی معماری با لوکس بی‌نظیر ملاقات می‌کند',
    'hero.subtitle3': 'مناظر خیره‌کننده و امکانات درجه یک را کشف کنید',
    'hero.subtitle4': 'دروازه شما به آدرس‌های معتبر جهان',
    'hero.subtitle5': 'بازتعریف زندگی لوکس برای مشتریان ممتاز',
    
    // Schedule Dialog
    'dialog.scheduleViewing': 'رزرو بازدید',
    'dialog.scheduleTour': 'رزرو تور',
    'dialog.subtitle': 'فرم زیر را پر کنید و تیم ما برای ترتیب بازدید شما تماس خواهد گرفت.',
    'dialog.name': 'نام کامل',
    'dialog.email': 'آدرس ایمیل',
    'dialog.phone': 'شماره تلفن',
    'dialog.message': 'پیام اضافی',
    'dialog.namePlaceholder': 'نام کامل خود را وارد کنید',
    'dialog.emailPlaceholder': 'آدرس ایمیل خود را وارد کنید',
    'dialog.phonePlaceholder': 'شماره تلفن خود را وارد کنید',
    'dialog.messagePlaceholder': 'آیا نیاز خاص یا سوالی دارید؟',
    'dialog.submit': 'رزرو کنید',
    'dialog.submitting': 'در حال رزرو...',
    'dialog.success': 'درخواست ارسال شد!',
    'dialog.successMessage': 'ما به زودی برای تأیید قرار ملاقات با شما تماس خواهیم گرفت.',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
