import { Layout, Typography } from 'antd'
import styles from './AppFooter.module.css'

const { Footer } = Layout
const { Text } = Typography

export default function AppFooter() {
    return (
        <Footer className={styles.footer}>
            <Text type="secondary">© {new Date().getFullYear()} AI Query Tool</Text>
        </Footer>
    )
}
