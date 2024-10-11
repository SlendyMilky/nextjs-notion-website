import Link from 'next/link'
import React, { FC } from 'react'

type NextLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
}

const PageLink: FC<NextLinkProps> = ({ href, className, children }) => {
  return (
    <Link href={href} passHref className={className}>
      {children}
    </Link>
  )
}

export default PageLink
