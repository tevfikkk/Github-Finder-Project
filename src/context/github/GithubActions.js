import axios from 'axios'

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Authorization: `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` },
})

// Get search results
export const searchUsers = async () => {
  const response = await github.get(`/search/users?{params}`)
  // we have to return items of response
  return response.data.items
}

// Get user and repos
export const getUserAndRepos = async login => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ])

  return { user: user.data, repos: repos.data }
}
