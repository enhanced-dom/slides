import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'

import * as styles from './scroll-top.style.pcss'
import { Icon } from '../icon.component'

const getBodyScroll = () => {
  return document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0
}

const scrollToTop = () => {
  if (getBodyScroll()) {
    window.scrollBy(0, -50)
    requestAnimationFrame(scrollToTop)
  }
}

const scrollOnKey = (e: React.KeyboardEvent) => {
  if (e.altKey || e.shiftKey || e.ctrlKey || e.key !== 'Enter') {
    return
  }
  e.stopPropagation()
  e.preventDefault()
  scrollToTop()
}

export const ScrollTop = ({ children }: { children?: React.ReactNode }) => {
  const [isFlipped, setFlipped] = React.useState(false)
  const showButton = React.useCallback(() => {
    if (getBodyScroll()) {
      setFlipped(true)
    }
  }, [setFlipped])

  const showFront = React.useCallback(() => {
    setFlipped(false)
  }, [setFlipped])

  const buttonContents = children ? (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className={styles.brandingFront}>{children}</div>
      <div className={styles.brandingBack}>
        <Icon className={styles.scrollIcon} config={{ ...faArrowAltCircleUp, namespace: 'fa5' }} />
      </div>
    </ReactCardFlip>
  ) : (
    <div className={styles.brandingBack}>
      <Icon className={styles.scrollIcon} config={{ ...faArrowAltCircleUp, namespace: 'fa5' }} />
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
      onKeyDown={scrollOnKey}
    >
      {buttonContents}
    </div>
  )
}
