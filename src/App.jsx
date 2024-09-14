import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import initialContacts from "./contacts.json";
import { FaAddressBook } from "react-icons/fa";
import css from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("savedContacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== contactId);
    });
  };

  const filtredContacts = contacts.filter((contacts) =>
    contacts.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 className={css.title}>
        <FaAddressBook className={css.titleIcon} size="40" />
        Phonebook
      </h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filtredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
