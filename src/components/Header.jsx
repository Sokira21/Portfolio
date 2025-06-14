

function Header(){

    return(
            <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm shadow-sm">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center text-white">
                    <div className="text-xl font-bold">My Portfolio</div>
                    <ul className="flex space-x-6 text-sm font-medium">
                    <li><a href="#" className="hover:text-blue-300">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-300">About</a></li>
                    <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
                    </ul>
                </nav>
            </header>
    );


}


export default Header;