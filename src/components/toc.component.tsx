import React from 'react'

const Heading = ({ heading }: { heading: string }) => (
  <h2>
    {heading}
    <a style={{ display: 'none' }} id={heading.toLowerCase().replace(/\s/, '-')}></a>
  </h2>
)

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
        <em>{heading}</em>
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

Toc.Heading = Heading
