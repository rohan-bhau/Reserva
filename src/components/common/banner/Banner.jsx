
import Image from 'next/image';
import Text from './Text';
import Features from './Features';
import Stats from './Stats';


const Banner = () => {
  return (
    <div className="relative w-full min-h-[100vh]  overflow-hidden">

      {/* Background */}
      <Image
        src="/assets/hero.png"
        alt="hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[100vh] px-5 sm:px-8 lg:px-10 py-20">

        <div className="max-w-6xl mx-auto w-full">

          {/* TEXT */}

                <Text/>
          {/* FEATURES */}
          <Features/>

          {/* STATS */}
         <Stats/>

        </div>
      </div>
    </div>
  )
}

export default Banner