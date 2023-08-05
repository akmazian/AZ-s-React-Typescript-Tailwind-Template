const NavBar = () => {
    return (
        <nav className='fixed w-[100vw] flex justify-between'>
            <div id='logo-container'></div>
            <ul id='nav-options-container flex flex-row gap-10'></ul>
        </nav>
    )
}

export default NavBar
