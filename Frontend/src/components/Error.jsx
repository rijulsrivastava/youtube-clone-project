import React from "react";
import { useNavigate, useRouteError } from "react-router";
import { MdKeyboardReturn } from "react-icons/md";

function Error() {

    const navigate = useNavigate();
    const error = useRouteError(); // to get routing error

    return (
        <div className="w-full min-h-screen flex px-4 justify-center items-center">
            <div className="w-full max-w-md flex flex-col border border-gray-300 rounded-2xl items-center justify-center p-6 sm:p-10 text-center">
                <h1 className="text-5xl sm:text-6xl font-bold">404</h1>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">Page Not Found</h2>
                <p className="mt-3 text-sm sm:text-base text-center">Oops!!! Page you are looking for does not exist.</p>
                {error?.statusText && (
                    <p className="text-sm mt-2">
                        {error.statusText}
                    </p>
                )}
                {/* to navigate back to the home */}
                <button onClick={() => navigate("/")} className="flex items-center gap-1 mt-6 px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                    <MdKeyboardReturn />
                    HOME
                </button>
            </div>
        </div>
    )
}

export default Error