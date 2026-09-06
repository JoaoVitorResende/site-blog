import { CreateStoreButton } from "../create-store-button"
import { Store } from "lucide-react"

export const CallToAction = () => {
    return (
        <section className="relative py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
            <div className="absolute inset-0 hidden md:block bg-[url('/backgroundFooter.svg')] bg-cover bg-center bg-no-repeat opacity-90" />
            <div className="container relative">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="p-4 bg-cyan-300 w-fit rounded-full">
                        <Store className="text-cyan-100"/>
                    </div>
                     <h2 className={`text-balance text-center text-heading-xl text-gray-100 font-sans`}>Crie uma loja online e inicie suas vendas ainda hoje</h2>
                    <CreateStoreButton isSmall={false} />
                </div>
            </div>
        </section>
    )
}