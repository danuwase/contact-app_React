import React from "react";
import avatar_profile from "../assets/avatar_profile.jpeg";


function Contactcard({ contact }) {
  return (
    <div className="bg-white border-1 hover:border-2 border-[#51038C] shadow-md hover:-translate-y-1 shadow-[#51038C] flex-column rounded-[20px] p-[15px] pt-[65px] mb-[30px] relative">
      <img className="absolute top-[-40px] w-[100px] rounded-[50px] left-[30%] border-t-[3px] border-t-[#51038C] " src={avatar_profile} alt="" />
      <p className="text-[#51038C] " ><strong>Nom :</strong> {contact.nom}</p>
      <p className="text-[#51038C] " ><strong>Téléphone :</strong> {contact.phone}</p>
      <p className="text-[#51038C] " ><strong>Email :</strong> {contact.email}</p>
      <p className="text-[#51038C] " ><strong>Adresse :</strong> {contact.addresse}</p>
    </div>
  );
}

export default Contactcard;