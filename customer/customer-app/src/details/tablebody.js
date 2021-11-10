import React from 'react';
import './cust.css';

import Form from './custform';
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.phone}</td>
          <td>{row.city}</td>
          <td>{row.email}</td>
          <td>
              <button className="button-del" onClick={()=>props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      )
    })
    return<tbody className="table-body">{rows}</tbody>
}
export default TableBody;
 