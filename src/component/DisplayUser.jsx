

const Display = ({ users ,setUsers}) => {

     const deleteUser = (email) => {
        console.log(email);
        setUsers(users.filter((user) => user.email != email));
    }
    return (
        <>
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


export default Display;