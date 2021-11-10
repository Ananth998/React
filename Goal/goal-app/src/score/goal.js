import React from 'react';
import './goal.css'
function Norun() {
	return <h1 className="No-Run">AH! Missed Ball!</h1>; }
function MadeSingle() {
	return <h2 className="Made-Single">WOW Single! </h2>; }
 function MadeDouble() {
   return <h3 className="Made-Double">WOW Double! </h3>; }   
   function MadeBoundary() {
	return <h1 className="Made-Boundary">WOW Boundary! </h1>; }
    function MadeSix() {
        return <h2 className="Made-Six">WOW Six! </h2>; }
function Run(props) {
  const isRun = props.isRun;
  if (isRun==='1') {
    return <MadeSingle/>; }
 else if(isRun==='0')  {
  return <Norun/>; 
}
else if(isRun==='2'){return<MadeDouble/>;}
 else if(isRun==='4'){return<MadeBoundary/>;}
else if(isRun==='6'){return<MadeSix/>;}
}
export default Run;
