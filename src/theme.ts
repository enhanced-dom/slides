/* eslint-disable @typescript-eslint/naming-convention */
import { toTheme } from '@theme-ui/typography'
import typography from 'typography-theme-wordpress-2016'
import merge from 'deepmerge'
import '@fontsource/montserrat'
import '@fontsource/noto-serif'
import pick from 'lodash.pick'

const typographyTheme = toTheme(typography)

export enum ColorVariableNames {
  LIGHT_BACKGROUND = 'light-background',
  DARK_TEXT = 'dark-text',
  DARK_BACKGROUND = 'dark-background',
  LIGHT_TEXT = 'light-text',
  HIGHLIGHT = 'highlight',
  CODE_KEYWORDS = 'code-keywords',
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
  HEADING = 'heading',
  MONOSPACE = 'monospace',
}

export const variables = {
  colors: {
    [ColorVariableNames.LIGHT_BACKGROUND]: '#f1f5f8',
    [ColorVariableNames.DARK_TEXT]: '#3D4851',
    [ColorVariableNames.DARK_BACKGROUND]: '#3D4851',
    [ColorVariableNames.LIGHT_TEXT]: 'white',
    [ColorVariableNames.HIGHLIGHT]: '#e2001a',
    [ColorVariableNames.CODE_KEYWORDS]: '#aaf6d9',
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
    [FontVariableNames.HEADING]: 'Noto Serif, serif',
    [FontVariableNames.MONOSPACE]: 'Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace',
  },
}

const theme: any = merge.all([
  typographyTheme,
  {
    colors: variables.colors,
    breakpoints: ['1000px'],
    space: {
      ...typographyTheme.space,
      ...variables.sizes,
    },
    sizes: pick(variables.sizes, [
      SizeVariableNames.CONTENT_WIDTH,
      SizeVariableNames.ASIDE_WIDTH,
      SizeVariableNames.SECTION_SLEEVE,
      SizeVariableNames.TOP_MARGIN,
    ]),
    fonts: variables.fonts,
    styles: {
      global: {
        body: {
          fontFamily: FontVariableNames.BODY,
        },
        img: {
          objectFit: 'contain',
          margin: 0,
          maxWidth: '100%',
          maxHeight: '100%',
        },
      },
      waves: {
        default: {
          Wave: {
            width: '100vw',
            marginLeft: [
              0,
              `calc(-${variables.sizes[SizeVariableNames.ASIDE_WIDTH]} - ${variables.sizes[SizeVariableNames.SECTION_SLEEVE]})`,
            ],
            marginBottom: SizeVariableNames.SECTION_GAP,
            position: 'relative',
            display: ['block', 'flex'],
          },
          ScrollerContainer: {
            paddingTop: [SizeVariableNames.SECTION_SLEEVE, 0],
            paddingRight: SizeVariableNames.SECTION_SLEEVE,
            paddingBottom: [SizeVariableNames.SECTION_SLEEVE, 0],
            paddingLeft: [SizeVariableNames.SECTION_SLEEVE, 0],
            width: '100%',
            marginLeft: [0, SizeVariableNames.SECTION_SLEEVE],
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
            backgroundColor: ColorVariableNames.DARK_TEXT,
            borderRadius: '3px',
            position: 'absolute',
            left: '-24px',
          },
          StickerContainer: {
            minWidth: ['100vw', SizeVariableNames.ASIDE_WIDTH],
            maxWidth: ['100vw', SizeVariableNames.ASIDE_WIDTH],
            position: 'sticky',
            top: ['0', '10vh'],
            zIndex: [1, 'auto'],
            height: ['30vh', 'auto'],
            maxHeight: ['50vh', '80vh'],
            display: 'flex',
            flexDirection: ['row', 'column'],
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: ColorVariableNames.DARK_BACKGROUND,
            color: ColorVariableNames.LIGHT_TEXT,
            paddingRight: SizeVariableNames.SECTION_SLEEVE,
            paddingLeft: SizeVariableNames.SECTION_SLEEVE,

            a: {
              border: 'none',
            },
          },
          StickerStep: {
            position: 'relative',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          },
          // this is used to select the active scroller step
          // 0.8 the step that is at 80% the screen height
          // 0.5 selects the step that is at half the screen height
          focus: [0.8, 0.5],
        },
      },
      shell: {
        default: {
          Root: {
            display: 'flex',
            width: '100vw',
            h1: {
              marginLeft: [SizeVariableNames.SECTION_SLEEVE, 0],
              color: ColorVariableNames.HIGHLIGHT,
            },
            h2: {
              marginLeft: [SizeVariableNames.SECTION_SLEEVE, 0],
              marginTop: '60px',
            },
            h3: {
              marginLeft: [SizeVariableNames.SECTION_SLEEVE, 0],
              marginTop: '4px',
            },
            hr: {
              borderColor: ColorVariableNames.DARK_TEXT,
            },
            a: {
              color: 'inherit',
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: ColorVariableNames.DARK_TEXT,
              '&:visited': {
                color: 'inherit',
              },
              '&:hover': {
                color: ColorVariableNames.HIGHLIGHT,
              },
            },
            aside: {
              bg: ColorVariableNames.DARK_BACKGROUND,
              color: ColorVariableNames.LIGHT_TEXT,
              minWidth: [0, SizeVariableNames.ASIDE_WIDTH],
              maxWidth: ['100vw', SizeVariableNames.ASIDE_WIDTH],
              minHeight: '100vh',
            },
            main: {
              py: [5, SizeVariableNames.TOP_MARGIN],
              pl: [0, SizeVariableNames.SECTION_SLEEVE],
              bg: ColorVariableNames.LIGHT_BACKGROUND,
              color: ColorVariableNames.DARK_TEXT,
              width: ['100vw', '100%'],
              mx: ['auto', 0],
            },
            header: {
              position: 'relative',
              paddingX: [SizeVariableNames.SECTION_SLEEVE, 0],
              display: 'flex',
              flexDirection: ['row-reverse', 'column'],
              alignItems: ['center', 'flex-start'],
              justifyContent: ['space-between', 'start'],
            },
          },
          Author: {
            display: 'flex',
            flexDirection: 'column',
            paddingTop: [1, undefined],
          },
          Title: {
            position: ['relative', 'static'],
            width: '100%',
            height: ['auto', '100%'],
            right: ['auto', `calc(100vw - ${variables.sizes[SizeVariableNames.CONTENT_WIDTH]}})`],
            color: ['text', ColorVariableNames.LIGHT_TEXT],
          },
        },
      },
      CodeSurfer: {
        pre: {
          color: ColorVariableNames.LIGHT_TEXT,
          backgroundColor: ColorVariableNames.DARK_BACKGROUND,
        },
        tokens: {
          'builtin changed keyword punctuation operator tag deleted string attr-value char number inserted': {
            color: ColorVariableNames.CODE_KEYWORDS,
          },
          'comment cdata doctype': {
            fontStyle: 'italic',
          },
        },
      },
    },
  },
])

theme.mergeWith = (otherTheme: any) => merge.all([theme, otherTheme])

export default theme
