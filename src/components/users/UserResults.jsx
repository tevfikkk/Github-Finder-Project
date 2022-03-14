import React, { useEffect } from 'react'

const UserResults = () => {
  useEffect(() => {
    fetchUsers().then(data => console.log(data))
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api.github.com', {
        headers: {
          Authorization: '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',
        },
      })

      const data = await response.json()
      return data
    } catch (err) {
      console.error(err)
      throw Error(err)
    }
  }

  return <div>user results</div>
}

export default UserResults
