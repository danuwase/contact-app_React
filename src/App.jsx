import { useState } from 'react'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Contactlist from './components/Contactlist'
import Contactform from './components/Contactform'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search,setSearch]=useState("");

  const addContact=(contact) => {
    setContacts([...contacts,contact]);
    setShowForm(false); 
  };
  const searchedcontacts = contacts.filter((contact) =>
    contact.nom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen relative">
  
      <div className="w-full flex justify-center mt-5">
        <Header showForm={showForm} setShowForm={setShowForm} />
      </div>

      <div>
        <Searchbar search={search} setSearch={setSearch} />
      </div>

       <div className="flex justify-center mt-12">
        <Contactlist contactlist={search ? searchedcontacts : contacts} />
      </div>

          {showForm ? (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <Contactform addContact={addContact} setShowForm={setShowForm} />
      </div>
            ):""}
      

      <div className="fixed bottom-0 w-full flex justify-center">
        <Footer />
      </div>

</div>
  );
}
export default App
// {showForm ? <Contactform addContact={addContact} /> : "Formulaire indisponible"}
