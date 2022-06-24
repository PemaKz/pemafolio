import React from 'react';
import Section from './Section';
import Config from '../../config.json';
import {BsGithub, BsTwitter} from 'react-icons/bs';

const HomeSection = () => {
  return (
    <Section width={100} height={100} color="#19142a" id="home">
      <div className='container h-100'>
        <div className='row m-0 p-0 h-100'>
          <div className='col-md-6 d-flex align-items-center'>
            <div className='text-white d-flex flex-column w-100 '>
              <h2 className='ms-3 text-wrap title text-md-start text-center'>
                Pedro Barrera
              </h2>
              <h5 className='ms-3 text-wrap text-md-start text-center'>
                Full Stack Developer
              </h5>
              <div className={'mt-4 d-flex justify-content-center \
              justify-content-md-start'}>
                <a className="text-decoration-none text-white mx-4" target="_blank" rel="noreferrer" href={`https://github.com/${Config.githubuser}`}>
                  <BsGithub size="32" />
                </a>
                <a className="text-decoration-none text-white mx-4" target="_blank" rel="noreferrer" href={`https://twitter.com/${Config.twitteruser}`}>
                  <BsTwitter size="32" />
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-md-flex d-none'>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeSection;
