import { Home, Inbox } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Register Game",
        url: "/game/create",
        icon: Inbox,
    },

]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <div className="flex  mt-4 ml-4 items-center">
                    <div className="flex h-12 w-12 ">
                        <img src="/images/nyx.png" className="rounded"></img>
                    </div>
                    <SidebarGroupLabel className="text-xl font-bold">Nyx</SidebarGroupLabel>

                </div>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
