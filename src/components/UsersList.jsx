import axios from "axios";
import filter from "../helpers/filter";

const UsersList = ({ users, selectUser, getUsers, setIsLoading, open }) => {

    const deleteUser = (id) => {
        axios.delete(`http://144.126.218.162:9000/users/${id}/`)
            .then(() => getUsers())
        setIsLoading(true)
    }


    return (
        <ul className="ul-container">
            {
                users.map(user => (
                    <li id='list' className="li-container" key={user.id}>
                        <h1 className="list-title" >{user.first_name} {user.last_name}</h1>
                        <p>{user.email}</p>
                        <b><i className="fa-solid fa-cake-candles"></i>{user.birthday}</b>
                        <div className="buttons">
                            <button className="button" onClick={() => { selectUser(user), open(), filter()}}>Edit</button>
                            <button className="button clear" onClick={() => deleteUser(user.id)}>Delete</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;