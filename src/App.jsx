import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Discover from "./pages/Discover";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import Info from "./pages/Info";

const App = () => {
  return (
    <div className="flex overflow-clip relative">
      <div className="flex flex-col w-full bg-[#050505]">
        <TopBar />
        <div className="flex flex-1 justify-center content-center overflow-y-scroll px-10 mt-8 mb-12">
          <div className="flex w-full h-[90vh]">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              <Route path="/info/:movieId" element={<Info />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
