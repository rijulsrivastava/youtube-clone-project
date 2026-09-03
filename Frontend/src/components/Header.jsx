import { MdOutlineMenu } from "react-icons/md"
import { FaYoutube } from "react-icons/fa"
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router"
import { IoPersonCircleOutline, IoLogOutOutline } from "react-icons/io5";

function Header({ toggleMenu, user, setUser, setSearch }) {

    const navigate = useNavigate()
    const [searchText, setSearchText] = useState("")
    const [dropdownOpen, setDropdownOpen] = useState(false)

    function handleSearch(e) {
        e.preventDefault()
        setSearch(searchText.trim())
    }
    useEffect(() => {
        if (searchText.trim() == "") {
            setSearch("")
        }
    }, [searchText])

    function handleClick() {
        setSearchText("")
        navigate("/")
    }

    function handleLogout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setDropdownOpen(false)
        setUser(null)
        navigate("/")
    }


    return (
        <div className="bg-white border-b border-gray-300 sticky top-0 p-3 z-20 md:px-6">
            <div className="flex justify-between gap-4 items-center">
                <div className="flex items-center gap-3 shrink-0">
                    <div onClick={toggleMenu} className="hover:bg-gray-300 transition cursor-pointer">
                        <MdOutlineMenu className="text-gray-700 scale-150" />
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer" onClick={handleClick}>
                        <FaYoutube className="text-2xl md:text-3xl text-red-600" />
                        <p className="text-lg md:text-xl font-bold">Youtube</p>
                    </div>
                </div>
                <form onSubmit={handleSearch} className="hidden sm:flex w-[350px] md:w-[400px] lg:w-[450px] items-center gap-2 px-2">
                    <div className="flex w-full h-8 overflow-hidden border border-gray-300 rounded-full focus-within:border-gray-400">
                        <input type="text" className="flex-1 min-w-10 px-4 text-sm outline-none placeholder:text-gray-500" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                        <button type="submit" className="px-5 bg-gray-100 border-l border-gray-300 text-sm font-medium hover:bg-gray-200 transition">Search</button>
                    </div>
                </form>
                <nav className=" shrink-0">
                    {user ? (
                        <div className="relative flex items-center gap-3">
                            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1 border border-gray-300 p-0 sm:pr-3 hover:bg-gray-200 transition cursor-pointer rounded-full">
                                <div className="w-9 h-9 flex rounded-full text-xl md:bg-gray-300 items-center justify-center font-bold">
                                    {user.username?.charAt(0).toUpperCase()}
                                </div>
                                <span className="font-semibold hidden md:block">
                                    {user.username}
                                </span>
                            </button>
                            {dropdownOpen && (
                                <div className="flex flex-col bg-white absolute right-0 top-12 w-56 border py-2 z-10 rounded-xl shadow-lg overflow-hidden">
                                    {user.channelId ? (
                                        <Link to={`/channel/${user.channelId}`} onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition">
                                            <IoPersonCircleOutline className="text-xl" />
                                            <span className=" font-semibold">Your Channel</span>
                                        </Link>
                                    ) : (
                                        <Link to="/createchannel" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition">
                                            <IoPersonCircleOutline className="text-xl" />
                                            <span className="font-semibold">Create Channel</span>
                                        </Link>
                                    )}
                                    <div className="flex justify-center items-center w-full border-t border-gray-200">
                                        <button onClick={handleLogout} className="flex w-full gap-1 justify-center items-center border rounded-full m-3 mb-1 p-1">
                                            <IoLogOutOutline className="text-xl" />
                                            <span className="font-semibold">Logout</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button onClick={() => navigate("/login")} className="flex items-center gap-1 border px-3 py-1 rounded-full hover:bg-blue-50 transition">
                            <IoPersonCircleOutline className="text-xl" />
                            Sign In
                        </button>
                    )}
                </nav>
            </div>
            <form onSubmit={handleSearch} className="flex sm:hidden mt-3">
                <div className="flex w-full h-10 overflow-hidden border border-gray-300 rounded-full">
                    <input type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="flex-1 min-w-0 px-4 text-sm outline-none" />
                    <button
                        type="submit"
                        className="px-4 bg-gray-100 border-l border-gray-300 text-sm font-medium hover:bg-gray-200"
                    >
                        Search
                    </button>

                </div>

            </form>

        </div>
    )
}

export default Header