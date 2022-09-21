import {Link, useMatch, useResolvedPath} from 'react-router-dom';

export default function Navbar(){
    return (<nav className="nav">
        <a href="/" className="site-title">KYC Search</a>
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