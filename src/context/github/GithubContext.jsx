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
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // user: state.user,
        // loading: state.loading,
        // repos: state.repos,
        ...state,
        dispatch,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
