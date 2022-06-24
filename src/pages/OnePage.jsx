import React, {useEffect} from 'react';
import WebFont from 'webfontloader';
import Menu from '../components/onepage/Menu';
import Section from '../components/onepage/Section';
import '../components/css/onepage.css';
import ContactSection from '../components/onepage/ContactSection';
import ProjectsSection from '../components/onepage/ProjectsSection';
import HomeSection from '../components/onepage/HomeSection';

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
    <HomeSection />
    <Section width={100} height={100} color="#2a2344" id="skills">
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
    <ProjectsSection />
    <ContactSection />
  </>);
}

export default OnePage;
