import { Logo } from "@/components/logo"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="bg-gray-500">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between md:flex-row gap-8 py-8">
                    <Logo />
                    <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
                        <Link className="hover:text-blue-200" href={"/termos-de-uso"}>Termos de uso</Link>
                        <Link className="hover:text-blue-200" href={"/politica-de-privacidade"}>Política de privacidade</Link>
                        <Link className="hover:text-blue-200" href={"/feedback"}>Feedback</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}