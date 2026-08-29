import React from "react";
import { useNavigate, useRouteError } from "react-router";
import { MdKeyboardReturn } from "react-icons/md";

function Error() {

    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className=" flex flex-col border rounded-2xl border-solid border-black items-center justify-center p-10">
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-3xl font-bold mt-2">Page Not Found</h2>
                <p className="mt-3 text-center">Opps!!! Page you are looking for does not exist.</p>
                {error?.statusText && (
                    <p className="text-sm mt-2">
                        {error.statusText}
                    </p>
                )}
                <button onClick={() => navigate("/")} className="flex border items-center gap-1 mt-6 px-5 py-2">
                    <MdKeyboardReturn />
                    HOME
                </button>
            </div>
        </div>
    )
}

export default Error