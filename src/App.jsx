import React, { Component } from 'react';

import { Route, Routes,Navigate} from 'react-router-dom'
import Nav from './Components/Nav'
import Landing from './Pages/Landing';
import Products from './Pages/Products';
import ContactUs from './Pages/ContactUs';
import NotFound from './Pages/NotFound';
import Details from './Pages/Details';
import SignUp from './Pages/SignUp';





class App extends Component {
  constructor(){
    super();
    
  }
  render() {
    return (
      <div>
        <Nav />
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/login' element={<SignUp />} />
              <Route path='/products' element={<Products />}/>
              <Route path='/products/:id' element={<Details />}/>
              <Route path='/contactus' element={<ContactUs />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<Navigate to='/notfound' />} />
           </Routes>
      </div>
    );
  }
}

export default App;
