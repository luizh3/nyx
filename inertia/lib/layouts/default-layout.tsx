import { PropsWithChildren } from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
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
import { Button } from '../components/ui/button'
import { router } from '@inertiajs/react'
import { showError } from '../components/toast-adapter'
import { LogOut } from "lucide-react"

export default function DefaultLayout({ children }: PropsWithChildren) {

    function handleLogout(event: any) {
        event.preventDefault()
        router.post('/logout', {}, {
            onError: () => {
                showError("Falha fazer logout!")
            }
        })
    }

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="h-4 m-2" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Building Your Application
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <Button className='ml-auto' variant="ghost" onClick={handleLogout}>Logout <LogOut /></Button>
                    </header>
                    <Separator />
                    <main>
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    )
}
