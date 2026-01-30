import React from "react";
import Contactcard from "./Contactcard";

function Contactlist({ contactlist }) {

  return (
    <div className="grid grid-cols-4 gap-[20px] ">
      {contactlist.length > 0 ? (
        contactlist.map((contact, index) => (
          <Contactcard key={index} contact={contact} />
        ))
      ) : (
        <p className="text-center text-gray-500">Aucun contact pour le moment</p>
      )}
    </div>
  );
}

export default Contactlist;