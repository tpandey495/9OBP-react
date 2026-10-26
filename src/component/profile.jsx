
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

function Profile({isLogedin}){
    return(
        <>
         {
         isLogedin &&
         <h1>Hello Welcome</h1>
         }
        </>
    )
}



export default Profile;