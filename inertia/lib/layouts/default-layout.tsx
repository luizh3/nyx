import { PropsWithChildren } from 'react'
import { ThemeProvider } from '../components/theme-provider'

export default function DefaultLayout({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {children}
        </ThemeProvider>
    )
}
