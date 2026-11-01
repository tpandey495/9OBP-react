const Assignment = ({ assignments, setAssignments }) => {

    const handleChange = (checked,id) => {
         setAssignments(assignments.map((assignment)=>{
            if(assignment.id==id){
                return {...assignment,status:checked==true?"Completed":"pending"}
            }else{
                return assignment;
            }
         })
        )
    }

    return (
        <>
            {
                assignments.map((assignment, index) => {
                    return <div key={index}>
                        <h1>{assignment.name}</h1>
                        <input type="checkbox"
                            checked={assignment.status == "pending" ? false : true}
                            onChange={(e) => {
                                handleChange(e.target.checked,assignment.id)
                            }
                            }
                        />
                    </div>
                })
            }

        </>
    )
}

export default Assignment;