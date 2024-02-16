import { useGlobalContext } from "./Context"

function App() {
  const {isSidebaropen, openSidebar} = useGlobalContext();

  console.log(isSidebaropen)
  return (
    <h2>Strapi</h2>
  )
}

export default App
