'use client'

import { useState } from 'react'
import { X, User, Mail, Phone, Calendar, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface ScheduleDialogProps {
  isOpen: boolean
  onClose: () => void
  type?: 'viewing' | 'tour'
  propertyName?: string
}

const ScheduleDialog = ({ isOpen, onClose, type = 'viewing', propertyName }: ScheduleDialogProps) => {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Auto close after 2 seconds
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitted(false)
    setIsSubmitting(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Dialog */}
      <div className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 ${language === 'fa' ? 'text-right' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-navy-900">
            {type === 'tour' ? t('dialog.scheduleTour') : t('dialog.scheduleViewing')}
          </h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {isSubmitted ? (
            // Success State
            <div className="text-center py-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                {t('dialog.success')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('dialog.successMessage')}
              </p>
            </div>
          ) : (
            // Form State
            <>
              {propertyName && (
                <div className="mb-4 p-3 bg-gold-50 rounded-lg border border-gold-200">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gold-600" />
                    <span className="font-medium text-gold-800 text-sm">
                      {propertyName}
                    </span>
                  </div>
                </div>
              )}

              <p className="text-gray-600 mb-4 text-sm">
                {t('dialog.subtitle')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    {t('dialog.name')} *
                  </label>
                  <div className="relative">
                    <User className={`absolute top-2.5 w-4 h-4 text-gray-400 ${language === 'fa' ? 'right-3' : 'left-3'}`} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full border border-gray-300 rounded-lg py-2.5 text-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200 ${
                        language === 'fa' ? 'pr-9 pl-3 text-right' : 'pl-9 pr-3'
                      }`}
                      placeholder={t('dialog.namePlaceholder')}
                    />
                  </div>
                </div>

                {/* Email and Phone Fields - Side by Side */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      {t('dialog.email')} *
                    </label>
                    <div className="relative">
                      <Mail className={`absolute top-2.5 w-4 h-4 text-gray-400 ${language === 'fa' ? 'right-2' : 'left-2'}`} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full border border-gray-300 rounded-lg py-2.5 text-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200 ${
                          language === 'fa' ? 'pr-8 pl-2 text-right' : 'pl-8 pr-2'
                        }`}
                        placeholder={t('dialog.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      {t('dialog.phone')} *
                    </label>
                    <div className="relative">
                      <Phone className={`absolute top-2.5 w-4 h-4 text-gray-400 ${language === 'fa' ? 'right-2' : 'left-2'}`} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full border border-gray-300 rounded-lg py-2.5 text-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200 ${
                          language === 'fa' ? 'pr-8 pl-2 text-right' : 'pl-8 pr-2'
                        }`}
                        placeholder={t('dialog.phonePlaceholder')}
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    {t('dialog.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                    className={`w-full border border-gray-300 rounded-lg py-2.5 px-3 text-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200 resize-none ${
                      language === 'fa' ? 'text-right' : ''
                    }`}
                    placeholder={t('dialog.messagePlaceholder')}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t('dialog.submitting')}</span>
                      </div>
                    ) : (
                      t('dialog.submit')
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ScheduleDialog
