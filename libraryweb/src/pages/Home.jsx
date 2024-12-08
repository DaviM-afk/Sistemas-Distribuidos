import React, { useState } from "react";
import BookForm from "../components/BookForm";
import UserForm from "../components/UserForm";
import LoanForm from "../components/LoanForm"
// import "../style/Home.css";

const Home = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleShowForm = (formType) => {
    setActiveForm(formType);
  };

  const handleGoBack = () => {
    setActiveForm(null);
  };

  return (
    <div className="home-div">

        <h1>Library Monticello</h1>

      {activeForm === null && (
        <div className="home-buttons">
          <button className="home-add-button" onClick={() => handleShowForm("book")}>inserir novo livro</button>
          <button className="home-add-button" onClick={() => handleShowForm("user")}>entre com seus dados</button>
          <button className="home-add-button" onClick={() => handleShowForm("loan")}>registrar emprestimo</button>
        </div>
      )}

      {activeForm === "book" && (
        <div>
          <h2>Add a New Book</h2>
          <BookForm />
          <button className="home-back-button" onClick={handleGoBack}>Back</button>
        </div>
      )}
      {activeForm === "user" && (
        <div>
          <h2>Add a New User</h2>
          <UserForm />
          <button className="home-back-button" onClick={handleGoBack}>Back</button>
        </div>
      )}
      {activeForm === "loan" && (
        <div>
          <h2>Add a New Loan</h2>
          <LoanForm />
          <button className="home-back-button" onClick={handleGoBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Home;
