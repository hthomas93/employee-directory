import React from 'react';
import MaterialTable from 'material-table';
import "./index.css";

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Position', field: 'position' },
            { title: 'Employee ID', field: `employeeID`, type: "numeric" },
        ],
        data: [
            { name: 'Mehmet', surname: 'Baran', position: "Engineer", employeeID: 64739 },
            { name: 'Zerya Betül', surname: 'Baran', position: "Manager", employeeID: 76504 },
            { name: 'Harrison', surname: 'Thomas', position: "Engineer", employeeID: 75933 },
            { name: 'Bernie', surname: 'Sanders', position: "Intern", employeeID: 85736 },
            { name: 'Tom', surname: 'Cruise', position: "Stunt Man", employeeID: 12345 },
        ],
    });

    return (
        <MaterialTable
            title="Employee Database    "
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}
