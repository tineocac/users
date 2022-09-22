import axios from 'axios'
import { useEffect, useState } from 'react'
import './assets/css/App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import './assets/css/form.css'
import './assets/css/list.css'
import './assets/css/buttons.css'
import { Button } from 'reactstrap'
import filter from './helpers/filter'

function App() {

  const [users, setUsers] = useState([])

  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    setIsOpen(!isOpen)
  }

  console.log(isOpen);

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
    <div id='App' className="App">
      {isLoading ? 
        <>
          <p className='loader'>Loading...</p>
        </> :
        <>
          <UsersForm getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser} setIsLoading={setIsLoading} isOpen={isOpen} open={open}/>
          <UsersList users={users} selectUser={selectUser} getUsers={getUsers} setIsLoading={setIsLoading} open={open}/>
          <Button className='button-modal' onClick={() => {
            open()
            filter()
            deselectUser()
            }}>+</Button>
        </>
      }
    </div>
  )
}

export default App
