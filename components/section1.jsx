import Image from "next/image";
import section1 from "/public/section1.png";
import Button from "./button";
export default function Section1()
{
    return(
        <div className="relative h-full flex flex-col gap-16 justify-center top-72">
            <div className="relative flex flex-col text-white text-center">
                <h3 className="text-xl font-bold">hello, it's me</h3>
                <h1 className=" text-6xl font-extrabold">aditya</h1>
            </div>
            <div className="relative flex flex-row justify-center gap-12">
            <Button title="about me" Page="/about" />
            <Button title="projects" />
            <Button title="collaborate" />
            </div>
        </div>
    );
}