import React from 'react';
import './cust.css';

const TableHeader = () => {
    return (
      <thead className="table-header" > 
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>City</th>
          <th>E-mail</th>
          <th>Remove</th>
        </tr>
      </thead>
    )
  }
export default TableHeader;
 
 