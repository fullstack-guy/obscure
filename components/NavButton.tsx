
import Link from 'next/link'

import type { FC } from 'react'

import classNames from 'classnames'

interface INavButton {
  title: string
  href: string
  currentPath: string
}

const NavButton: FC<INavButton> = ({ title, href, currentPath }) => (
  <Link
    href={href}
    className={classNames(
      'translation-colors cursor-pointer text-base font-medium duration-300 hover:text-black hover:font-bold',
      {
        'text-black font-bold': currentPath.indexOf(href) === 1,
        'text-black/80': currentPath.indexOf(href) !== 1,
      }
    )}
  >
    {title}
  </Link>
)

export default NavButton
