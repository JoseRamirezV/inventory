import Dashboard from '@/pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router';
import Inventory from './components/Inventory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            <Route index path='dashboard' element={<Inventory/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
