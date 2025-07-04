import AuthLayout from "~/lib/layouts/auth-layout";
import { ReactNode } from "react";
import { Head, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

interface EmailConfirmedProps {
    success: boolean;
    message: string;
}

export default function EmailConfirmed({ success, message }: EmailConfirmedProps) {
    const handleGoToLogin = () => {
        router.visit('/login');
    };

    return (
        <>
            <Head title="Confirmação de E-mail" />
            <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <a href="#" className="flex items-center gap-2 self-center font-medium">
                        <div className="flex h-6 w-6">
                            <img src="/images/nyx.png" className="rounded"></img>
                        </div>
                        Nyx Store.
                    </a>

                    <div className="bg-white border rounded-lg p-6 text-center shadow-sm">
                        <div className="flex justify-center mb-4">
                            {success ? (
                                <CheckCircle className="h-12 w-12 text-green-500" />
                            ) : (
                                <XCircle className="h-12 w-12 text-red-500" />
                            )}
                        </div>

                        <h2 className="text-black text-xl font-semibold mb-2">
                            {success ? 'E-mail Confirmado!' : 'Erro na Confirmação'}
                        </h2>

                        <p className="text-gray-600 mb-6">
                            {message}
                        </p>

                        <Button
                            onClick={handleGoToLogin}
                            className="w-full"
                            variant={success ? "default" : "outline"}
                        >
                            Ir para o Login
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

EmailConfirmed.layout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>; 