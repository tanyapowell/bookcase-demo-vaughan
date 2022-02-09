import React from "react";
import Book from "./Book";

const Booklist = (props) => {
  const { books } = props;
  return books.map((book) => (
    <Book
      title={book.volumeInfo.title}
      price={book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : "0"}
      borderColour="purple"
    />
  ));
};

export default Booklist;
