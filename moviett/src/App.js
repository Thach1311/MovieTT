import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import { MovieProvider } from './components/Middle/MovieProvider';
function App() {
    return (
        <BrowserRouter>
            <MovieProvider>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/movie" element={<Movie />}></Route>
                </Routes>
            </MovieProvider>
        </BrowserRouter>
    );
}

export default App;
