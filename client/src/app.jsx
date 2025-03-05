import { lazy, Suspense, useState } from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Search from './pages/search.jsx';
import Error from './components/Error.jsx';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <RootLayout/> }>
          <Route index element={ <Home/> }/>
          <Route path='search' element={ <About/> }/>
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
