import { PropsWithChildren } from 'react'
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from '../components/ui/sonner';

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Toaster position="top-center" />
            {children}
        </ThemeProvider>
    )
}