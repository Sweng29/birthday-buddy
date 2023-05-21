import React from "react";
import Person from "./Person.jsx";

const PersonList = ({ persons }) => {
  return (
    <section>
      {persons.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default PersonList;
