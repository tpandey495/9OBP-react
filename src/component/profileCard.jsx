// a person details is given name is rahul age:20 city:"pune" and create a button  
// changeAddrees on click it change the city to mumbai 
import {useState} from "react";

function ProfileCard(){
    const [profile,setProfile]=useState({
        name:"Rahul",
        age:20,
        city:"Pune"
    });

    return (
        <div>
            <h1>{profile.name}</h1>
            <p>{profile.age}</p>
            <p>{profile.city}</p>

            <button onClick={()=>
                setProfile({...profile,city:"Mumbai"})
            }>Change City</button>
        </div>
    )
}


export default ProfileCard;