import { TiHome } from "react-icons/ti"
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si"
import { MdSubscriptions, MdHistory, MdWatchLater, MdOutlineNewspaper } from "react-icons/md"
import { BiSolidLike } from "react-icons/bi"
import { IoMdTrendingUp, IoIosMusicalNotes } from "react-icons/io"
import { Link } from 'react-router'

function SideMenu() {
    return (
        <aside className="flex flex-col gap-2 mt-5 w-[15%]">
            <Link to={'/'} className=" flex gap-2 ml-2 items-center">
                <TiHome />
                <span>Home</span>
            </Link>
            <div className=" flex gap-2 ml-2 items-center">
                <SiYoutubeshorts />
                <span>Shorts</span>
            </div>
            <div className=" flex gap-2 ml-2 items-center">
                <MdSubscriptions />
                <span>Subscriptions</span>
            </div>
            <hr />
            <h4 className="ml-2">You</h4>
            <div className=" flex gap-2 ml-2 items-center">
                <MdHistory />
                <span>History</span>
            </div>
            <div className=" flex gap-2 ml-2 items-center">
                <MdWatchLater />
                <span>Watch Later</span>
            </div>
            <div className=" flex gap-2 ml-2 items-center">
                <BiSolidLike />
                <span>Liked Videos</span>
            </div>
            <hr />
            <h4 className="ml-2">Explore</h4>
            <div className=" flex gap-2 ml-2 items-center">
                <IoMdTrendingUp />
                <span>Trending</span>
            </div>
            <div className=" flex gap-2 ml-2 items-center">
                <IoIosMusicalNotes />
                <span>Music</span>
            </div>
            <div className=" flex gap-2 ml-2 items-center">
                <SiYoutubegaming />
                <span>Gaming</span>
            </div>
            <div className=" flex gap-2 ml-2 items-center">
                <MdOutlineNewspaper />
                <span>News</span>
            </div>
        </aside>
    )
}

export default SideMenu