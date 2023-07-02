import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="shadow-md h-16 lg:px-10 md:px-5 px-3 bg-slate-50 flex justify-between items-center">
      <h6 className="font-bold text-rose-300">
        WorkOut!
      </h6>
      <div className="flex justify-center items-center lg:gap-10 md:gap-5 gap-2 text-xs hover:font-bold transition-all">
        <Link to={`/`}>
          Home
        </Link>
      </div>


    </nav>
  )
}

export default Navbar