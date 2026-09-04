import Image from "next/image";

export default function ImagesPage() {
    return (
        <div>
            <h2>Images page</h2>
              <Image src="/assets/vader.jpg" width={500} height={500} alt="Imagem"/>
        </div>
    );
}
