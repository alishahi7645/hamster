import Profilebar from "./components/Profilebar/Profilebar"

function App() {
  return (
    <div className="xl:w-[30%] lg:w-[50%] md:w-[70%] text-gray-200 text-4xl w-full h-screen
          bg-gradient-to-t from-[#00446d] to-[#00446d] flex flex-col justify-between my-0 mx-auto px-5 pt-3
    ">
      <Profilebar/>
    </div>
  )
}

export default App
