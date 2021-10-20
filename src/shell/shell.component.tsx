/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, Themed, Theme, ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/react'
import React from 'react'

import defaultTheme, { ColorVariableNames, SizeVariableNames } from '../theme'
import { ShellHeader } from './header.component'
import { ScrollTop } from './scroll-top'

const BrandingSlot = ({ children }) => {
  return children || null
}

const ContentsSlot: React.FC<React.ComponentProps<typeof ShellHeader>> = ({ children, ...rest }) => {
  return (
    <>
      <ShellHeader {...rest} />
      {children || null}
    </>
  )
}

const getBranding = (children: React.ReactNode) => React.Children.toArray(children).find((item) => (item as any)?.type === BrandingSlot)
const getContents = (children: React.ReactNode) => React.Children.toArray(children).find((item) => (item as any)?.type === ContentsSlot)

export const Shell: React.FC<{ theme?: Theme }> & { Branding: typeof BrandingSlot; Contents: typeof ContentsSlot } = ({
  children,
  theme,
}) => {
  const branding = getBranding(children)
  const contents = getContents(children)
  return (
    <ThemeProvider theme={theme}>
      <Themed.root
        sx={{
          display: 'flex',
          width: '100vw',
        }}
      >
        <Global
          styles={{
            body: { margin: 0, overflowX: 'hidden' },
          }}
        />
        <aside
          sx={{
            bg: ColorVariableNames.DARK_BACKGROUND,
            color: ColorVariableNames.LIGHT_TEXT,
            width: [0, '40vw'],
            minHeight: '100vh',
          }}
        />
        <div sx={{ bg: ColorVariableNames.BACKGROUND, color: ColorVariableNames.TEXT, width: ['100vw', '60vw'] }}>
          <main
            sx={{
              py: [5, SizeVariableNames.TOP_MARGIN],
              pl: [0, SizeVariableNames.INNER_MARGIN],
              width: [SizeVariableNames.CONTENT, SizeVariableNames.CONTENT],
              maxWidth: ['80%', 'none'],
              mx: ['auto', 0],
            }}
          >
            {contents}
            {branding ? <ScrollTop>{branding}</ScrollTop> : null}
          </main>
        </div>
      </Themed.root>
    </ThemeProvider>
  )
}

Shell.defaultProps = {
  theme: defaultTheme,
}
Shell.Branding = BrandingSlot
Shell.Contents = ContentsSlot
