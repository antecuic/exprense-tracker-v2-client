import styles from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import useNavigation from '../../hooks/useNavigation'
import cn from 'classnames'

export interface IData {
  text: string
  urlname: string
  url: string
  description: string
}

const Header = () => {
  const data: IData[] = useNavigation()
  const location = useLocation()

  return (
    <nav className={styles.header}>
      <ol className={styles.headerList}>
        <span className={styles.logo} />
        {data.map((item) => (
          <Link to={item.url} key={item.urlname}>
            <li
              className={cn([
                styles.headerItem,
                { selected: location.pathname === item.url },
              ])}
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ol>
    </nav>
  )
}

export default Header
