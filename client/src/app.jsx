import { lazy, Suspense, useState } from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import ContactLayout from './layout/ContactLayout.jsx';
import RootLayout from './layout/RootLayout.jsx'
import ContactForm from './components/ContactForm.jsx';
import ContactInfo from './components/ContactInfo.jsx';
import NotFound from './components/NotFound.jsx';
import JobsLayout from './layout/JobsLayout.jsx';
import Jobs, { jobsLoader } from './pages/Jobs.jsx';
import JobsDetails, { jobsDetailsLoader } from './components/JobsDetails.jsx';
import Error from './components/Error.jsx';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <RootLayout/> }>
          <Route index element={ <Home/> }/>
          <Route path='about' element={ <About/> }/>
          <Route path='contact' element={ <ContactLayout/> }>
              <Route path='info' element={ <ContactInfo/>}/>
              <Route path='form' element={ <ContactForm/> }/>
          </Route>
          <Route 
          path='products' 
          element={ <Products/> }></Route>
          <Route path='jobs' element={ <JobsLayout/> }>
              <Route index loader={jobsLoader} element={ <Jobs></Jobs>}/>
              <Route path=':id' loader={jobsDetailsLoader} element={ <JobsDetails/>} errorElement={ <Error/> }/>
          </Route>
          <Route path='*' element={ <NotFound/> }/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
