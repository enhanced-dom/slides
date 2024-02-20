import { Themed } from '@theme-ui/mdx'

export const ShellHeader = ({
  title,
  author,
  profileLink,
  date,
  variant = 'default',
}: {
  title: string
  author: string
  profileLink?: string
  date: string
  variant?: string
}) => {
  return (
    <header>
      <Themed.h1>{title}</Themed.h1>
      <Themed.p sx={{ variant: `styles.shell.${variant}.Author` }}>
        {profileLink ? (
          <Themed.a href="/" sx={{ textDecoration: 'none', color: 'inherit', border: 'none' }}>
            {author}
          </Themed.a>
        ) : (
          author
        )}
        <br />
        <span sx={{ fontSize: 1 }}>{date}</span>
      </Themed.p>
    </header>
  )
}
