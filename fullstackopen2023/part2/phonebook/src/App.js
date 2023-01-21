import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const deletingButton = (id) => {
    const testing = personService
              .deleteUser(id.target.id)
    console.log(testing);
  };
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

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
    persons
      .map((person) => person.name.toLowerCase())
      .includes(newName.toLowerCase())
      ? window.alert(`${newName} is already in the phonebook.`)
      : personService
          .create({ name: newName, number: newNumber, id: persons.length + 1 })
          .then((newPerson) => {
            setPersons(persons.concat(newPerson));
          });
    setNewName("");
    setNewNumber("");
  };

  const filteredData = persons.filter((e) => {
    if (search === "") {
      return e;
    } else {
      return e.name.toLowerCase().includes(search.toLowerCase());
    }
  });
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={(e) => setSearch(e.target.value)} value={search} />
      <h3>Add a new contact</h3>
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
