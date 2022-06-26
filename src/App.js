import React from "react";
import Header from "./components/Header";
import "./styles/App.css"
import Form from "./components/Form";
import Reminders from "./components/Reminders";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Header> </Header>
        <Form> </Form>
        <Reminders> </Reminders>
      </div>
    </div>
  );
}

export default App;
