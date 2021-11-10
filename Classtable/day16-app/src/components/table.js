import React from 'react';
import  './table.css';

const Tableheader=()=>
{
           return(
           <thead className="th">  
            <tr>
                <th>NAME</th>
                <th>DESIGNATION</th>
            </tr>
            </thead>
      )
}

           const Tablebody=()=>
{
           return(
           <tbody className="tb">  
            <tr>
                <td>JOHN</td>
                <td>TESTING ENGINEER</td>
            </tr>
            <tr>
                <td>RAHUL</td>
                <td>SALES MANAGER</td>
            </tr>
            <tr>
                <td>ANAND</td>
                <td>ANALYST</td>
            </tr>
            <tr>
                <td>ROHAN</td>
                <td>ASSOCIATE MANAGER</td>
            </tr>
            <tr>
                <td>VRINDA</td>
                <td>TEACHER</td>
            </tr>
            </tbody>
      )
}
        class Table extends React.Component{
            render(){
                return(
                    <table className="tm">
                        <Tableheader />
                        <Tablebody />
                        </table>
                )
            }
        }
        export default Table;