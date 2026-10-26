import {useState} from 'react';
 
function Navbar() {
    const [isVisible,setIsVisible] = useState(true);
    return (
        <>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>
            {isVisible && <p>Hello, students!</p>}
        </>
    )
}

export default Navbar;

// Footer 
// Conditional rendering 
// UseState
// Basic Rendering 
// Rendering,Reconcilliation , Commit phase and Virtual DOM


// virtual documentation