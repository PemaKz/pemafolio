import React, {useState} from 'react';
import {FcMenu} from 'react-icons/fc';
import {HashLink} from 'react-router-hash-link';

const Menu = () => {
  const [state, setState] = useState({showMenu: false});

  const handleMenu = () => {
    const navbar = document.getElementsByClassName('navbar-collapse')[0];
    if (!state.showMenu) return setState({showMenu: true});
    navbar.classList.add('animate__backOutRight');
    setTimeout(() => setState({showMenu: false}), 500);
  };

  const handleHashLink = () => {
    const navbar = document.getElementsByClassName('navbar-collapse')[0];
    navbar.classList.add('animate__backOutRight');
    setTimeout(() => setState({showMenu: false}), 500);
  };

  return (<nav className='navbar navbar-expand-lg fixed-top'>
    <div className='container-fluid text-white'>
      <h2 className='logo ms-md-5 mt-2 d-flex'>
        Pema <span className='primary-text'>.Dev</span>
      </h2>
      <button
        className="navbar-toggler p-0 m-0 d-md-none d-flex"
        type="button"
        onClick={handleMenu}>
        <FcMenu/>
      </button>
      <div className="d-md-flex d-none justify-content-end">
        <HashLink
          className='mx-3 menulink text-decoration-none'
          to="#home">
          <span className='menunumber'>01.</span> Home
        </HashLink>
        <HashLink className='mx-3 menulink text-decoration-none'
          to="#skills">
          <span className='menunumber'>02.</span> Skills
        </HashLink>
        <HashLink className='mx-3 menulink text-decoration-none'
          to="#projects">
          <span className='menunumber'>03.</span> Projects
        </HashLink>
        <HashLink className='mx-3 menulink text-decoration-none'
          to="#contact">
          <span className='menunumber'>04.</span> Contact
        </HashLink>
      </div>
      {state.showMenu ? <div className={'navbar-collapse \
      animate__animated animate__backInRight'}>
        <div className={'d-md-none w-100 d-flex justify-content-center'}>
          <div className='d-flex flex-column'>
            <HashLink onClick={handleHashLink}
              className={'mx-3 my-2 p-3 menulink-sm rounded\
              text-decoration-none'}
              to="#home">
              <span className='menunumber'>01.</span> Home
            </HashLink>
            <HashLink onClick={handleHashLink}
              className={'mx-3 my-2 p-3 menulink-sm rounded\
              text-decoration-none'}
              to="#skills">
              <span className='menunumber'>02.</span> Skills
            </HashLink>
            <HashLink onClick={handleHashLink}
              className={'mx-3 my-2 p-3 menulink-sm rounded\
              text-decoration-none'}
              to="#projects">
              <span className='menunumber'>03.</span> Projects
            </HashLink>
            <HashLink onClick={handleHashLink}
              className={'mx-3 my-2 p-3 menulink-sm rounded\
              text-decoration-none'}
              to="#contact">
              <span className='menunumber'>04.</span> Contact
            </HashLink>
          </div>
        </div>
      </div> : ''}
    </div>
  </nav>);
};

export default Menu;
