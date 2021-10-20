/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'

import { SizeVariableNames, ColorVariableNames } from '../theme'

export const ShellHeader = ({ title, author, date }: { title: string; author: string; date: string }) => {
  return (
    <div sx={{ position: 'relative' }}>
      <div
        sx={{
          position: ['static', 'absolute'],
          width: '100%',
          height: ['auto', '100%'],
          right: ['auto', SizeVariableNames.FULL_CONTENT_WIDTH],
          color: ['text', ColorVariableNames.LIGHT_TEXT],
        }}
      >
        <div
          sx={{
            float: ['none', 'right'],
            display: ['block', 'inline-block'],
            textAlign: ['left', 'right'],
          }}
        >
          <Themed.h1 sx={{ paddingBottom: '80px' }}>{title}</Themed.h1>
        </div>
      </div>
      <div>
        <Themed.p sx={{ paddingTop: 1 }}>
          <Themed.a href="/" sx={{ textDecoration: 'none', color: 'inherit', border: 'none' }}>
            {author}
          </Themed.a>
          <br />
          <span sx={{ fontSize: 1 }}>{date}</span>
        </Themed.p>
      </div>
    </div>
  )
}
