import React from 'react';
import './App.css';
import Wrapper from "../src/components/Wrapper"
import Table from "../src/components/Table"
import Header from "../src/components/Header"


function App() {
  return (
    <div>
      <Wrapper>
        <Header></Header>
        <Table>
        </Table>
      </Wrapper>
    </div >
  );
}

export default App;
