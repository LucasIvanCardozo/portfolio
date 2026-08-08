import { useEffect, useRef } from 'react'
import styles from './DownloadCVModal.module.css'

const BASE_URL = import.meta.env.BASE_URL

type Locale = 'en' | 'es'
type Variant = 'designed' | 'ats'

type CVOption = {
  id: string
  locale: Locale
  variant: Variant
  file: string
  label: { en: string; es: string }
  description: { en: string; es: string }
  sizeKB: number
}

const CV_OPTIONS: CVOption[] = [
  {
    id: 'en-designed',
    locale: 'en',
    variant: 'designed',
    file: `${BASE_URL}cv/cv-en.pdf`,
    label: { en: 'English — Designed', es: 'Inglés — Diseñada' },
    description: {
      en: 'For direct email to recruiters',
      es: 'Para email directo a recruiters',
    },
    sizeKB: 68,
  },
  {
    id: 'en-ats',
    locale: 'en',
    variant: 'ats',
    file: `${BASE_URL}cv/cv-en-ats.pdf`,
    label: { en: 'English — ATS', es: 'Inglés — ATS' },
    description: {
      en: 'For upload to job boards and ATS forms',
      es: 'Para formularios ATS y job boards',
    },
    sizeKB: 70,
  },
  {
    id: 'es-designed',
    locale: 'es',
    variant: 'designed',
    file: `${BASE_URL}cv/cv-es.pdf`,
    label: { en: 'Spanish — Designed', es: 'Español — Diseñada' },
    description: {
      en: 'For direct email to recruiters',
      es: 'Para email directo a recruiters',
    },
    sizeKB: 69,
  },
  {
    id: 'es-ats',
    locale: 'es',
    variant: 'ats',
    file: `${BASE_URL}cv/cv-es-ats.pdf`,
    label: { en: 'Spanish — ATS', es: 'Español — ATS' },
    description: {
      en: 'For upload to job boards and ATS forms',
      es: 'Para formularios ATS y job boards',
    },
    sizeKB: 71,
  },
]

const fileName = (id: string) => {
  const map: Record<string, string> = {
    'en-designed': 'Lucas-Cardozo-CV-EN.pdf',
    'en-ats': 'Lucas-Cardozo-CV-EN-ATS.pdf',
    'es-designed': 'Lucas-Cardozo-CV-ES.pdf',
    'es-ats': 'Lucas-Cardozo-CV-ES-ATS.pdf',
  }
  return map[id] ?? 'Lucas-Cardozo-CV.pdf'
}

type DownloadCVModalProps = {
  isOpen: boolean
  onClose: () => void
  ui?: 'en' | 'es'
}

export const DownloadCVModal = ({ isOpen, onClose, ui = 'en' }: DownloadCVModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) {
      dialog.showModal()
    } else if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const onClick = (e: MouseEvent) => {
      if (e.target === dialog) onClose()
    }
    dialog.addEventListener('click', onClick)
    return () => dialog.removeEventListener('click', onClick)
  }, [onClose])

  if (!isOpen) return null

  const t = {
    title: ui === 'es' ? 'Descargar CV' : 'Download CV',
    subtitle:
      ui === 'es' ? 'Elegí la versión según el canal' : 'Choose the version for your channel',
    closeAria: ui === 'es' ? 'Cerrar' : 'Close',
    pdfLabel: 'PDF',
  }

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="download-cv-title">
      <button type="button" className={styles.close} onClick={onClose} aria-label={t.closeAria}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <header className={styles.header}>
        <h2 id="download-cv-title" className={styles.title}>
          {t.title}
        </h2>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </header>

      <ul className={styles.options}>
        {CV_OPTIONS.map((opt) => (
          <li key={opt.id}>
            <a
              href={opt.file}
              download={fileName(opt.id)}
              className={styles.option}
              onClick={onClose}
            >
              <span className={styles.optionIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </span>
              <span className={styles.optionText}>
                <span className={styles.optionLabel}>{opt.label[ui]}</span>
                <span className={styles.optionDescription}>{opt.description[ui]}</span>
              </span>
              <span className={styles.optionMeta}>
                {t.pdfLabel} · {opt.sizeKB} KB
              </span>
            </a>
          </li>
        ))}
      </ul>
    </dialog>
  )
}
