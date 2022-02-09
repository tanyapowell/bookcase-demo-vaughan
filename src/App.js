import { useState } from "react";
import "./App.css";
import Booklist from "./components/Booklist";
import books from "./models/books.json";

const newSetOfBooks = [
  {
    volumeInfo: { title: "Dreams from my father" },
    saleInfo: { retailPrice: { amount: "9.99" } },
    borderColour: "purple",
  },
  {
    volumeInfo: { title: "Trick Mirror" },
    saleInfo: { retailPrice: { amount: "10" } },
    borderColour: "pink",
  },
  {
    volumeInfo: { title: "Me Myself and I" },
    saleInfo: { retailPrice: { amount: "22.50" } },
    borderColour: "beige",
  },
  {
    volumeInfo: { title: "I know why the caged bird sings" },
    saleInfo: { retailPrice: { amount: "15" } },
    borderColour: "green",
  },
];

function App() {
  const [paginationSection, setPaginationSection] = useState([
    books[0],
    books[1],
    books[2],
    books[3],
    books[4],
  ]);

  return (
    <>
      <h1>Bookcase Demo</h1>
      <button onClick={() => setPaginationSection(newSetOfBooks)}>
        Click Me to change the set of books
      </button>
      <button
        onClick={() =>
          setPaginationSection([
            books[5],
            books[6],
            books[7],
            books[8],
            books[9],
          ])
        }
      >
        Click to go to the next pagination of books
      </button>
      <Booklist books={paginationSection} />
    </>
  );
}

export default App;
