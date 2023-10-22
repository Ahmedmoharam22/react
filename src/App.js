import Footer from "./components/ui/Footer/Footer";
import Spinner from "./components/ui/Spinner/Spinner";
import Navbar from "./components/ui/navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
function App() {
  const { state } = useNavigation();

  return (
    <>
      <Navbar />
      <main style={{ marginBlock: "60px", flexGrow: "1" , position:"relative" }}>
        {state === "loading" && <Spinner />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
