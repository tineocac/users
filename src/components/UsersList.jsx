import axios from "axios";

const UsersList = ({ users, selectUser, getUsers, setIsLoading }) => {

    const deleteUser = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => getUsers())
        setIsLoading(true)
    }

    return (
        <ul className="ul-container">
            {
                users.map(user => (
                    <li className="li-container" key={user.id}>
                        <h2>{user.first_name} {user.last_name}</h2>
                        <small>{user.email}</small>
                        <b><i className="fa-solid fa-cake-candles"></i>{user.birthday}</b>
                        <div className="buttons-list">
                            <button onClick={() => selectUser(user)}>Edit</button>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;