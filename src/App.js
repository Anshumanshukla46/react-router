import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

// import About from './components/About';


import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeatureProducts from './components/FeatureProducts';
import NewProduct from './components/NewProduct';
import User from './components/User';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';

// router-authorisation
import { AuthPorvider } from './components/Auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';



// STEP 1 FOR dynamic import
const LazyAbout = React.lazy(() => import("./components/About.js")) // promise is returned converted in module


function App() {
  return (

    // it is fragment <></>

    // authorisation in the whole app
    <AuthPorvider>


      <Navbar />
      <Routes>

        {/* path = shows the address (default by "/" as localhost300 )  and element for the "COMPONENT" */}

        {/* http://localhost:3000/ */}
        <Route path='/' element={<Home />} />

        {/* http://localhost:3000/about */}


        {/* STEP2 FOR LAZY LOADING */}
        <Route
          path='about'
          element={
            // if network is too slow then this fallback text will be loaded
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          } />


        <Route path='orderSummary' element={<OrderSummary />} />



        {/* nested routing */}
        {/* add Outlet component inside the parent product component */}
        <Route path='products' element={<Products />} >

          {/* render this by-default when product is loaded */}
          <Route index element={<FeatureProducts />} />

          <Route path='featured' element={<FeatureProducts />} />

          <Route path='new' element={<NewProduct />} />

        </Route>


        <Route path='user' element={<User />} >

          {/* dynamic routing */}
          {/* :userId => user/1 , user/2 
            but it can be anything like "user/hello" */}

          <Route path=":userId" element={<UserDetails />} />

          {/* first try to find matching routes if not found then use dynamic-routing */}
          <Route path='admin' element={<Admin />} />


        </Route>


        {/* profile : route authentication */}
        <Route
          path='profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>}
        />

        <Route
          path='login'
          element={<Login />}
        />




        {/* when nothing matched use path="*" */}
        <Route path='*' element={<NoMatch />} />


      </Routes>

    </AuthPorvider>

  );
}

export default App;
