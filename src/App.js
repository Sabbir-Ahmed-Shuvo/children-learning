import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import About from './component/About/About';
import Detials from './component/Detials/Detials';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/detials">
           <Detials></Detials>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
