// a person details is given name is rahul age:20 city:"pune" and create a button  
// changeAddrees on click it change the city to mumbai 
import {useState} from "react";

function ProfileCard(){
    const [profile,setProfile]=useState({
        name:"Rahul",
        age:20,
        city:"Pune",
        address:{
            pincode:401413
        }
    });

    const [skills,setSkills]=useState(["React.js","Node.js"]);
    // add new skills mongodb and mongoose 


    function updateSkills(){
        setSkills((prev)=>[...prev,"Mongodb","Mongoose"]);
    }


   
    return (
        <div>
            <h1>{profile.name}</h1>
            <p>{profile.age}</p>
            <p>{profile.city}</p>

            <p>{profile.address.pincode}</p>


            {
                skills.map((skill,index)=>
                    <p key={index}>{skill}</p>
                )
            }

            <button onClick={()=>
                setProfile({...profile,city:"Mumbai"})
            }>Change City</button>


            <button onClick ={()=>{
                setProfile({...profile,address:{...profile.address,pincode:210345}});
            }}>Change Pincode</button>

            <button onClick={updateSkills}>Update Skills</button>
        </div>
    )
}


export default ProfileCard;