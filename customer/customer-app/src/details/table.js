import React from 'react';
import './cust.css';
import Form from './custform';
import TableHeader from './tablehead';
import TableBody from './tablebody';

  const Table= (props)=> {
    
    const{characterData,removeCharacter} =props
      
      return (
        <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
      )
      }
      export default Table;