import React from "react";

const employeeContext = React.createContext({
    name: "",
    id: 0,
    occupation: "",
    department: ""
});

export default employeeContext;