import lawyer from '../../assets/lawyer.svg';
// import user from '../src/img/user.png';
// import edit from '../src/img/edit.png';
// import inbox from '../src/img/envelope.png';
// import settings from '../src/img/settings.png';
// import help from '../src/img/question.png';
// import logout from '../src/img/log-out.png';
import anshid from '../../assets/anshid.svg';
import ET from '../../assets/ET.svg';
import liveraw from '../../assets/liveraw.svg';
import React, {useState, useEffect, useRef} from 'react';
import { MdNotificationsActive } from "react-icons/md";
import './Notification.css';

function Notifications() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  return (
    <div className="App">
    <div className='menu-container' ref={menuRef}>
      <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
        <img src={lawyer}></img>
      </div>

      <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
        <h3>Notification<br/><span></span></h3>
        <ul>
          <DropdownItem img = {ET} text = {"New update on corporate tax"}/>
          <DropdownItem img = {anshid} text = {"Dark Mode"}/>
          <DropdownItem img = {ET} text = {"IT Rules Amendment Prima Facie Lack Necessary Safeguards To Protect Satire"}/>
          <DropdownItem img = {ET} text = {"Change Password"}/>
          <DropdownItem img = {ET} text = {"New update on corporate tax"}/>
        </ul>
      </div>
    </div>
  </div>
  )
}
function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}


export default Notifications

