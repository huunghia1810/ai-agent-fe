import { Spin as AntdSpin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import styles from './Spin.module.css'

interface SpinProps {
    size?: 'small' | 'default' | 'large'
    tip?: string
}

export default function Spin({ size = 'large', tip }: SpinProps) {
    const spinIcon = <LoadingOutlined style={{ fontSize: size === 'large' ? 48 : size === 'default' ? 32 : 24 }} spin />

    return (
        <div className={styles.spinContainer}>
            <AntdSpin indicator={spinIcon} size={size} tip={tip} />
        </div>
    )
}

