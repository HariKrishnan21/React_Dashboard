import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Blank />} />
                    <Route path='/started' element={<Blank />} />
                    <Route path='/calendar' element={<Blank />} />
                    <Route path='/user' element={<Blank />} />
                    <Route path='/payouts' element={<Blank />} />
                    <Route path='/statements' element={<Blank />} />
                    <Route path='/setting' element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
