import React from 'react'

const About = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className='text-center text-3xl bg-title-back h-28'>ABOUT</div>
    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
        <img className="object-cover object-center shadow-2xl rounded-3xl " alt="hero" src="kawakawa-brothers.png" />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
          <br className="hidden lg:inline-block shadow-2xl" />readymade gluten
        </h1>
        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      </div>
    </div>
  </section>
 )
}

export default About