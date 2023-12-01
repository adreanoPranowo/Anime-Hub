import Image from "next/image"
import Link from "next/link"

const AnimeList = ({title, images, season, episodes, status, type, id, duration}) => {
    return (
        <Link href={`/${id}`} className="cursor-pointer">
            <div className="grid grid-cols-2">
                <Image src={images} alt="palacehold" width={350} height={350}/>
                <div className="" width={150}>
                    <h3 className="font-bold text-xl pl-2 pt-2">Tittle : {title}</h3>
                    <br />
                    <p className="pl-2">Type : {type}</p>
                    <p className="pl-2">Season : {season}</p>
                    <p className="pl-2">Episode : {episodes}</p>
                    <p className="pl-2">Duration : {duration}</p>
                    <p className="pl-2">Status : {status}</p>
                </div>
            </div>
        </Link>
    )
}

export default AnimeList