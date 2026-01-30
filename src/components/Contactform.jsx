import React from "react";
import { useState } from "react";

function Contactform({ addContact, setShowForm, editingContact }){

    const [newContact, setNewContact] = useState(editingContact?.contact || {
        nom: "",
        email: "",
        phone: "",
        addresse: ""
    });

    return(
        <>
        <div className="text-gray-400 w-[40%] h-[350px]">
            <form action="" className="bg-white flex-rows justify-center border-2 border-gray-300 shadow-lg shadow-[#51038C] pt-[20px] rounded-[30px] h-[100%] text-center relative">
                <h2 className="text-[#51038C] font-bold mb-[15px]">
                    {editingContact ? "Modifier le contact" : "Ajouter un nouveau contact"}
                </h2>

                <input type="text" placeholder="Nom" value={newContact.nom} required
                    onChange={(e) => setNewContact({...newContact, nom: e.target.value})} 
                    className="border-2 hover:shadow-md hover:shadow-[#51038C] border-gray-400 hover:border-[#9105fa] focus focus:outline-none w-[80%] px-[15px] py-[10px] rounded-[30px] mt-[10px] "/>
                <br />
                <input type="email" placeholder="Email" value={newContact.email} required
                    onChange={(e)=>setNewContact({...newContact,email:e.target.value})}
                    className="border-2 hover:shadow-md hover:shadow-[#51038C] border-gray-400 hover:border-[#9105fa] focus focus:outline-none w-[80%] px-[15px] py-[10px] rounded-[30px] mt-[10px] " />
                <br />
                <input type="text" placeholder="Téléphone" value={newContact.phone} required
                    onChange={(e) => setNewContact({...newContact, phone: e.target.value})} 
                    className="border-2 hover:shadow-md hover:shadow-[#51038C] border-gray-400 hover:border-[#9105fa] focus focus:outline-none w-[80%] px-[15px] py-[10px] rounded-[30px] mt-[10px] " />
                <br />
                <input type="text" placeholder="Adresse" value={newContact.addresse} required
                    onChange={(e)=> setNewContact({...newContact,addresse:e.target.value})}
                    className="border-2 hover:shadow-md hover:shadow-[#51038C] border-gray-400 hover:border-[#9105fa] focus focus:outline-none w-[80%] px-[15px] py-[10px] rounded-[30px] mt-[10px] " />
                <br />
                <div className="grid grid-cols-2 w-[80%] absolute left-[55px] gap-[20px] ">
                    <button type="submit" onClick={() => {
                        addContact(newContact);
                        setNewContact({ nom: "", phone: "", email: "", addresse: "" });}}
                        className="px-[50px] py-[10px] mt-[15px] rounded-[25px] bg-gray-200 hover:bg-[#9105fa] hover:shadow-md hover:shadow-gray-800 text-[#9105fa] hover:text-white  "
                        > {editingContact ? "Mettre à jour" : "Enregistrer"}
                    </button>
                    <button type='button'
                        onClick={()=>setShowForm(false)}
                        className="px-[50px] py-[10px] mt-[15px] rounded-[25px] bg-gray-200 hover:bg-[#9105fa] hover:shadow-md hover:shadow-gray-800 text-[#9105fa] hover:text-white  "
                        >Annuler</button>
                </div>

            </form>                
        </div>
        </>
    )
}
export default Contactform;