import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import AppHeader from '../../components/Header/AppHeader.tsx'
import AppFooter from '../../components/Footer/AppFooter.tsx'
import styles from './MainLayout.module.css'

const { Content } = Layout

export default function MainLayout() {
    return (
        <Layout className={styles.root}>
            <AppHeader />
            <Content className={styles.content}>
                <Outlet />
            </Content>
            <AppFooter />
        </Layout>
    )
}
