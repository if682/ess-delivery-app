import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidemenu from "./components/molecules/sidemenu/Sidemenu";
import UrlRoutes from "./routes";

function App() {
  return (
    <>
      <Sidemenu />
      <UrlRoutes />
    </>
  );
}

export default App;
