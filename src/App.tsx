import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/home'
import DriverWaiting from './components/driver-waiting'
import PickDriver from './components/pick-driver'
import FoodComponent from './components/food'
import MenuComponent from './components/menu'
import Socket from './contexts/socket'

function App() {
  return (
    <Socket>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/driver/waiting" element={<DriverWaiting />} />
        <Route path="/pick-driver" element={<PickDriver />} />
        <Route path="/food" element={<FoodComponent />} />
        <Route path="/food/menu" element={<MenuComponent />} />
      </Routes>
    </Socket>
  )
}

export default App
