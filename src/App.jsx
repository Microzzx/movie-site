import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Discover from "./pages/Discover";
import Payment from "./pages/Payment";
const App = () => {
  return (
    <div className="flex relative">
      <div className="flex flex-col bg-[#050505]">
        <TopBar />
        <div className="flex overflow-y-scroll px-10 mt-8 mb-60">
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
