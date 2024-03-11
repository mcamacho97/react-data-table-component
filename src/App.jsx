/* eslint-disable react-hooks/exhaustive-deps */
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";

//Documentation
// https://react-data-table-component.netlify.app/?path=/docs/getting-started-intro--docs

function App() {
  const columns = [
    { name: "Nombre", selector: (row) => row.nombre, sortable: true },
    { name: "Apellido", selector: (row) => row.apellido, sortable: true },
    { name: "Edad", selector: (row) => row.edad, sortable: true },
  ];

  const data = [
    { nombre: "Juan", apellido: "Perez", edad: 30 },
    { nombre: "Maria", apellido: "Lopez", edad: 25 },
    { nombre: "Pedro", apellido: "Gonzalez", edad: 26 },
    { nombre: "Tristan", apellido: "Gonzalez", edad: 31 },
    { nombre: "Mario", apellido: "Camacho", edad: 22 },
    { nombre: "Carlos", apellido: "Fernandez", edad: 18 },
    { nombre: "Edu", apellido: "Gonzalez", edad: 29 },
    { nombre: "Darvin", apellido: "Tijerino", edad: 80 },
    { nombre: "Peter", apellido: "Uzumaki", edad: 40 },
  ];

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRecords(data);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (event) => {
    const filteredRecords = records.filter((record) => {
      return record.nombre
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setRecords(filteredRecords);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />

      <DataTable
        title="Personas"
        columns={columns}
        data={records}
        selectableRows
        onSelectedRowsChange={(data) => console.log(data)}
        pagination
        paginationPerPage={4}
        fixedHeader
        progressPending={loading}
      />
    </div>
  );
}

export default App;
