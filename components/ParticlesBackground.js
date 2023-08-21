import React from "react";
import Particles from "react-tsparticles";
import particleconfig from "../config/particles-config";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
const ParticleBackground = () =>{
    
    const particlesInit =useCallback(async(engine) =>{
        console.log(engine);
        await loadFull(engine);
    },[]);
    const particlesLoaded = useCallback(async(container)=>{
        await console.log(container)
    },[]);
    return (
        <div id="particle-background">
            <Particles 
            id='tsparticles' 
            particlesLoaded='particlesLoaded'
            init={particlesInit}
            Loaded={particlesLoaded}
            options={particleconfig}
            width='100vw'
            height='100vh'
            >
            </Particles>
        </div>
    );
};
export default ParticleBackground;
    
