import React from 'react'

export const ArrowIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const PlusIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      d="M7 1V13M1 7H13"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
)

export const Eyebrow = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => <span className={`eyebrow ${className}`}>{children}</span>

export const SectionHead = ({
  num,
  eyebrow,
  title,
  children,
}: {
  num?: string
  eyebrow?: string
  title: string
  children?: React.ReactNode
}) => (
  <div className="sec-head">
    <div className="sec-head__meta">
      {num && <span className="sec-head__num">{num}</span>}
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    </div>
    <div>
      <h2 className="sec-head__title" dangerouslySetInnerHTML={{ __html: title }} />
      {children}
    </div>
  </div>
)
