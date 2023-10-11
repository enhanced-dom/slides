/** @jsxFrag React.Fragment */

import { Themed, Theme, ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/react'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import defaultTheme from '../../theme'
import { ShellHeader } from './header.component'
import { ScrollTop } from '../scroll-top'
import { Heading2 } from '../toc'

const BrandingSlot = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>
}

const ContentsSlot: React.FC<React.ComponentProps<typeof ShellHeader>> = ({ children, ...rest }) => {
  return (
    <>
      <ShellHeader {...rest} />
      {children || null}
    </>
  )
}

const getBranding = (children: React.ReactNode): React.ReactElement =>
  React.Children.toArray(children).find((item) => (item as any)?.type === BrandingSlot) as React.ReactElement
const getContents = (children: React.ReactNode) => React.Children.toArray(children).find((item) => (item as any)?.type === ContentsSlot)

export const Shell: React.FC<{ theme?: Theme; variant?: string }> & {
  Branding: typeof BrandingSlot
  Contents: typeof ContentsSlot
  mdxComponents: React.ComponentProps<typeof MDXProvider>['components']
} = ({ children, theme, variant = 'default' }) => {
  const branding = getBranding(children)
  const contents = getContents(children)
  return (
    <ThemeProvider theme={theme}>
      <Themed.root
        sx={{
          variant: `styles.shell.${variant}.Root`,
        }}
      >
        <Global
          styles={{
            ...(theme.styles.global?.[variant] ?? {}),
            body: { margin: 0, overflowX: 'hidden', ...(theme.styles.global?.[variant]?.body ?? {}) },
          }}
        />
        <aside />
        <main>
          <MDXProvider components={Shell.mdxComponents} disableParentContext>
            {contents}
          </MDXProvider>
          {branding ? <ScrollTop>{branding.props.children ? branding : null}</ScrollTop> : null}
        </main>
      </Themed.root>
    </ThemeProvider>
  )
}

Shell.defaultProps = {
  theme: defaultTheme,
}
Shell.mdxComponents = {
  h2: Heading2,
}
Shell.Branding = BrandingSlot
Shell.Contents = ContentsSlot
