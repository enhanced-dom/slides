import { type Theme, ThemeUIProvider } from 'theme-ui'
import { Themed } from '@theme-ui/mdx'
import { Global } from '@emotion/react'
import { type ComponentProps, type FC, Children as ReactChildren, type ReactElement, type ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'

import defaultTheme from '../../theme'
import { ShellHeader } from './header.component'
import { ScrollTop } from '../scroll-top'
import { Heading2 } from '../toc'

const BrandingSlot = ({ children }: { children?: ReactNode }) => {
  return <>{children}</>
}

const ContentsSlot: FC<ComponentProps<typeof ShellHeader>> = ({ children, ...rest }) => {
  return (
    <>
      <ShellHeader {...rest} />
      {children || null}
    </>
  )
}

const getBranding = (children: ReactNode): ReactElement =>
  ReactChildren.toArray(children).find((item) => (item as any)?.type === BrandingSlot) as ReactElement
const getContents = (children: ReactNode) => ReactChildren.toArray(children).find((item) => (item as any)?.type === ContentsSlot)

export const Shell: FC<{ theme?: Theme; variant?: string }> & {
  Branding: typeof BrandingSlot // eslint-disable-line @typescript-eslint/naming-convention
  Contents: typeof ContentsSlot // eslint-disable-line @typescript-eslint/naming-convention
  mdxComponents: ComponentProps<typeof MDXProvider>['components']
} = ({ children, theme, variant = 'default' }) => {
  const branding = getBranding(children)
  const contents = getContents(children)
  return (
    <ThemeUIProvider theme={theme}>
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
    </ThemeUIProvider>
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
