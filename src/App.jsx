import "./App.css";
import NavBar from "./components/navbar/NavBar.component";
import LoginPage from "./pages/login/Login.page";

function App() {
  return (
    <div className="container">
      <NavBar />
      <LoginPage />
    </div>
  );
}

export default App;
