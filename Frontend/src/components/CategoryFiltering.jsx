import React from "react";

function CategoryFiltering({ filterCategory, setFilterCategory }) {

    const categories = [
        "All",
        "News",
        "Music",
        "Gaming",
        "Technology",
        "Education",
        "Programming",
    ]

    return (
        <div className=" flex gap-10 my-2">
            {categories.map((category) => (
                <button key={category} onClick={() => setFilterCategory(category)} className={category == filterCategory ? "bg-black text-white px-2 py-1" : "bg-white text-black"}>
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryFiltering