import React from 'react'
import { useTranslation } from 'react-i18next'

const Override: React.FC = () => {
  const { t } = useTranslation('override')

  return (
    <div>
      <h1>Override</h1>
      <h2>{t('h')}</h2>
      <p>{t('p')}</p>
    </div>
  )
}

export default Override
