import React, { useCallback, useMemo, useState } from 'react'
import classnames from 'classnames'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'

import * as styles from './toc.style.pcss'
import { Icon } from '../icon.component'

export const Heading2 = ({
  children,
  id,
  className,
  ...forwarded
}: React.BaseHTMLAttributes<HTMLElement> & { children: string; variant: string }) => {
  const anchorRef = id ?? children.toLowerCase().replace(/\s/, '-')
  const url = useMemo(() => {
    const modifiedUrl = new URL(window.location.href)
    modifiedUrl.hash = anchorRef
    return modifiedUrl
  }, [anchorRef])
  const [copied, setCopied] = useState(false)
  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(url.toString())
    setCopied(true)
  }, [url, setCopied])
  const handleKeyboardCopy = useCallback(
    (e: React.KeyboardEvent) => {
      const hasModifier = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
      const isActionKey = e.key == ' ' || e.key == 'Enter'
      if (!hasModifier && isActionKey) {
        e.stopPropagation()
        e.preventDefault()
        handleCopyLink()
      }
    },
    [handleCopyLink],
  )
  const iconConfig = useMemo(() => ({ ...(copied ? faClipboard : faLink), namespace: 'fa5' }), [copied])
  const handleCopyReset = useCallback(() => {
    setCopied(false)
  }, [setCopied])
  return (
    <h2
      className={classnames(styles.heading, className)}
      {...forwarded}
      tabIndex={0}
      onKeyDown={handleKeyboardCopy}
      onBlur={handleCopyReset}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="link"
    >
      <a id={anchorRef} className={styles.anchor} href={url.toString()}>
        {children}
        <Icon
          onClick={copied ? undefined : handleCopyLink}
          config={iconConfig}
          className={classnames(styles.icon, { [styles.copied]: copied })}
          title={copied ? 'Copied to clipboard!' : 'Copy link'}
        />
      </a>
    </h2>
  )
}
