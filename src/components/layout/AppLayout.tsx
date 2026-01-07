import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import AppHeader from '../Header/AppHeader.tsx'
import AppFooter from '../Footer/AppFooter.tsx'

const { Content } = Layout

export default function AppLayout() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppHeader />

            <Content style={{ padding: '24px' }}>
                <Outlet />
            </Content>

            <AppFooter />
        </Layout>
    )
}
