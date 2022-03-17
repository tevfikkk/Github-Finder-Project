import React from 'react'
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
GithubContext

const User = () => {
  const { getUser, user } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login) // check here later
  }, [])

  console.log(user.login)

  return <div>{params.login}</div>
}

export default User
