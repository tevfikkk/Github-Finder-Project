import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

const Home = () => {
  return (
    <div>
      <h1 className='text-opacity-60 text-size text-5xl text-sky-500'>
        Github Finder
      </h1>
      <br />
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home
