import axios from 'axios'
import { useEffect, useState } from 'react'
import './assets/css/App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import './assets/css/form.css'
import './assets/css/list.css'
import './assets/css/buttons.css'

function App() {

  const [users, setUsers] = useState([])

  const [userSelected, setUserSelected] = useState(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
      .finally(() => setIsLoading(false))

  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
      .finally(() => setIsLoading(false))
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }

  const deselectUser = () => {
    setUserSelected(null)
  }

  return (
    <div className="App">
      {isLoading ? 
        <>
          <p className='loader'>Loading...</p>
          <UsersForm getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser} setIsLoading={setIsLoading} />
          <UsersList users={users} selectUser={selectUser} getUsers={getUsers} setIsLoading={setIsLoading} />
        </> :
        <>
          <UsersForm getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser} setIsLoading={setIsLoading} />
          <UsersList users={users} selectUser={selectUser} getUsers={getUsers} setIsLoading={setIsLoading} />
        </>
      }
    </div>
  )
}

export default App
