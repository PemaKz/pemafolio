import React, {useState} from 'react';
import {FcMenu} from 'react-icons/fc';
import {HashLink} from 'react-router-hash-link';

const Menu = () => {
  const [state, setState] = useState({showMenu: false});

  const handleMenu = () => {
    setState({showMenu: state.showMenu ? false : true});
  };

  return (<nav className='navbar navbar-expand-lg fixed-top'>
    <div className='container-fluid text-white'>
      <h2>Pema.Dev</h2>
      <button
        className="navbar-toggler p-0 m-0"
        type="button"
        onClick={handleMenu}>
        <FcMenu/>
      </button>
      <div className={`${state.showMenu ? '' : 'collapse'} navbar-collapse`}>
        <div className="d-md-flex w-100 d-none justify-content-end">
          <HashLink className='mx-3 menulink text-decoration-none text-white'
            to="#aboutme">
            <span className='menunumber'>01.</span> About Me
          </HashLink>
          <HashLink className='mx-3 menulink text-decoration-none text-white'
            to="#skills">
            <span className='menunumber'>02.</span> Skills
          </HashLink>
          <HashLink className='mx-3 menulink text-decoration-none text-white'
            to="#projects">
            <span className='menunumber'>03.</span> Projects
          </HashLink>
          <HashLink className='mx-3 menulink text-decoration-none text-white'
            to="#contact">
            <span className='menunumber'>04.</span> Contact
          </HashLink>
        </div>
      </div>
    </div>
  </nav>);
};

export default Menu;
