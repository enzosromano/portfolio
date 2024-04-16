import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Site Name</Link>
            <ul>
                <ActivePage to="/links">Links</ActivePage>
                <ActivePage to="/projects">Projects</ActivePage>
            </ul>
        </nav>
    )
}

//Active pages intention is to set the active state to the selected link on the navbar

function ActivePage({ to, children, ...props }) { // props ("properties") - stored as an object
    const resolvedPath = useResolvedPath(to) // https://reactrouter.com/en/main/utils/resolve-path - resolves a given "To" value into an actual "Path" object
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}