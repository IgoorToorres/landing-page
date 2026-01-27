import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href={"/"} title="Pagin inicial">
            <Image
                src="/Brand-logo.svg"
                alt="Logo Site"
                width={116}
                height={32}
            />
        </Link>
    )
}