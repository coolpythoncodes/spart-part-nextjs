
const NavBar = (children) => {
    return (
        <div>
            <div>Logo</div>
            <nav>
                <ul>
                    {children}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
