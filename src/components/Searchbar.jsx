import React from "react";

function Searchbar({setSearch,search} ){
    return(
        <>
        <div className="flex justify-center">
            <input type="text" placeholder="Rechercher un contact..." value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className="border border-[#9105fa] px-3 py-2 rounded-md w-[65%] shadow-md shadow-[#9105fa] mt-4 text-gray-800"/>
        </div>
        </>
    )
}
export default Searchbar;