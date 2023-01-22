import express from "express";
import cors from "cors";
const app = express();

app.use(express.json())
app.use(express.static('build'))
app.use(cors({
  origin: '*'
}));


let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get(`/api/persons/:id`, (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  }
  else {
    response.status(404).end()
  }
});

app.get(`/info`, (request, response) => {
  const personsLength = persons.length;
  var currentDate = new Date();
  response.send(`<p>Phonebook has info for ${personsLength} people.</p>
                    <p>${currentDate}</p>`);
});

app.delete(`/api/persons/:id`, (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post(`/api/persons`, (request, response) => {
    const person = request.body
    if(!person.name){
        return response.status(400).json({
            error: 'Name missing'
        })
    }
    else if(!person.number){
        return response.status(400).json({
            error: 'Number missing'
        })
    }
    else if (persons.filter(item => item.name === person.name ) !== []) {
        return response.status(400).json({
            error: 'Name already exists'
        })
    }
    const newId = Math.floor(Math.random() * 5000);
    const newPerson = {
        id: newId,
        name: person.name,
        number: person.number
    }
    persons = persons.concat(newPerson)
    response.json(newPerson)
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
