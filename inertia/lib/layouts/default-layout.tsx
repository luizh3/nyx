import { PropsWithChildren } from 'react'
import { LogOut } from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger
} from '@/components/ui/sidebar'

import { Separator } from '@/components/ui/separator'
import { ThemeProvider } from '@/components/theme-provider'
import { AppSidebar } from '@/components/app-sidebar'
import { router } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

import { Button } from '../components/ui/button'
import { showError } from '../components/toast-adapter'

export default function DefaultLayout({ children }: PropsWithChildren) {

    function handleLogout(event: any) {
        event.preventDefault()
        router.post('/logout', {}, {
            onError: () => {
                showError("Falha fazer logout!")
            }
        })
    }

    const location = usePage().url
    const path = location.replace(/^\//, '')
    const segments = path ? path.split('/') : [];

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="h-4 m-2" />
                        <Breadcrumb className='ml-4'>
                            <BreadcrumbList>
                                {
                                    segments.map((path, index) => {
                                        return <>
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>{path.charAt(0).toUpperCase() + path.slice(1)}</BreadcrumbPage>
                                            </BreadcrumbItem>
                                            {index != (segments.length - 1) && <BreadcrumbSeparator className="hidden md:block" />}
                                        </>
                                    })
                                }
                            </BreadcrumbList>
                        </Breadcrumb>
                        <Button className='ml-auto' variant="ghost" onClick={handleLogout}>Logout <LogOut /></Button>
                    </header>
                    <Separator />
                    <main className='flex-1'>
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    )
}
