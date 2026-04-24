import Footer from "./footer/Footer";
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
    
         <Header/>
         <NavBar/>
    

      <main>
        <Outlet />
      </main>

         <footer>
       <Footer/>
      </footer>
    </div>
  );
}