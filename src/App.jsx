import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Profile from "./component/profile";

function App() {

    return (
        <>
            <Navbar />
            <Footer />
            <Profile isLogedin={true}/>
        </>
    )
}

export default App;