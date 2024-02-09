import React from 'react';

export default function Dropdown() {
  return (
    <div className='dropdowm-main' style={styles.dropdownMain}>
      <a href=''><p style={styles.link}>Account</p></a>
      <hr style={styles.hr} />
      <a href=''><p style={styles.link}>Settings</p></a>
      <hr style={styles.hr} />
      <a href=''><p style={styles.link}>Logout</p></a>
      <hr style={styles.hr} />
    </div>
  );
}

const styles = {
    dropdownMain: {
        position: 'absolute',
        display: 'inline-block',
        zIndex: 999,
        borderBottom: 'solid white',
        textAlign: 'center',
        boxShadow: '2px 8px 5px -5px grey', // Add shadow at the bottom
        boxSizing: 'border-box',
        display: "flex",
        backgroundColor: '#fff',
        margin: 0,
        padding: 0,
        flexDirection:'column'
        
    },    
  link: {
    color: '#333',
    textDecoration: 'none',
    padding: '10px',
    margin: 0,
  },
  hr: {
    margin: 0,
    border: 'none',
    borderTop: '1px solid #ccc',
  },
};
