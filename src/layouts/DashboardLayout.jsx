import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export const DashboardLayout = ({children, title}) => {
  return (
    <main className="flex ">
      <Sidebar />
      <div className="flex flex-col flex-1 relative">
        <Navbar title={title} />

        <div className="grid md:grid-cols-1 grid-cols-1 w-full">
          <div className="col-span-2">
                {children}
          </div>
        </div>
    </div>
    </main>
  )
}
