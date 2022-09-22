import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "reactstrap";

const UsersForm = ({ getUsers, userSelected, deselectUser, setIsLoading, isOpen, open }) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (userSelected) {
            reset(userSelected)
        }
    }, [userSelected])

    const submit = (data) => {
        if (userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${data.id}/`, data)
                .then(() => getUsers())

        } else {
            axios.post(`https://users-crud1.herokuapp.com/users/`, data)
                .then(() => getUsers())
                .catch(error => console.log(error.response));
        }
        clear()
        setIsLoading(true)
        open()
    }

    const clear = () => {
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        })

        deselectUser()
        
    }

    return (
        <Modal isOpen={isOpen}>
            <form className="form-container" onSubmit={handleSubmit(submit)}>
                <h1 className="form-title" >New User</h1>
                <div className="input-container">
                    <label htmlFor="first_name"><i className="fa-solid fa-user"></i></label>
                    <input type="text" id="first_name" placeholder="first name"  {...register("first_name")} />
                    <label htmlFor="last_name"></label>
                    <input className="input-last_name" type="text" id="last_name" placeholder="last name"  {...register("last_name")} />
                </div>
                <div className="input-container">
                    <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
                    <input type="text" id="email" placeholder="email"  {...register("email")} />
                </div>
                <div className="input-container">
                    <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                    <input type="password" id="password" placeholder="password"  {...register("password")} />
                </div>
                <div className="input-container">
                    <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
                    <input type="date" id="birthday"  {...register("birthday")} />
                </div>
                <div className="buttons">
                    <button className="button">{userSelected ? 'Update' : 'Submit'}</button>
                    <button className="button clear" type="Button" onClick={clear}>Clear</button>
                    <button className="quit" type="button" onClick={open} >x</button>
                </div>
            </form>
        </Modal>
    );
};

export default UsersForm;