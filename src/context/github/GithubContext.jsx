import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  // higher order component
  //   const [users, setUsers] = useState([])
  //   const [loading, setLoading] = useState(true)
  const initialState = {
    users: [],
    user: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // Get search results
  const searchUsers = async text => {
    setLoading()

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
    dispatch({
      // dispatch = to send
      type: 'GET_USERS',
      payload: items,
    })
  }

  // Get single user
  const getUser = async login => {
    setLoading()

    const response = await fetch(`https://api.github.com/users/${login}`, {
      headers: {
        Authorization: `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`,
      },
    })

    if (response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await response.json()
      dispatch({
        // dispatch = to send
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  //Clear Users from state
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        getUser,
        clearUsers,
        searchUsers,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
