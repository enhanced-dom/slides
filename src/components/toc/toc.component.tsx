import React from 'react'

interface TocItemProps {
  heading: string
  to?: string
  explanation?: string
}
const TocItem = ({ heading, to, explanation }: TocItemProps) => {
  const anchor = to ?? heading
  return (
    <li>
      <a href={`#${anchor.toLowerCase().replace(/\s/, '-')}`}>
        <b>{heading}</b>
      </a>
      {explanation ? ': ' : ''}
      {explanation}
    </li>
  )
}

export const Toc = ({ headings }: { headings: TocItemProps[] }) => (
  <ul>
    {headings.map((h, idx) => (
      <TocItem key={idx} {...h} />
    ))}
  </ul>
)
