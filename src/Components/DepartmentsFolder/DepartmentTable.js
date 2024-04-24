import GenericTable from '../GenericTable';

const DepartmentTable = ({ departments, handleEdit, handleDelete }) => {
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'departmentName', headerName: 'Department Name' },
    { field: 'location', headerName: 'Location' }
  ];

  return (
    <div>
      <GenericTable columns={columns} data={departments} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default DepartmentTable;
