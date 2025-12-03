import React from 'react'

const SectionTitle = ({ eyebrow, title, align = 'left' }) => {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-accentGold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl tracking-wide text-textMain">
        {title}
      </h2>
      <div className={`mt-3 h-px w-10 bg-accentGold/30 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  )
}

export default SectionTitle
