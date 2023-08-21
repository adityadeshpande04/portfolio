import ParticleBackground from "@/components/ParticlesBackground"
import SocialButton from "@/components/social-button"
export default function About()
{
    return(
        <div>
            <ParticleBackground />
            <div className="relative flex flex-col items-center top-64 justify-center gap-12">
                <p className="relative text-gray-50 font-medium text-lg w-6/12 text-center z-40">Hey there! I'm a CS enthusiast by day, crafting cool web experiences as a full-stack developer. When I'm not immersed in code, you'll find me lost in anime worlds, binge-watching series, and exploring new foodie delights. Let's talk tech, discuss our favorite characters, and share some delicious recommendations!</p>
                <div className=" flex flex-row w-1/4 justify-evenly">
                    <div className=" relative h-10 w-10">
                        <SocialButton Image="/instagram.png" Link="" />
                    </div>
                    <div className=" relative h-10 w-10">
                        <SocialButton Image="/linkedin.png" Link="" />
                    </div>
                    <div className=" relative h-12 w-12 object-cover">
                        <SocialButton Image="/github.png" Link="" />
                    </div>
                </div>
            </div>
        </div>
    )
}