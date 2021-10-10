import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AllService from './components/AllService/AllService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Instructors from './components/Instructors/Instructors';
import InstructorsCourse from './components/InstructorsCourse/InstructorsCourse';
import NotFound from './components/NotFound/NotFound';
function App() {
   return (
      <div className='App'>
         <Router>
            <Header />
            <Switch>
               <Route exact path='/'>
                  <HomePage />
               </Route>
               <Route exact path='/home'>
                  <HomePage />
               </Route>
               <Route exact path='/about'>
                  <About />
               </Route>
               <Route exact path='/services'>
                  <AllService />
               </Route>
               <Route exact path='/instructors'>
                  <Instructors />
               </Route>
               <Route exact path='/instructor/:instructorId'>
                  <InstructorsCourse />
               </Route>
               <Route path='*'>
                  <NotFound />
               </Route>
            </Switch>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
