import { useState, useEffect } from 'react'
import { Button, Input, Typography } from 'antd'
import { http } from '../../lib/http'
import { usePageTitle } from '../../contexts/PageTitleContext'
import Spin from '../../components/Spin/Spin'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import SearchResult from '../../components/SearchResult/SearchResult'
import styles from './SearchPage.module.css'

const { Title, Text } = Typography
const { TextArea } = Input

export default function SearchPage() {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<any>(null)
    const [error, setError] = useState<string>('')
    const { setTitle } = usePageTitle()

    useEffect(() => {
        setTitle('AI Query UI - Search')
    }, [setTitle])

    const onSearch = async () => {
        if (!input.trim()) {
            setError('Please enter a search query')
            return
        }

        try {
            setLoading(true)
            setError('')
            setResult(null)

            const res = await http.post('/search', { input })
            setResult(res.data)
        } catch (e: any) {
            setError(e?.response?.data?.message || e?.message || 'Search failed')
        } finally {
            setLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            onSearch()
        }
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.searchContainer}>
                <Title level={2} className={styles.title}>Search</Title>

                <TextArea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your query..."
                    onKeyPress={handleKeyPress}
                    autoSize={{ minRows: 3, maxRows: 6 }}
                    className={styles.textarea}
                    disabled={loading}
                />

                <div className={styles.hints}>
                    <Text type="secondary" className={styles.hintsLabel}>Sample queries:</Text>
                    <ul className={styles.hintsList}>
                        <li>
                            <Text type="secondary" className={styles.hintText}>
                                "Lấy chuyến đi bất kỳ, có đích đến là Nha Trang"
                            </Text>
                        </li>
                        <li>
                            <Text type="secondary" className={styles.hintText}>
                                "Lấy tất cả danh sách chuyến đi có giá lớn hơn 200000, lấy tất cả thông tin của chuyến đi và hành trình"
                            </Text>
                        </li>
                    </ul>
                </div>

                <Button
                    type="primary"
                    size="large"
                    loading={loading}
                    onClick={onSearch}
                    className={styles.searchButton}
                    block
                >
                    Search
                </Button>

                {error && (
                    <ErrorMessage
                        message="Error"
                        description={error}
                        onClose={() => setError('')}
                    />
                )}

                {loading && <Spin tip="Searching..." />}

                {result != null && !loading && (
                    <SearchResult
                        generated={result.generated}
                        rows={result.rows || []}
                    />
                )}
            </div>
        </div>
    )
}
