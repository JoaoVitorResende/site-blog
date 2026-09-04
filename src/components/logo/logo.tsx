import Link from "next/link"
import Image from "next/image"

export const Logo = () =>{
    return(
        <Link href='/' title="pagina inicial">
            <Image src="/logo.svg" alt="LogoSite" width={116} height={32}/>
        </Link>
    )
}