import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { router } from '@inertiajs/react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { showError } from "./toast-adapter"

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {

    const [values, setValues] = useState({
        password: "",
        email: "",
    })

    function handleChange(event: any) {

        const key = event.target.id;
        const value = event.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))

    }

    function handleSubmit(event: any) {
        event.preventDefault()
        router.post('/login', values, {
            onError: (errorBag) => {
                console.error(errorBag)
                showError("Usuario ou senha invalidos!")
            }
        })
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="border-[var(--border)]">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6">
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>

                                    </div>
                                    <Input id="password" type="password" required onChange={handleChange} />
                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <a href="/register" className="underline underline-offset-4">
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
