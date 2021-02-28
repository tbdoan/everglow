// Imports
import { push as Menu } from 'react-burger-menu'
import React, { useState, useEffect } from 'react';

function History(props) {

    const [battery, setBattery] = useState([])

    /*
    useEffect( () => {
        // send http request
        fetch()
        // use it to populate battery state
        .then()
    }) */

    return(
        <Menu width={800} styles={styles} isOpen={false}>
            <p>history</p>
            {/* Render Battery components (maybe make a battery table component in Components folder*/}
        </Menu>
    );
}

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

export default History