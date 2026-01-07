import { Alert } from 'antd'
import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
    message: string
    description?: string
    onClose?: () => void
}

export default function ErrorMessage({ message, description, onClose }: ErrorMessageProps) {
    return (
        <div className={styles.errorContainer}>
            <Alert
                message={message}
                description={description}
                type="error"
                showIcon
                closable={!!onClose}
                onClose={onClose}
            />
        </div>
    )
}

