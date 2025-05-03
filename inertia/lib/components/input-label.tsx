// components/InputLabel.tsx
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

interface InputLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
}

export default function InputLabel({ id, label, error, className, ...props }: InputLabelProps) {
    return (
        <div className="w-full flex flex-col gap-1">
            <Label htmlFor={id} className="text-sm font-medium truncate ">
                {label}
            </Label>
            <Input
                id={id}
                className={`${className ?? ''} ${error ? 'border-red-500' : ''}`}
                {...props}
            />
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    )
}
