import { Link } from "react-router-dom"

export default function Navbar() {

    const path = window.location.pathname

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

function ActivePage({ to, children, ...props }) {

    const path = window.location.pathname

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}