import React from "react";
import Contactcard from "./Contactcard";

function Contactlist({ contactlist, deleteContact, editContact }) {

  return (
    <div className="grid grid-cols-4 gap-[20px] ">
      {contactlist.length > 0 ? (
        contactlist.map((contact, index) => (
          <Contactcard key={index} contact={contact} index={index} deleteContact={deleteContact} editContact={editContact} />
        ))
      ) : (
        <p className="text-center text-gray-500">Aucun contact pour le moment</p>
      )}
    </div>
  );
}

export default Contactlist;