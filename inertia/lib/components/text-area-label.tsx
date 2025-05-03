import React from 'react'
import { Label } from '@/components/ui/label'
import { Textarea } from "~/lib/components/ui/textarea";

interface TextAreaLabelProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    error?: string
}

export default function TextAreaLabel({ id, label, error, className, ...props }: TextAreaLabelProps) {
    return (
        <div className="w-full flex flex-col gap-1">
            <Label htmlFor={id} className="text-sm font-medium truncate">
                {label}
            </Label>
            <Textarea
                id={id}
                className={`${className ?? ''} ${error ? 'border-red-500' : ''}`}
                {...props}
            />
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    )
}
