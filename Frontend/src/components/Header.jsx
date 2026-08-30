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
        localStorage.removeItem("demo-token")
        localStorage.removeItem("demo-user")
        setDropdownOpen(false)
        setUser(null)
        navigate("/")
    }


    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <div onClick={toggleMenu}>
                    <MdOutlineMenu className=" scale-150" />
                </div>
                <div className="flex gap-1 items-center border" onClick={handleClick}>
                    <FaYoutube className=" text-red-600" />
                    <p>Youtube</p>
                </div>
            </div>
            <form onSubmit={handleSearch} className="flex items-center gap-2 px-2 border">
                <input type="text" className="border" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                <button type="submit">Search</button>
            </form>
            <nav className=" flex ">
                {user ? (
                    <div className="relative flex items-center gap-3">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1 cursor-pointer">
                            <div className="w-9 h-9 flex items-center justify-center font-bold">
                                {user.username?.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-semibold">
                                {user.username}
                            </span>
                        </button>
                        {dropdownOpen && (
                            <div className="flex flex-col bg-white absolute right-0 top-12 w-56 border py-2 z-50">
                                {user.channelId ? (
                                    <Link to={`/channel/${user.channelId}`} onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-3">
                                        <IoPersonCircleOutline className="text-xl" />
                                        <span>Your Channel</span>
                                    </Link>
                                ) : (
                                    <Link to="/createchannel" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-3">
                                        <IoPersonCircleOutline className="text-xl" />
                                        <span>Create Channel</span>
                                    </Link>
                                )}
                                <button onClick={handleLogout} className="flex justify-center items-center border m-3 py-1">
                                    <IoLogOutOutline className="text-xl" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button onClick={() => navigate("/login")} className="flex items-center gap-1 border px-3 py-1">
                        <IoPersonCircleOutline className="text-xl" />
                        Sign In
                    </button>
                )}
            </nav>
        </div>
    )
}

export default Header