import Link from "next/link"
export default function Button(props)
{
    return(
        <div>
        <button className=" text-xl text-white font-bold rounded-md back bg-transparent opacity-30"><a href={props.Page}>{props.title}</a></button>
        </div>
    )
} 