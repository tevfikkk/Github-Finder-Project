import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([])
  //   const [loading, setLoading] = useState(true)
  const initialState = {
    users: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // Get search results
  const searchUsers = async text => {
    setLoading()

    const params = new URLSearchParams({
      q: text,
    })

    const response = await fetch(
      `https://api.github.com/search/users?${params}`,
      {
        headers: {
          Authorization: `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`,
        },
      }
    )

    const { items } = await response.json()
    dispatch({
      // dispatch = to send
      type: 'GET_USERS',
      payload: items,
    })
  }

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  //Clear Users from state
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
