import React from "react";

const Header = ({ categories, setSelectedCategory }) => {
  // console.log(categories);
  return (
    <>
      <h1>Product List</h1>
      <div>
        {categories &&
          categories.map((item, index) => (
            <button key={index} onClick={() => setSelectedCategory(item)}>
              {item}
            </button>
          ))}
      </div>
    </>
  );
};

export default Header;
