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
      <h2 className='logo ms-5 mt-2'>Pema.Dev</h2>
      <button
        className="navbar-toggler p-0 m-0"
        type="button"
        onClick={handleMenu}>
        <FcMenu/>
      </button>
      <div className="d-md-flex w-100 d-none justify-content-end">
        <HashLink className='mx-3 menulink text-decoration-none'
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
      <div className={`
      ${state.showMenu ? 'animate__backInRight' :
      'animate__backOutRight'} \
      navbar-collapse animate__animated`}>
        <div className={'d-md-none w-100 d-flex justify-content-center'}>
          <div className='d-flex flex-column'>
            <HashLink className={'mx-3 my-2 p-3 menulink-sm rounded\
            text-decoration-none'}
            to="#home">
              <span className='menunumber'>01.</span> Home
            </HashLink>
            <HashLink className={'mx-3 my-2 p-3 menulink-sm rounded\
            text-decoration-none'}
            to="#skills">
              <span className='menunumber'>02.</span> Skills
            </HashLink>
            <HashLink className={'mx-3 my-2 p-3 menulink-sm rounded\
            text-decoration-none'}
            to="#projects">
              <span className='menunumber'>03.</span> Projects
            </HashLink>
            <HashLink className={'mx-3 my-2 p-3 menulink-sm rounded\
            text-decoration-none'}
            to="#contact">
              <span className='menunumber'>04.</span> Contact
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  </nav>);
};

export default Menu;
