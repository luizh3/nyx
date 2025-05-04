import { Home, Inbox } from "lucide-react"
import { router } from "@inertiajs/react"
import { Label } from "./ui/label"

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

const sections = [
    {
        title: "Application",
        items: [
            {
                title: "Home",
                url: "/",
                icon: Home,
            },
            {
                title: "Games",
                url: "/game",
                icon: Inbox,
            },
        ]
    },
    {
        title: "Operations",
        items: [
            {
                title: "Register Game",
                url: "/game/create",
                icon: Inbox,
            },
            {
                title: "Register Section",
                url: "/section/create",
                icon: Inbox,
            },
            {
                title: "Sections",
                url: "/section",
                icon: Inbox,
            },
        ]
    }
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
                    {sections.map((section, key) => {
                        return <div key={key}>
                            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {section.items.map((item, key) => (
                                        <SidebarMenuItem key={key}>
                                            <SidebarMenuButton asChild>
                                                <Label className="cursor-pointer" onClick={() => {
                                                    router.visit(item.url)
                                                }}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </Label>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </div>
                    })}
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
