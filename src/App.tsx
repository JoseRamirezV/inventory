import Dashboard from '@/pages/Dashboard';
import { HashRouter, Route, Routes } from 'react-router';
import Inventory from './components/Inventory';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            <Route index element={<Inventory/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
