import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext";

const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
);

const Navbar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const { openSignIn } = useClerk()
    const { user, setShowHotelReg, isOwner, navigate } = useAppContext()

    useEffect(() => {
        if (location.pathname !== "/") {
            setIsScrolled(true);
            return;
        } else {
            setIsScrolled(false);
        }

        setIsScrolled(prev => location.pathname !== "/" ? true : prev);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>
            <Link to="/">
                <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
            </Link>

            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((navLink, index) => (
                    <NavLink key={index} to={navLink.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`} onClick={() => scrollTo(0, 0)}>
                        {navLink.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} ></div>
                    </NavLink>
                ))}
                {
                    user && (
                        <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`} onClick={() => isOwner ? navigate('/owner') : setShowHotelReg(true)}>
                            {isOwner ? 'Dashboard' : 'List Your Hotel'}
                        </button>
                    )
                }
            </div>

            <div className="hidden md:flex items-center gap-4">
                <img src={assets.searchIcon} alt="search" className={`${isScrolled && "invert"} h-7 transition-all duration-500`} />
                {user ? (
                    <UserButton >
                        <UserButton.MenuItems>
                            <UserButton.Action label="My Bookings" labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                        </UserButton.MenuItems>
                    </UserButton>
                ) : (
                    <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer">
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center gap-3 md:hidden">
                <UserButton />
                <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt="" className={`${isScrolled && "invert"} h-4`} />
            </div>

            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)} >
                    <img src={assets.closeMenu} alt="close-menu" className="h-6.5" />
                </button>

                {navLinks.map((navLink) => (
                    <NavLink key={navLink.name} to={navLink.path} onClick={() => setIsMenuOpen(false)}>
                        {navLink.name}
                    </NavLink>
                ))}

                {user && (
                    <>
                        <NavLink to="/my-bookings" onClick={() => setIsMenuOpen(false)}>
                            My Bookings
                        </NavLink>
                        <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all" onClick={() => isOwner ? navigate('/owner') : setShowHotelReg(true)}>
                            {isOwner ? 'Dashboard' : 'List Your Hotel'}
                        </button>
                    </>
                )}

                {!user && (
                    <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500" >
                        Login
                    </button>
                )}
            </div>

        </nav>
    );
};

export default Navbar;