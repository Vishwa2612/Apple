import "./input.css";
import Navi from './Pages/Navi';
import Main from './Pages/Main';
import Slide from "./Pages/Slide";
import Images from './Pages/Images';
import Footer from "./Pages/Footer";

const App = () =>{
  return(
    <div>
      <Navi/>
      <Main/>
      <Images/>
      <Slide/>
      <Footer/>
    </div>
  )
};

export default App;
