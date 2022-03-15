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

  //Get initial users (testing purposes)
  const fetchUsers = async () => {
    setLoading()
    const response = await fetch(`https://api.github.com/users`, {
      headers: {
        Authorization: `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`,
      },
    })

    const data = await response.json()
    dispatch({
      // dispatch = to send
      type: 'GET_USERS',
      payload: data,
    })
  }

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
