import { toast } from 'sonner'

export const showSuccess = (message: string) =>
    toast.success(message,
        {
            style: {
                backgroundColor: "#10B981",
                color: "#fff",
            }
        },
    )

export const showError = (message: string) =>
    toast.error(message,
        {
            style: {
                backgroundColor: "#EF4444",
                color: "#fff",
            }
        },
    )

