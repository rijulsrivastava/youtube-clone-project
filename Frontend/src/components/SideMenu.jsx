import { TiHome } from "react-icons/ti"
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si"
import { MdSubscriptions, MdHistory, MdWatchLater, MdOutlineNewspaper } from "react-icons/md"
import { BiSolidLike } from "react-icons/bi"
import { IoMdTrendingUp, IoIosMusicalNotes } from "react-icons/io"
import { Link } from 'react-router'

function SideMenu() {
    return (
        <aside className="absolute left-0 top-0 z-10 flex flex-col gap-2 w-52 border bg-white border-gray-200 rounded-xl shadow-lg p-2 sm:relative sm:left-auto sm:top-auto sm:w-48 sm:shrink-0 sm:border-0 sm:border-r sm:rounded-none sm:shadow-none sm:p-0">
            <Link to={'/'} className="flex gap-3 p-2 rounded-lg items-center text-sm md:text-base hover:bg-gray-200 transition cursor-pointer">
                <TiHome />
                <span>Home</span>
            </Link>
            <div className="flex gap-3 p-2 rounded-lg items-center text-sm md:text-base hover:bg-gray-200 transition cursor-pointer">
                <SiYoutubeshorts />
                <span>Shorts</span>
            </div>
            <div className="flex gap-3 p-2 rounded-lg items-center text-sm md:text-base hover:bg-gray-200 transition cursor-pointer">
                <MdSubscriptions />
                <span>Subscriptions</span>
            </div>
            <hr className="my-2 border-gray-200" />
            <h4 className="ml-2 p-2 text-sm font-bold">You</h4>
            <div className="flex gap-3 p-2 rounded-lg items-center text-sm md:text-base hover:bg-gray-200 transition cursor-pointer">
                <MdHistory />
                <span>History</span>
            </div>
            <div className="flex gap-3 p-2 rounded-lg items-center text-sm md:text-base hover:bg-gray-200 transition cursor-pointer">
                <MdWatchLater />
                <span>Watch Later</span>
            </div>
            <div className="flex gap-3 p-2 rounded-lg items-center text-sm md:text-base hover:bg-gray-200 transition cursor-pointer">
                <BiSolidLike />
                <span>Liked Videos</span>
            </div>
            <hr className="my-2 border-gray-200" />
            <h4 className="ml-2 p-2 text-sm font-bold">Explore</h4>
            <div className="flex gap-3 p-2 rounded-lg items-center text-sm md:text-base hover:bg-gray-200 transition cursor-pointer">
                <IoMdTrendingUp />
                <span>Trending</span>
            </div>
            <div className="flex gap-3 p-2 rounded-lg items-center text-sm md:text-base hover:bg-gray-200 transition cursor-pointer">
                <IoIosMusicalNotes />
                <span>Music</span>
            </div>
            <div className="flex gap-3 p-2 rounded-lg items-center text-sm md:text-base hover:bg-gray-200 transition cursor-pointer">
                <SiYoutubegaming />
                <span>Gaming</span>
            </div>
            <div className="flex gap-3 p-2 rounded-lg items-center text-sm md:text-base hover:bg-gray-200 transition cursor-pointer">
                <MdOutlineNewspaper />
                <span>News</span>
            </div>
        </aside>
    )
}

export default SideMenu