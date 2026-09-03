function CategoryFiltering({ filterCategory, setFilterCategory }) {

    const categories = [
        "All",
        "News",
        "Music",
        "Gaming",
        "Technology",
        "Education",
        "Programming",
        "Entertainment",
        "Travel"
    ]

    return (
        <div className="flex gap-2 sm:gap-3 my-3 overflow-x-auto pb-1">
            {categories.map((category) => (
                <button key={category} onClick={() => setFilterCategory(category)} className={category == filterCategory ? "bg-black text-white px-3 py-1 rounded-lg whitespace-nowrap text-sm font-medium" : "bg-white text-black px-2 py-1 rounded-lg whitespace-nowrap text-sm font-medium hover:bg-gray-300 transition"}>
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryFiltering