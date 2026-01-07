import { Layout, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './AppHeader.module.css'

const { Header } = Layout

export default function AppHeader() {
    const location = useLocation()
    const navigate = useNavigate()

    const selectedKey =
        location.pathname === '/home' ? '/home' :
            location.pathname.startsWith('/search') ? '/search' :
                ''

    return (
        <Header className={styles.header}>
            <div className={styles.brand}>AI Query UI</div>

            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={selectedKey ? [selectedKey] : []}
                items={[
                    { key: '/home', label: 'Home' },
                    { key: '/search', label: 'Search' },
                ]}
                onClick={(e) => navigate(e.key)}
                className={styles.menu}
            />
        </Header>
    )
}
