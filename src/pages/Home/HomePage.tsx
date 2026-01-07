import { useEffect } from 'react'
import { Typography } from 'antd'
import { usePageTitle } from '../../contexts/PageTitleContext'
import styles from './HomePage.module.css'

const { Title, Paragraph } = Typography

export default function HomePage() {
    const { setTitle } = usePageTitle()

    useEffect(() => {
        setTitle('AI Query UI - Home')
    }, [setTitle])

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
