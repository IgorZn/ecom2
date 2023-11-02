import './App.css';
import './bootstrap.css'
import {Container} from "react-bootstrap";

// My components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className={"py-3"}>
                <Container>
                    <h1>Welocome</h1>
                </Container>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
