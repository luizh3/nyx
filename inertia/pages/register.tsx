import AuthLayout from "~/lib/layouts/auth-layout";
import { ReactNode } from "react";
import { RegisterForm } from "~/lib/components/register-form";
import { Head, usePage } from "@inertiajs/react";

export default function Register() {
    const { flash } = usePage().props as { flash?: { error?: string; success?: string; }; };

    return (
        <>
            <Head title="Register" />
            <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <a href="#" className="flex items-center gap-2 self-center font-medium">
                        <div className="flex h-6 w-6 ">
                            <img src="/images/nyx.png" className="rounded"></img>
                        </div>
                        Nyx Store.
                    </a>
                    {flash?.error && (
                        <div className=" bg-red-100 text-red-700 border border-red-300 rounded p-3 text-center text-sm">
                            {flash.error}
                        </div>
                    )}
                    {flash?.success && (
                        <div className=" bg-green-100 text-green-700 border border-green-300 rounded p-3 text-center text-sm">
                            {flash.success}
                        </div>
                    )}
                    <RegisterForm />
                </div>
            </div>
        </>
    );
}

Register.layout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;
