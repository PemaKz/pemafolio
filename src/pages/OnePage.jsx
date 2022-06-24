import React, {useEffect} from 'react';
import WebFont from 'webfontloader';
import Menu from '../components/onepage/Menu';
import '../components/css/onepage.css';
import ContactSection from '../components/onepage/ContactSection';
import ProjectsSection from '../components/onepage/ProjectsSection';
import HomeSection from '../components/onepage/HomeSection';
import SkillsSection from '../components/onepage/SkillsSection';

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
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </>);
}

export default OnePage;
