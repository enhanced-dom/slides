/* eslint-disable @typescript-eslint/naming-convention */
import { toTheme } from '@theme-ui/typography'
import typography from 'typography-theme-wordpress-2016'
import merge from 'deepmerge'
import '@fontsource/montserrat'
import pick from 'lodash.pick'
// @ts-nocheck
import blogTheme from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui/components'

const typographyTheme = toTheme(typography)

export enum ColorVariableNames {
  BACKGROUND = 'background',
  TEXT = 'text',
  DARK_BACKGROUND = 'darkBackground',
  LIGHT_TEXT = 'lightText',
  HIGHLIGHT = 'highlight',
  MUTED = 'muted',
  LIGHTER_BLUE = 'lighterBlue',
  LIGHT_BLUE = 'lightBlue',
  HEADING = 'heading',
}

export enum SizeVariableNames {
  CONTENT = 'content',
  INNER_MARGIN = 'innerMargin',
  CENTRAL_GAP = 'centralGap',
  TOP_MARGIN = 'topMargin',
  FULL_CONTENT = 'fullContent',
  FULL_CONTENT_WIDTH = 'fullContentWidth',
}

export enum FontVariableNames {
  BODY = 'body',
  MONOSPACE = 'monospace',
}

export const variables = {
  colors: {
    [ColorVariableNames.BACKGROUND]: '#f1f5f8',
    [ColorVariableNames.TEXT]: '#3D4851',
    [ColorVariableNames.DARK_BACKGROUND]: '#3D4851',
    [ColorVariableNames.LIGHT_TEXT]: 'white',
    [ColorVariableNames.MUTED]: '#3D4851',
    [ColorVariableNames.LIGHTER_BLUE]: '#ebfcf6',
    [ColorVariableNames.HEADING]: '#e2001a',
    [ColorVariableNames.LIGHT_BLUE]: '#aaf6d9',
  },
  sizes: {
    [SizeVariableNames.CONTENT]: 420,
    [SizeVariableNames.INNER_MARGIN]: 85,
    [SizeVariableNames.TOP_MARGIN]: 256,
    [SizeVariableNames.CENTRAL_GAP]: 85 * 2,
    [SizeVariableNames.FULL_CONTENT_WIDTH]: 85 * 2 + 420,
  },
  fonts: {
    [FontVariableNames.BODY]: 'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif',
    [FontVariableNames.MONOSPACE]: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
}

const theme: any = merge.all([
  blogTheme,
  typographyTheme,
  {
    colors: variables.colors,
    space: {
      ...typographyTheme.space,
      ...pick(variables.sizes, [
        SizeVariableNames.INNER_MARGIN,
        SizeVariableNames.TOP_MARGIN,
        SizeVariableNames.FULL_CONTENT_WIDTH,
        SizeVariableNames.CENTRAL_GAP,
      ]),
    },
    sizes: pick(variables.sizes, [SizeVariableNames.CONTENT]),
    fonts: variables.fonts,
    styles: {
      root: {
        fontFamily: FontVariableNames.BODY,
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
        borderBottom: '1px solid',
        borderColor: ColorVariableNames.MUTED,
      },
      li: {
        marginBottom: '4px',
        code: {
          fontSize: `inherit`,
        },
      },
      pre: {
        variant: `prism`,
        fontFamily: FontVariableNames.MONOSPACE,
        tabSize: 2,
        hyphens: `none`,
        overflow: `auto`,
        borderRadius: 10,
        p: 0,
        pl: 2,
        color: ColorVariableNames.TEXT,
        backgroundColor: ColorVariableNames.BACKGROUND,
        marginBottom: '28px',
        whiteSpace: 'pre-wrap',
      },
      code: {
        fontFamily: FontVariableNames.MONOSPACE,
        fontSize: `inherit`,
      },
      h1: {
        fontStyle: 'italic',
        color: ColorVariableNames.HEADING,
      },
      h2: {
        marginTop: '60px',
        fontStyle: 'italic',
      },
      h3: {
        marginTop: '4px',
      },
      inlineCode: {
        borderRadius: `0.3em`,
        paddingTop: `0.15em`,
        paddingBottom: `0.05em`,
        paddingX: `0.2em`,
      },
      hr: {
        borderColor: ColorVariableNames.MUTED,
      },
      p: {
        marginBottom: '20px',
        marginTop: '20px',
        code: {
          fontSize: `inherit`,
        },
      },
      blockquote: {
        color: `inherit`,
        borderLeftColor: `inherit`,
        opacity: 0.8,
        '&.translation': {
          fontSize: `1em`,
        },
      },
      waves: {
        default: {
          Wave: {
            width: ['100%', variables.sizes[SizeVariableNames.CONTENT] * 2 + variables.sizes[SizeVariableNames.CENTRAL_GAP]],
            // marginTop: "40px",
            marginLeft: [0, -(variables.sizes[SizeVariableNames.CONTENT] + variables.sizes[SizeVariableNames.CENTRAL_GAP])],
            marginBottom: '28px',
            position: 'relative',
            display: ['block', 'flex'],
          },
          ScrollerContainer: {
            paddingTop: ['80px', 0],
            width: ['auto', SizeVariableNames.CONTENT],
            marginLeft: [0, SizeVariableNames.CENTRAL_GAP],
          },
          ScrollerStep: {
            position: 'relative',
            padding: 0,
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            borderLeft: 0,
          },
          ScrollerProgress: {
            backgroundColor: ColorVariableNames.MUTED,
            borderRadius: '3px',
            position: 'absolute',
            left: '-24px',
          },
          StickerContainer: {
            width: ['100vw', SizeVariableNames.CONTENT],
            marginLeft: ['calc(50% - 50vw)', 0],
            position: ['sticky', 'static'],
            top: [0, 'auto'],
            zIndex: [1, 'auto'],
            height: ['50vh', 'auto'],
            paddingRight: [0, SizeVariableNames.INNER_MARGIN],
            backgroundColor: ColorVariableNames.DARK_BACKGROUND,
            color: ColorVariableNames.LIGHT_TEXT,
          },
          Sticker: {
            position: ['static', 'sticky'],
            width: '100%',
            height: ['100%', '80vh'],
            maxHeight: ['100%', '80vh'],
            top: ['auto', '2rem'],
            marginLeft: [0, variables.sizes.innerMargin],
          },
          StickerStep: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          },
          // this is used to select the active scroller step
          // 0.5 selects the step that is at half the screen height
          // 0.7 the step that is at 70% the screen height
          focus: [0.7, 0.5],
        },
      },
      CodeSurfer: {
        pre: {
          color: ColorVariableNames.LIGHT_TEXT,
          backgroundColor: ColorVariableNames.DARK_BACKGROUND,
        },
        code: {
          color: ColorVariableNames.LIGHT_TEXT,
          backgroundColor: ColorVariableNames.DARK_BACKGROUND,
        },
        tokens: {
          'comment cdata doctype': {
            fontStyle: 'italic',
          },
          'builtin changed keyword punctuation operator tag deleted string attr-value char number inserted': {
            color: ColorVariableNames.LIGHT_BLUE,
          },
        },
      },
    },
  },
])

theme.breakpoints = ['1000px']

theme.prism = {
  '.builtin, .changed, .keyword, .punctuation, .operator, .tag, .deleted, .string, .attr-value, .char, .number, .inserted': {
    color: '#0f8f5e',
  },
  '.comment, .cdata, .doctype': {
    fontStyle: 'italic',
  },
}

export default theme
