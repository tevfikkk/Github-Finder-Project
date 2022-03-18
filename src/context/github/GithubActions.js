// Get search results
export const searchUsers = async text => {
  const params = new URLSearchParams({
    q: text,
  })

  const options = {
    headers: {
      Authorization: `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`,
    },
  }

  const response = await fetch(
    `https://api.github.com/search/users?${params}`,
    { options }
  )

  const { items } = await response.json()
  return items
}

// Get single user
export const getUser = async login => {
  const response = await fetch(`https://api.github.com/users/${login}`, {
    headers: {
      Authorization: `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`,
    },
  })

  if (response.status === 404) {
    window.location = '/notfound'
  } else {
    const data = await response.json()
    return data
  }
}

// Get user repos
export const getUserRepos = async login => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })

  const options = {
    headers: {
      Authorization: `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`,
    },
  }

  const response = await fetch(
    `https://api.github.com/users/${login}/repos?${params}`,
    { options }
  )

  const data = await response.json()
  return data
}
