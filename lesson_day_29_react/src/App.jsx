import Header from "./components/Header"
import MainContent from "./components/MainContent"
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="container">
        <SideBar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
