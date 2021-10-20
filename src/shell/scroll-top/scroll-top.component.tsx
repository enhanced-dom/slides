import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'

import * as styles from './scroll-top.style.scss'
import { Icon } from './icon.component'

const getBodyScroll = () => {
  return document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0
}

const scrollToTop = () => {
  if (getBodyScroll()) {
    window.scrollBy(0, -50)
    requestAnimationFrame(scrollToTop)
  }
}

export const ScrollTop: React.FunctionComponent = ({ children }) => {
  const [isFlipped, setFlipped] = React.useState(false)
  const showButton = () => {
    if (getBodyScroll()) {
      setFlipped(true)
    }
  }

  const showFront = () => {
    setFlipped(false)
  }

  const buttonContents = children ? (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div>{children}</div>
      <div className={styles.brandingBack}>
        <Icon config={{ ...faArrowAltCircleUp, namespace: 'fa5' }} />
      </div>
    </ReactCardFlip>
  ) : (
    <div className={styles.brandingBack}>
      <Icon config={{ ...faArrowAltCircleUp, namespace: 'fa5' }} />
    </div>
  )

  return (
    <div
      className={styles.branding}
      tabIndex={0}
      role="button"
      onClick={scrollToTop}
      onFocus={showButton}
      onBlur={showFront}
      onMouseEnter={showButton}
      onMouseLeave={showFront}
    >
      {buttonContents}
    </div>
  )
}
