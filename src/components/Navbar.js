import {Link, useMatch, useResolvedPath} from 'react-router-dom';

export default function Navbar(){
    return (<nav className="nav">
        <Link href="/" className="site-title">PEP Search</Link>
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/search">Search</CustomLink>
        </ul>
    </nav>
    );
}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>

        </li>
    )
}