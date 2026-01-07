import { Card, Table, Typography, Tag, Descriptions } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import styles from './SearchResult.module.css'

const { Paragraph, Text } = Typography

interface GeneratedInfo {
    sql: string
    params?: any[]
    explanation?: string
    confidence?: number
}

interface SearchResultProps {
    generated: GeneratedInfo
    rows: any[]
}

export default function SearchResult({ generated, rows }: SearchResultProps) {
    // Generate columns dynamically from the first row
    const columns = rows.length > 0
        ? Object.keys(rows[0]).map((key) => ({
            title: key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
            dataIndex: key,
            key: key,
            render: (value: any) => {
                if (value === null || value === undefined) {
                    return <Text type="secondary">N/A</Text>
                }
                if (typeof value === 'boolean') {
                    return value ? 'Yes' : 'No'
                }
                return String(value)
            }
        }))
        : []

    return (
        <div className={styles.resultContainer}>
            {/* Generated SQL Section */}
            <Card
                className={styles.generatedSection}
                title={
                    <span>
                        <CheckCircleOutlined className={styles.successIcon} />
                        Generated Query
                    </span>
                }
            >
                <Descriptions column={1} bordered size="small">
                    {generated.confidence !== undefined && (
                        <Descriptions.Item label="Confidence">
                            <Tag color={generated.confidence >= 0.8 ? 'green' : generated.confidence >= 0.5 ? 'orange' : 'red'}>
                                {(generated.confidence * 100).toFixed(0)}%
                            </Tag>
                        </Descriptions.Item>
                    )}

                    <Descriptions.Item label="SQL Query">
                        <pre className={styles.sqlQuery}>{generated.sql}</pre>
                    </Descriptions.Item>

                    {generated.params && generated.params.length > 0 && (
                        <Descriptions.Item label="Parameters">
                            <code className={styles.params}>
                                {JSON.stringify(generated.params, null, 2)}
                            </code>
                        </Descriptions.Item>
                    )}

                    {generated.explanation && (
                        <Descriptions.Item label="Explanation">
                            <Paragraph className={styles.explanation}>
                                {generated.explanation}
                            </Paragraph>
                        </Descriptions.Item>
                    )}
                </Descriptions>
            </Card>

            {/* Results Table Section */}
            <Card
                className={styles.resultsSection}
                title={`Results (${rows.length} ${rows.length === 1 ? 'row' : 'rows'})`}
            >
                {rows.length > 0 ? (
                    <Table
                        dataSource={rows.map((row, index) => ({ ...row, key: index }))}
                        columns={columns}
                        pagination={{
                            pageSize: 10,
                            showSizeChanger: true,
                            showTotal: (total) => `Total ${total} items`,
                        }}
                        scroll={{ x: 'max-content' }}
                        size="small"
                    />
                ) : (
                    <div className={styles.noResults}>
                        <Text type="secondary">No results found</Text>
                    </div>
                )}
            </Card>
        </div>
    )
}

