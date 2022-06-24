import React from 'react';
import Section from './Section';
import {FaLaravel} from 'react-icons/fa';
import {SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeillustrator,
} from 'react-icons/si';
import {DiJavascript, DiPhp, DiCss3,
  DiGithubBadge, DiReact, DiNodejs} from 'react-icons/di';

const SkillsSection = () => {
  return (
    <Section width={100} height={100} color="#2a2344" id="skills">
      <div className='container h-100'>
        <div className='d-flex flex-column h-100'>
          <h2 className='text-white title text-center my-3'>Skills</h2>
          <div className={'flex-grow-1 d-flex align-items-center \
          justify-content-center'}>
            <div>
              <div className='text-white row my-5'>
                <DiJavascript className='col' style={{height: '100%'}} />
                <DiPhp className='col' style={{height: '100%'}} />
                <DiCss3 className='col' style={{height: '100%'}} />
              </div>
              <div className='text-white row my-5'>
                <DiGithubBadge className='col' size={64} />
                <DiReact className='col' size={64} />
                <FaLaravel className='col' size={64} />
                <DiNodejs className='col' size={64} />
              </div>
              <div className='text-white row my-5'>
                <SiAdobepremierepro className='col' size={64} />
                <SiAdobeillustrator className='col' size={64}/>
                <SiAdobephotoshop className='col' size={64}/>
                <SiAdobeaftereffects className='col'size={64}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
