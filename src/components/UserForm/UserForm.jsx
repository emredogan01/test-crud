import React, { useState } from 'react'

const UserForm = ({ addUser }) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
    })


    // obje olrak tuttuğumuz state!i dinamik fonksiyon ile değiştirme 
    const changeState = (key, e) => {
        setUser({ ...user, [key]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(user)
        setUser({
            name: "",
            email: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Kullancı İsmi Girin:</label>
                <input type="text" id='name' className='form-control my-2' onChange={(e) => changeState("name", e)} value={user.name} />
            </div>
            <div>
                <label htmlFor="mail">Kullancı Mail Girin:</label>
                <input type="email" id='mail' className='form-control my-2' onChange={(e) => changeState("email", e)} value={user.email} />
            </div>
            <button className='btn btn-primary'>Kullanıcı Ekle</button>
        </form>
    )
}

export default UserForm;