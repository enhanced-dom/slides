import { withReactAdapter } from '@enhanced-dom/react'
import { IconWebComponent, IIconConfig } from '@enhanced-dom/icon'
import { FontawesomeIconRenderer } from '@enhanced-dom/fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

IconWebComponent.addIconInterpreter('fa5', new FontawesomeIconRenderer())

type IconConfigType = IIconConfig<IconDefinition>

declare interface IconAttributes
  extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<IconWebComponent>, IconWebComponent>, 'class' | 'style'> {
  className?: string
  style?: React.CSSProperties
  config: IconConfigType
}

IconWebComponent.register()
export const Icon = withReactAdapter<IconWebComponent, never[], typeof IconWebComponent, IconAttributes>({
  type: IconWebComponent,
})
