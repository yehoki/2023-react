import { useState, useEffect } from "react";
import EntryInput from "./components/EntryInput";
import NameForm from "./components/NameForm";
import Numbers from "./components/Numbers";
import SearchBar from "./components/SearchBar";
import axios from 'axios';

const App = () => {

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all').then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


  const addObject = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    const nameCheck = (item) => item.name === nameObject.name;
    return (
      persons.some(nameCheck)
        ? window.alert(`${nameObject.name} is already added to the phonebook`)
        : setPersons((persons) => [...persons, nameObject]),
      setNewName(""),
      setNewNumber("")
    );
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <SearchBar 
          onChange = {(e) => setSearch(e.target.value)}
          value = {search}>
        <NameForm onSubmit={addObject} title="Phonebook">
          <EntryInput
            title="Name:"
            value={newName}
            onChange={handleNameChange}
          />
          <EntryInput
            title="Number: "
            value={newNumber}
            onChange={handleNumberChange}
          />
        </NameForm>
        <Numbers persons={persons} input = {search}/>
      </SearchBar>
    </div>
  );
};

export default App;
