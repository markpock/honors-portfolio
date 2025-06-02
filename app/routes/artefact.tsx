import { NavLink, Outlet } from "react-router"

export default function Artefact() {
  return <>
    <div className="flex min-w-screen min-h-full flex-col items-center">
      
      <div className="items-center min-h-full max-w-3xl">
        <div className="h-100 w-full relative">
          <img className="absolute left-0 top-0 rounded-xl w-full h-full" src="../gavel.png" alt="A gavel."></img>
          <div className="absolute left-0 top-0 z-1 rounded-xl
          bg-gradient-to-b from-black/70 to-amber-50/10 h-100 w-full">
          <div className="absolute left-0 bottom-0 p-10">
            <p>Winter 2023 &mdash; Spring 2023. Committee member</p>
            <p>Summer 2023 &mdash; Spring 2024. Chair</p>
            <b className="font-serif text-3xl">STF Committee</b>
          </div>
          </div>
        </div>
      
        <div className="h-full w-full p-5 pb-15">
          <div className="h-full w-full p-5 bg-black/40 rounded-xl">
            {/* <div className="font-serif text-xl">
              Hello World
            </div> */}
            <Outlet/>
          </div>
        
        </div>
        
          
      </div>
    </div>
    
    
  </>
}
