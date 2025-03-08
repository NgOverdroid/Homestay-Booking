import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home.jsx'));
const Search = lazy(() => import('./pages/Search.jsx'));
const SignUp = lazy(() => import('./pages/SignUp.jsx'));
const SignIn = lazy(() => import('./pages/SignIn.jsx'));
const Test = lazy(() => import('./pages/Test.jsx'));
import { logIn, logOut } from './features/authSlice.js';

export default function App() {
  const dispatch = useDispatch();

  async function fetchAccessToken() {
    try {
      const response = await fetch('http://127.0.0.1:3000/auth_checkpoint', {
        method: 'GET',
        credentials: 'include', // Important to send HTTP-only cookies
      });
  
      if (response.ok) {
        const data = await response.json();
        dispatch(logIn(data.accessToken));
        return {
            is_loading: false,
            access_token: data.accessToken,
        };
      } 
      else {
        dispatch(logOut());
        return {
            is_loading: false,
            access_token: null,
        }; 
      }
    } catch (error) {
      dispatch(logOut());
      return {
        is_loading: false,
        access_token: null
      }; 
    }
  };

  const query = useQuery({
    queryKey: ['jwtToken'],
    queryFn: fetchAccessToken,
    retry: false
  }); 

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
      <Route 
        path='/test' 
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
              <Test />
          </Suspense>} />

      <Route 
        path='/signin' 
        element={ 
          <Suspense fallback={<h1>Loading...</h1>}>
            <SignIn/>
          </Suspense>}/>

      <Route 
        path='/signup' 
        element={ 
        <Suspense fallback={<h1>Loading...</h1>}>
          <SignUp/>
        </Suspense> }/>
      </>
    )
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
