import { IconWebComponent, IconWebComponentAttributes } from '@enhanced-dom/icon'
import { FontawesomeIconRenderer } from '@enhanced-dom/fontawesome'
import { withReactAdapter } from '@enhanced-dom/react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

IconWebComponent.addIconInterpreter('fa5', new FontawesomeIconRenderer())

declare type IconComponentProps = IconWebComponentAttributes<IconDefinition> &
  React.DetailedHTMLProps<React.HTMLAttributes<IconWebComponent>, IconWebComponent>

export const Icon = withReactAdapter<IconWebComponent, never[], typeof IconWebComponent, IconComponentProps>({
  type: IconWebComponent,
})
