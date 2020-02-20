import React, { useState } from 'react';
import './App.css';
import Wrapper from "../src/components/Wrapper"
import Table from "../src/components/Table"
import employees from "./employees.json";
import EmployeeContext from "./utils/EmployeeContext"

const [employeeState, setEmployeeState] = useState({
  name: "",
  id: 0,
  occupation: "",
  department: ""
})

function App() {
  return (
    <EmployeeContext.Provider>
      <div>
        <Wrapper>
          <Table>
          </Table>
        </Wrapper>
      </div >
    </EmployeeContext.Provider>
  );
}

export default App;
