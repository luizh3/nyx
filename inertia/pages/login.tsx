import { LoginForm } from "@/components/login-form";
import AuthLayout from "~/lib/layouts/auth-layout";
import { ReactNode } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoginPage(props: any) {
    const { flash } = usePage().props as { flash?: { error?: string; success?: string; }; };
    const [email, setEmail] = useState('');

    const handleResendConfirmation = () => {
        if (!email) {
            return;
        }

        router.post('/resend-confirmation', { email }, {
            onSuccess: () => {
            },
            onError: () => {
            }
        });
    };

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
                    {flash?.error && (
                        <div className="bg-red-100 text-red-700 border border-red-300 rounded p-3 text-center text-sm">
                            <p className="mb-2">{flash.error}</p>
                            <Button
                                onClick={handleResendConfirmation}
                                variant="outline"
                                size="sm"
                                className="w-full"
                                disabled={!email}
                            >
                                Reenviar Confirmação
                            </Button>
                        </div>
                    )}
                    {flash?.success && (
                        <div className="bg-green-100 text-green-700 border border-green-300 rounded p-3 text-center text-sm">
                            {flash.success}
                        </div>
                    )}
                    <LoginForm onEmailChange={setEmail} />
                </div>
            </div>
        </>
    );
}

LoginPage.layout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;
