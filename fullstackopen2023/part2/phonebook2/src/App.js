import { useState, useEffect } from "react";
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import personService from "./services/persons.js";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [forceRender, setForceRender] = useState(0);
  const [successMessage, setSuccessMessage] = useState(null);
  const deletingButton = (id) => {
    if (window.confirm(`Do you want to delete user ${id.target.name}?`)) {
      console.log(id);
      personService
        .deleteUser(id.target.id)
        .then(() => {
          setForceRender((prev) => prev + 1)
          
        });
    }
  };
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, [forceRender]);

  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const addObject = (event) => {
    event.preventDefault();
    if (
      persons
        .map((person) => person.name.toLowerCase())
        .includes(newName.toLowerCase())
    ) {
      if (
        window.confirm(
          `${newName} is already in the phonebook. Do you want to overwrite the number?`
        )
      ) {
        personService
          .updateUser(newName, newNumber)
          .then(() => {
            setForceRender((prev) => prev + 1);
            setSuccessMessage(
              `${newName}'s number has been updated to ${newNumber}.`
            );
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          })
      }
    } else {
      personService
        .create({ name: newName, number: newNumber, id: newName })
        .then((newPerson) => {
          setPersons(persons.concat(newPerson));
          setSuccessMessage(
            `${newName} has been added.`
          )
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        });
      setNewName("");
      setNewNumber("");
    }
  };

  const filteredData = persons.filter((e) => {
    if (search === "") {
      return e;
    } else {
      return e.name.toLowerCase().includes(search.toLowerCase());
    }
  });

  const SuccessNotification = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className = "successMessage">
        {message}
      </div>
    )}

  return (
    <div className="bgd">
      <h2>Phonebook</h2>
      <Filter onChange={(e) => setSearch(e.target.value)} value={search} />
      <h3>Add a new contact</h3>
      <SuccessNotification message = {successMessage}/>
      <PersonForm
        onSubmit={addObject}
        newName={newName}
        nameChange={handleNameChange}
        newNumber={newNumber}
        numberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filteredData={filteredData} onclick={(e) => deletingButton(e)} />
    </div>
  );
};

export default App;
