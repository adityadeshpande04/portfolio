import Section1 from '@/components/section1'
import { Inter } from 'next/font/google'
import ParticlesBackground from '@/components/ParticlesBackground'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <ParticlesBackground />
    <Section1 />
   </div>
  )
}
