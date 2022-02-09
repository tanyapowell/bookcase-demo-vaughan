import React from "react";

const Book = (props) => {
  const { title, price, borderColour } = props;
  console.log("This is your book title", title);
  return (
    <div style={{border: `10px ${borderColour} dashed`}}>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default Book;
