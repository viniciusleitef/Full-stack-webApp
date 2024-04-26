import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { PrivateRoute } from './Routes/PrivateRoute';
import {AuthProvider } from './context/AuthContext';

function App() {
  return (

    <div className='App'>
      <AuthProvider>
        <Router>
          <Routes>
            <Route 
              path='/home' 
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }/>
            <Route path = '/' element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }/>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='*' element={<h1>Page not Found</h1>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>

  );
}

export default App;
