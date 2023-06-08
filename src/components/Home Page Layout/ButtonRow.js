import React from 'react';
import './TopButtonSec.css';
import { GoLaw } from "react-icons/go";
import { FaBook } from "react-icons/fa";
import { GrTemplate } from "react-icons/gr";

function ButtonRow() {
  const buttons = [
    { id: 1, label: 'laws and Rules', icon: <GoLaw className="icon-large" />, labelClass: 'label-law', buttonClass: 'rounded-button' },
    { id: 2, label: 'Dictionary', icon: <FaBook className="icon-large"/>, labelClass: 'label-large', buttonClass: 'rounded-button' },
    { id: 3, label: 'Templates', icon: <GrTemplate className="icon-large"/> ,labelClass: 'label-templates', buttonClass: 'rounded-button' },
    { id: 4, label: 'Legal Updates' },
    { id: 5, label: 'Case Analysis' , buttonClass: 'white-button'},
    { id: 6, label: 'Law Reforms', buttonClass: 'white-button'},
  ];

  const rows = [];
  const buttonsPerRow = 3;

  for (let i = 0; i < buttons.length; i += buttonsPerRow) {
    const rowButtons = buttons.slice(i, i + buttonsPerRow);
    const row = (
      <div className="button-row" key={i}>
        {rowButtons.map((button) => (
          <button key={button.id} className={`button ${button.id <= 3 ? 'large-button' : ''} ${button.buttonClass}`}>
            {button.icon}
            <span className={button.labelClass}>{button.label}</span>
          </button>
        ))}
      </div>
    );
    rows.push(row);
  }

  return <div>{rows}</div>;
}

export default ButtonRow;

