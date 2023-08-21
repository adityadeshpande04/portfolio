import Link from "next/link"
import Image from "next/image"
export default function SocialButton(props)
{
    return(
        <div className="flex flex-row relative">
        <a href={props.Link}><img src={props.Image} /></a>
        </div>
    )
} 