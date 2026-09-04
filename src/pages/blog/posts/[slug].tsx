import { useRouter } from "next/router"

export default function PostPage(){
    const router = useRouter();
    console.log(router.query.slug)
    return(
        <div>
            <h2>post:{router.query.slug}</h2>
        </div>
    )
}