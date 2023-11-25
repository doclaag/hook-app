import { Routes, Route } from 'react-router-dom';
import { AboutPage, ErrorPage, HomePage, LoginPage, Navbar } from './';
import { UserProvider } from './context';

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>Main App</h1>
            <hr />

            <Navbar />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
        </UserProvider>
    );
};
