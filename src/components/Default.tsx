import React from 'react'
import { useTranslation } from 'react-i18next'

const Default: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>Default</h1>
      <h2>{t('h')}</h2>
      <p>{t('p')}</p>
    </div>
  )
}

export default Default
