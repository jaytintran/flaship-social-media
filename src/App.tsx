import { Home } from './_root/pages'
import { SignInForm, SignUpForm } from './_auth/forms';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

import './index.css'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* Public Routes */}
            <Route element={<AuthLayout />}>
                <Route path='/sign-in' element={<SignInForm />}/>
                <Route path='/sign-up' element={<SignUpForm />}/>
            </Route>

            {/* Private Route */}
            <Route element={<RootLayout />}>
                <Route index element={<Home />}/>
            </Route>
        </Routes>
    </main>
    )
}

export default App