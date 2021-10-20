import React from 'react'

import { Wave } from './wave.component'

export class ImageWave extends Wave {
  protected toColumns = (items: React.ReactElement[]) => {
    const columns = Array(2)
      .fill(null)
      .map(() => [])

    items.forEach((item) => {
      const isImg = item.props && item.props.mdxType === 'img'
      if (isImg) {
        const img = React.cloneElement(item, {
          style: { objectFit: 'contain', margin: 0 },
        })
        columns[0].push(img)
        columns[1].push(React.createElement('div', {}, []))
      } else {
        const step = columns[0].length - 1
        columns[1][step].props.children.push(item)
      }
    })

    return columns as [React.ReactElement[], React.ReactElement[]]
  }
}
