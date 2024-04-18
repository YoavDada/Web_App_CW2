import React from 'react';

const EntityTable = ({ entities, handleEdit, handleDelete, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => <th key={col.field}>{col.headerName}</th>)}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {entities.map((entity) => (
          <tr key={entity.id}>
            {columns.map(col => <td key={col.field}>{entity[col.field]}</td>)}
            <td>
              <button onClick={() => handleEdit(entity.id)}>Edit</button>
              <button onClick={() => handleDelete(entity.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EntityTable;
