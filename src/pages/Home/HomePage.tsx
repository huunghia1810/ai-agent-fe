import { Typography } from 'antd'
import styles from './HomePage.module.css'

const { Title, Paragraph } = Typography

export default function HomePage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.content}>
                <Title level={2} className={styles.title}>Welcome to AI Query</Title>
                <Paragraph className={styles.paragraph}>
                    Use Search to query your database with natural language.
                </Paragraph>
            </div>
        </div>
    )
}
