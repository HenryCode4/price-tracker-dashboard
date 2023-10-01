import DashBoard from "./components/DashBoard"
import NavigationBar from "./components/NavigationBar"


function App() {
  

  return (
    <>
      <div className="w-full flex bg-gray-100">
      {/* Navigation Bar */}
      <NavigationBar />


      {/* main components */}
      <main className="w-full border border-gray-200 rounded-md m-4">
        <DashBoard />
      </main>
      </div>
    </>
  )
}

export default App
