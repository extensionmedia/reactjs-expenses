import TopBar from "./components/topbar/TopBar";
import BottomBar from "./components/topbar/BottomBar";
function App() {
  return (
    <div className="bg-gray-50 h-screen w-full">
        <div className="flex flex-col h-screen">
          <div className=""><TopBar /></div>
          <div className="flex-1">2</div>
          <div className="">
            <BottomBar />
          </div>
        </div>
        

    </div>

  );
}

export default App;
