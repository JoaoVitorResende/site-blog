"use client"

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

type ErrorBoundaryProps = {
    error: Error
    reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
    return (
        <div className="min-h-[400px] flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="relative inline-block mb-6">
                    <AlertTriangle size={64} className="text-gray-100 mx-auto"/>
                    <h2 className="text-heading-xl text-white font-sans mb-2">Somehting went wrong !</h2>
                    {error.message && <p className="text-gray-300 mb-2 px-4 text-body-sm overflow-hidden text-ellipsis max-h-24">{error.message}</p>}
                </div>
                <Button variant="primary" onClick={reset} className="mt-4">
                    Try again
                </Button>
            </div>
        </div>
    )
}