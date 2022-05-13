/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Scroller from 'gatsby-theme-waves/src/components/bar-scroller'
import BaseWave from 'gatsby-theme-waves/src/components/wave'

const Sticker = ({ progress = 0, steps, variant = 'default' }: { progress: number; steps: any[]; variant?: string }) => {
  const currentStep = Math.round(progress)
  const prev = steps[currentStep - 1]
  const curr = steps[currentStep]
  const next = steps[currentStep + 1]

  return (
    <div
      sx={{
        variant: `styles.waves.${variant}.StickerContainer`,
      }}
    >
      <div sx={{ variant: `styles.waves.${variant}.Sticker` }}>
        {prev && (
          <div
            sx={{
              variant: `styles.waves.${variant}.StickerStep`,
            }}
            style={{ opacity: Math.max(0, currentStep - progress) }}
            key={currentStep - 1}
          >
            {prev}
          </div>
        )}
        <div
          sx={{
            variant: `styles.waves.${variant}.StickerStep`,
          }}
          style={{ opacity: 1 - Math.abs(currentStep - progress) }}
          key={currentStep}
        >
          {curr}
        </div>
        {next && (
          <div
            sx={{
              variant: `styles.waves.${variant}.StickerStep`,
            }}
            style={{ opacity: Math.max(0, progress - currentStep) }}
            key={currentStep + 1}
          >
            {next}
          </div>
        )}
      </div>
    </div>
  )
}

export abstract class Wave extends React.PureComponent<{ children: React.ReactNode }> {
  protected abstract toColumns: (children: React.ReactElement[]) => [React.ReactElement[], React.ReactElement[]]

  private _childrenToColumns = (children: React.ReactElement | React.ReactElement[]) => {
    const items = React.Children.toArray(children) as React.ReactElement[]
    const columns = this.toColumns(items)
    return columns
  }

  render() {
    return <BaseWave columnComponents={[Sticker, Scroller]} childrenToStepColumns={this._childrenToColumns} {...this.props} />
  }
}
