import { useRoutes } from 'react-router-dom'
import { PageTitleProvider } from '../contexts/PageTitleContext'
import { routes } from './routes'

export default function App() {
    return (
        <PageTitleProvider>
            {useRoutes(routes)}
        </PageTitleProvider>
    )
}
