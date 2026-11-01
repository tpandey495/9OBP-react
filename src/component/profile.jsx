
// isLoggedin is paassed form the parent compoenent 

// create a component profile show the message Hello welcome back if islogedin true 
// otherwise Plz login

// approach 1
// function Profile({isLogedin}){
//     if(isLogedin)
//        return <h1>Hello Welcome</h1>
//     else 
//         return <button>Plz Login</button>
// }


// approach 2 
// function Profile({isLogedin}){
//     return(
//         <>
//          {
//          isLogedin?
//          <h1>Hello Welcome</h1>:
//          <button>Plz logein</button>
//          }
//         </>
//     )
// }

// 


function PrintName() {
    {console.log("breakpoint5")}
    return (
        <>
            {console.log("breakpoint6")}
            <h2>Child component</h2>
        </>
    )
}

function Profile() {
    { console.log("breakpoint1") }

    return (
        <>
            {console.log("breakpoint2")}
            <PrintName />
            <h1>Hello Welcome</h1>
            {console.log("breakpoint4")}

        </>
    )
}



export default Profile;