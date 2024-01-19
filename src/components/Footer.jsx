import React from 'react';
var currentDate= new Date();
var year = currentDate.getFullYear();
function Footer(){
    return (
        <footer><p>Copyright ⓒ { year }</p></footer>);
}
export default Footer;