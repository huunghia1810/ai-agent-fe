import { Navigate } from 'react-router-dom'
import type { RouteObject } from "react-router-dom"
import MainLayout from '../layouts/MainLayout/MainLayout'
import HomePage from '../pages/Home/HomePage'
import SearchPage from '../pages/Search/SearchPage'

export const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            { path: '/', element: <Navigate to="/search" replace /> },
            { path: '/home', element: <HomePage /> },
            { path: '/search', element: <SearchPage /> },
            { path: '*', element: <Navigate to="/search" replace /> },
        ],
    },
]
