import { NavLink, useLocation } from "react-router"

const link = (path : string, title : string, ) => <NavLink to={path} className="flex flex-col items-center">
  {title}
  <span className={
    useLocation().pathname === path ?
    'bg-amber-50 w-10 h-0.5' :
    'hidden'
  }/>
</NavLink>

export default function () {
  return <>
    <div className="
      sticky top-0 left-0 w-screen
      bg-black/70 backdrop-blur-sm py-2 shadow-lg
      z-10
    ">
      <div className="
        flex flex-row justify-between items-center
        text-white font-serif
        px-6
      ">
        <NavLink to="/">Portfolio</NavLink>

        <div className=" flex flex-row-reverse justify-between w-70 "> 
          {link('/', 'Home')}
          {link('/artefacts', 'Artefacts')}
          {link('/learning-statement', 'Learning Statement')}
        </div>
      </div>
    </div>
  </>
}