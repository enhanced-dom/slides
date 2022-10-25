/* eslint-disable @typescript-eslint/naming-convention */
import { toTheme } from '@theme-ui/typography'
import typography from 'typography-theme-wordpress-2016'
import merge from 'deepmerge'
import '@fontsource/montserrat'
import pick from 'lodash.pick'
import { blogTheme } from '@enhanced-dom/gatsby-waves'

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
  CONTENT_WIDTH = 'content',
  SECTION_SLEEVE = 'sectionSleeve',
  TOP_MARGIN = 'topMargin',
  SECTION_GAP = 'sectionGap',
  PARAGRAPH_GAP = 'paragraphGap',
  STEP_HEIGHT = 'stepHeight',
  ASIDE_WIDTH = 'asideWidth',
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
    [SizeVariableNames.CONTENT_WIDTH]: '420px',
    [SizeVariableNames.SECTION_SLEEVE]: '85px',
    [SizeVariableNames.TOP_MARGIN]: '256px',
    [SizeVariableNames.SECTION_GAP]: '28px',
    [SizeVariableNames.PARAGRAPH_GAP]: '20px',
    [SizeVariableNames.STEP_HEIGHT]: '400px',
    [SizeVariableNames.ASIDE_WIDTH]: '40vw',
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
    breakpoints: ['1000px'],
    space: {
      ...typographyTheme.space,
      ...pick(variables.sizes, [
        SizeVariableNames.SECTION_SLEEVE,
        SizeVariableNames.TOP_MARGIN,
        SizeVariableNames.CONTENT_WIDTH,
        SizeVariableNames.SECTION_GAP,
        SizeVariableNames.PARAGRAPH_GAP,
        SizeVariableNames.STEP_HEIGHT,
        SizeVariableNames.ASIDE_WIDTH,
      ]),
    },
    sizes: pick(variables.sizes, [
      SizeVariableNames.CONTENT_WIDTH,
      SizeVariableNames.ASIDE_WIDTH,
      SizeVariableNames.SECTION_SLEEVE,
      SizeVariableNames.TOP_MARGIN,
    ]),
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
        marginBottom: SizeVariableNames.SECTION_GAP,
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
        marginBottom: SizeVariableNames.PARAGRAPH_GAP,
        marginTop: SizeVariableNames.PARAGRAPH_GAP,
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
            width: '100vw',
            // marginTop: "40px",
            marginLeft: [
              0,
              `calc(-${variables.sizes[SizeVariableNames.CONTENT_WIDTH]} - ${variables.sizes[SizeVariableNames.SECTION_SLEEVE]} * 2)`,
            ],
            marginBottom: SizeVariableNames.SECTION_GAP,
            position: 'relative',
            display: ['block', 'flex'],
          },
          ScrollerContainer: {
            paddingTop: [SizeVariableNames.SECTION_SLEEVE, 0],
            paddingRight: [0, SizeVariableNames.SECTION_SLEEVE],
            paddingBottom: [SizeVariableNames.SECTION_SLEEVE, 0],
            paddingLeft: [SizeVariableNames.SECTION_SLEEVE, 0],
            width: '100%',
            marginLeft: [0, variables.sizes[SizeVariableNames.SECTION_SLEEVE]],
          },
          ScrollerStep: {
            position: 'relative',
            padding: 0,
            minHeight: SizeVariableNames.STEP_HEIGHT,
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
            minWidth: ['100vw', SizeVariableNames.ASIDE_WIDTH],
            maxWidth: ['100vw', SizeVariableNames.ASIDE_WIDTH],
            paddingLeft: SizeVariableNames.SECTION_SLEEVE,
            position: ['sticky', 'static'],
            top: [0, 'auto'],
            zIndex: [1, 'auto'],
            height: ['50vh', 'auto'],
            paddingRight: SizeVariableNames.SECTION_SLEEVE,
            backgroundColor: ColorVariableNames.DARK_BACKGROUND,
            color: ColorVariableNames.LIGHT_TEXT,
          },
          Sticker: {
            position: ['static', 'sticky'],
            width: '100%',
            height: ['100%', '80vh'],
            maxHeight: ['100%', '80vh'],
            top: ['auto', '2rem'],
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
    prism: {
      '.builtin, .changed, .keyword, .punctuation, .operator, .tag, .deleted, .string, .attr-value, .char, .number, .inserted': {
        color: '#0f8f5e',
      },
      '.comment, .cdata, .doctype': {
        fontStyle: 'italic',
      },
    },
  },
])

theme.mergeWith = (otherTheme: any) => merge.all([theme, otherTheme])

export default theme
