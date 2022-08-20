import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from "./components/NavBar"
import Contact from "./pages/Contact"
import Projects from './pages/Projects'
import Home from './pages/Home'
import Skills from './pages/Skills'
import SkillDetails from './pages/SkillDetails'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='container mt-5'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/skills/:id' component={SkillDetails} />
          <Route path='/skills' component={Skills} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
