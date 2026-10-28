
import { useState } from 'react';
// users crud operation 

const Crud = () => {
    const [user, setUser] = useState({
        firstName: "",
        email: "",
        age: ""
    });

    const [users, setUsers] = useState([]);

    const [edit, setEdit] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        //    user push users array 
        e.preventDefault();
        if (edit != null) {
            // edit current user 
            let newUsers = users.map((person) => {
                if (person.email == edit) {
                    return user;
                } else {
                    return person;
                }
            })

            setUsers(newUsers);
        }
        else {
            // insert new user logic
            setUsers([...users, user]);
            setUser({
                firstName: "",
                email: "",
                age: ""
            })
        }

    }

    const deleteUser = (email) => {
        console.log(email);
        setUsers(users.filter((user) => user.email != email));
    }

    const handleEdit = (user) => {
        console.log(user);
        setUser({
            ...user,
            firstName: user.firstName,
            email: user.email,
            age: user.age
        })

        setEdit(user.email);


    }


    return (

        <>
            <form>
                <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    placeholder="Enter your Name"
                    onChange={handleChange}
                />

                <br />

                <input
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                />

                <br />

                <input
                    type="number"
                    name="age"
                    value={user.age}
                    placeholder="Enter your =age"
                    onChange={handleChange}
                />
                <br />

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

            {
                users.map((user, index) =>
                    <div key={index} style={{ display: "flex", gap: "20px" }}>
                        <p>{user.firstName}</p>
                        <p>{user.email}</p>
                        <p>{user.age}</p>
                        <button onClick={() => handleEdit(user)}>
                            Edit
                        </button>
                        <button style={{ height: "40px" }}
                            onClick={() =>
                                deleteUser(user.email)
                            }
                        >
                            Delete
                        </button>
                    </div>
                )
            }

        </>


    )

}

export default Crud;