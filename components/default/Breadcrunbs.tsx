import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Breadcrumbs } from '../../types/interfaces'

import breadcrumbs_styles from '../../styles/components/Breadcrumbs.module.scss'

const convertBreadcrumb = ( string : string ) => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
}

const Route2LabelMap = {
  "": "Главная",
  "catalog": "Каталог",
};

const RouteReplace = (path: string) => {
  let tmp: string = ''
  Object.entries(Route2LabelMap).forEach(([key, value]) => {
    if(key.includes(path)) {
      tmp = value
    }
  })
  return tmp
}

const Breadcrumbs: React.FC<Breadcrumbs> = ({ classes }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([{ breadcrumb: RouteReplace('') || '', href: '' }] || null)

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: RouteReplace(path) || path, href: '/' + linkPath.slice(0, i + 1).join('/') }
      });

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <nav className={ `${ breadcrumbs_styles.breadcrumbs } ${ classes }` } aria-label="breadcrumbs">
      <ul>
        <li>
         <Link href="/"><a>Главная</a></Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li key={breadcrumb.href}>
              <Link href={breadcrumb.href}>
                <a>
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs