import Navbar from "./components/Navbar";
import Images from "./components/Images";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
    return(
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Images></Images>
            <Aboutus></Aboutus>
            <Footer></Footer>
        </div>
    )

}

export default App