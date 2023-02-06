import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/navbar';
import { Loading } from './components/Loading';

import { queryClientConfig } from './util/constant';
import { Toaster } from 'react-hot-toast';
import { Home, Login, Signup } from './views';
const queryClient = new QueryClient(queryClientConfig)

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />

              {/* wild card route */}
              <Route path='*' element={<h2 className='text-center p-20 uppercase'>not found</h2>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster toastOptions={{
        duration: 2000
      }} />
    </>
  );
}

export default App;
