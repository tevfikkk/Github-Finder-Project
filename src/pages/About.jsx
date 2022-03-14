import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        This project made by Tevfikkk. Layout Ref is below
        <br />
        <a
          href='https://github.com/tevfikkk'
          className='text-sky-500 hover:text-sky-900'>
          Click here to see my Github acc
        </a>
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Hassib Moddasser
        </a>
      </p>
    </div>
  )
}

export default About
