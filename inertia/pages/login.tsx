import { LoginForm } from "@/components/login-form";
import AuthLayout from "~/lib/layouts/auth-layout";
import { ReactNode } from "react";
import { Head } from "@inertiajs/react";

export default function LoginPage() {
    return (
        <>
            <Head title="Login" />
            <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <a href="#" className="flex items-center gap-2 self-center font-medium">
                        <div className="flex h-6 w-6 ">
                            <img src="/images/nyx.png" className="rounded"></img>
                        </div>
                        Nyx Store.
                    </a>
                    <LoginForm />
                </div>
            </div>
        </>
    );
}

LoginPage.layout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;
