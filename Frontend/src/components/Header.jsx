import { MdOutlineMenu } from "react-icons/md"
import { FaYoutube } from "react-icons/fa"
import { useState } from "react";


function Header({ toggleMenu }) {
    function handleSearch(e) {
        e.preventDefault();
        console.log(searchText.trim())
        setSearchText("")
    }

    const [searchText, setSearchText] = useState("")

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <div onClick={toggleMenu}>
                    <MdOutlineMenu className=" scale-150" />
                </div>
                <div className="flex gap-1 items-center">
                    <FaYoutube className=" text-red-600" />
                    <p>Youtube</p>
                </div>
            </div>
            <div className="flex items-center gap-2 px-2 border">
                <input type="text" className="border" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <nav className=" flex ">

                <p>Sign In</p>
            </nav>
        </div>
    )
}

export default Header