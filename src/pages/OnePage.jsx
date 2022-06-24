import React, {useEffect} from 'react';
import WebFont from 'webfontloader';
import Menu from '../components/onepage/Menu';
import Section from '../components/onepage/Section';
import '../components/css/onepage.css';

/**
 * Return One Page
 * @return {Element} One Page Element
*/
function OnePage() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat'],
      },
    });
  }, []);
  return (<>
    <Menu />
    <Section width={100} height={100} color="#1D1B43" id="aboutme">
      <div className='container h-100'>
        <div className='row m-0 p-0 h-100'>
          <div className='col-md-6 d-flex align-items-center'>
            <div className='text-white d-flex flex-column w-100'>
              <h2 className='text-wrap title text-md-start text-center'>
                Pedro Barrera
              </h2>
              <h5 className='text-wrap text-md-start text-center'>
                Full Stack Developer
              </h5>
              <div className='row mt-5'>
                <p className='col mx-3 p-0 m-0 bg-danger rounded'>Github</p>
                <p className='col mx-3 p-0 m-0 bg-danger rounded'>Github</p>
                <p className='col mx-3 p-0 m-0 bg-danger rounded'>Github</p>
                <p className='col mx-3 p-0 m-0 bg-danger rounded'>Github</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-md-flex d-none'>
          </div>
        </div>
      </div>
    </Section>
    <Section width={100} height={100} color="#212529" id="skills">
      <div className='container h-100'>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className=''>
            <h2 className='text-center text-white'>Skills</h2>
            <p className='text-white text-center'>Javascript, PHP, CSS</p>
            <p className='text-white text-center'>
              Git, React, Laravel, NodeJS,
              ThreeJS, UE5, Photoshop, After Effects
            </p>
            <p className='text-white text-center'>
              Spanish, English
            </p>
          </div>
        </div>
      </div>
    </Section>
    <Section width={100} height={100} color="#212510" id="projects">
      <h2 className='text-center text-white'>Projects</h2>
    </Section>
    <Section width={100} height={100} color="#212529" id="contact">
      <div className='container h-100'>
        <div className='row m-0 p-0 h-100'>
          <div className='col-md-6 d-flex align-items-center'>
            <h2 className='text-white'>Contactame</h2>
          </div>
          <div className='col-md-6 d-md-flex d-none align-items-center'>
            <h2 className='text-white'>Contactame</h2>
          </div>
        </div>
      </div>
    </Section>
  </>);
}

export default OnePage;
