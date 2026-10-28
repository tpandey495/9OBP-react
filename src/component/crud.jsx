// create a form with name and email 
// show the name and email submiited by user 
// and implement update and delete



import { useState } from 'react';
import "./style.css";

function CRUD() {
    const [profile, setProfile] = useState({
        firstName: " ",
        email: " ",
        age: " "
    })



    const [persons, setPersons] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPersons([...persons, profile]);
        setProfile({
            firstName: " ",
            email: " ",
            age: " "
        });
    }

    return (
        <div className="form">
            <form>
                <input type="text"
                    name="firstName"
                    value={profile.name}
                    placeholder="Enter your first name"
                    onChange={handleChange}
                /> <br />


                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={profile.email}
                    onChange={handleChange}
                /> <br />

                <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    value={profile.age}
                    onChange={handleChange}
                /> <br />

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

            {
                persons.map((person, index) => {
                    return <div key={index}>
                        <p>{person.name}</p>
                        <p>{person.email}</p>
                        <p>{person.age}</p>
                    </div>
                })

            }

        </div>
    )
}


export default CRUD;