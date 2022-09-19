import axios from "axios";

const UsersList = ({users, selectUser, getUsers, setIsLoading}) => {

    const deleteUser = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then( () => getUsers())
        setIsLoading(true)
    }

    return (
        <ul>
            {
                users.map( user => (
                    <li key={user.id}>
                        <h2>{user.first_name} {user.last_name}</h2>
                        <small>{user.email}</small>
                        <b><i className="fa-solid fa-cake-candles"></i>{user.birthday}</b>
                        <button onClick={() => selectUser(user)}>Edit</button>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;