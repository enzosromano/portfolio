import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
//import { routes } from "../routes";

import "./NavbarMobile.css";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="navbar">
        <div ref={ref} className="hidden">
        <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
        {isOpen && (
            <div className="displayed">
                <ul className="menu">
                    <ul>
                        <ActivePage to="/blog">BLOG</ActivePage>
                        <ActivePage to="/about">ABOUT</ActivePage>
                        <ActivePage to="/projects">PROJECTS</ActivePage>
                    </ul>
                </ul>
            </div>
        )}
        </div>
    </div>
  );
};

type Props = {
    to: string;
    children: React.ReactNode;
};

//Active page's intention is to set the active state to the selected link on the navbar
function ActivePage({ to, children, ...props }: Props) { // props ("properties") - stored as an object
    const resolvedPath = useResolvedPath(to) // https://reactrouter.com/en/main/utils/resolve-path - resolves a given "To" value into an actual "Path" object
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}