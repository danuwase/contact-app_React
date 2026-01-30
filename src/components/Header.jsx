import React from "react";
import Contactform from "./Contactform";


function Header({ showForm, setShowForm }) {
  return (
    <>
      <div className="border-2 border-[#9105fa] w-[80%] flex justify-between py-[10px] px-[15px] rounded-[40px]">
        <p className="text-[#9105fa] pt-[4px]">My contacts</p>

        <button
          className="bg-[#9d0ef1] px-[12px] py-[6px] rounded-[17px]"
          onClick={() => setShowForm(!showForm)}
        >
          Add new contact
        </button>
      </div>
    </>
  );
}
export default Header;