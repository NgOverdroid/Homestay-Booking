import { lazy, Suspense } from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      {/* <Route path='/' element={ <RootLayout/> }>
          <Route index element={ <Home/> }/>
          <Route path='search' element={ <Search/> }/>
          <Route path='room' element={ <ContactLayout/> }>
              <Route path='info' element={ <ContactInfo/>}/>
              <Route path='form' element={ <ContactForm/> }/>
          </Route>
          <Route path='receipts' element={ <Products/> }></Route>
          <Route path='room' element={ <JobsLayout/> }>
              <Route path=':id' element={ <JobsDetails/>} errorElement={ <Error/> }/>
          </Route>
          <Route path='*' element={ <NotFound/> }/>
      </Route>
      <Route path='/account' element={}/>
      */}
      <Route path='/signin' element={ <SignIn/> }/>
      <Route path='/signup' element={ <SignUp/> }></Route>
      </>
    )
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
