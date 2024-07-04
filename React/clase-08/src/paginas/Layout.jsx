import { Outlet, Link } from "react-router-dom"
import Mayor from "./Mayor"
function Layout({setAuth}) {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="blog">Blog</Link>
                </li>
                <li>
                    <Link to="productos">Productos</Link>
                </li>
                <li>
                    <Mayor setAuth={setAuth}/>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout