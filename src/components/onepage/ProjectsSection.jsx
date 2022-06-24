import React, {useEffect, useState} from 'react';
import Section from './Section';
import Config from '../../config.json';
import {BsGithub} from 'react-icons/bs';

const ProjectsSection = () => {
  const [state, setState] = useState({
    repositories: [],
    hoveredMenu: null,
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/${Config.githubuser}/repos?per_page=20&page=1`)
        .then((response) => response.json())
        .then((repositories) => {
          repositories.sort(
              (a, b) => new Date(b.updated_at) - new Date(a.updated_at),
          );
          setState({repositories: repositories});
        });
  }, []);

  const handleProjectSelect = (idproject) => {
    setState({...state, hoveredMenu: idproject});
    console.log(idproject);
  };

  const handleProjectDeSelect = () => {
    setState({...state, hoveredMenu: null});
  };

  const handleOpenProject = (url) => {
    window.open(url);
  };

  return (
    <Section width={100} height={100} color="#19142a" id="projects">
      <div className='container h-100'>
        <div className='d-flex flex-column h-100'>
          <h2 className='text-white title text-center my-3'>Projects</h2>
          <div className={`flex-grow-1 align-items-center \
          justify-content-center overflow-auto m-5 text-white`}>
            {state.repositories ?
              state.repositories.map((repo, i) => (
                <div onClick={() => handleOpenProject(repo.html_url)}
                  key={repo.id} className={`rounded bg-project \
                  my-3 row m-0 mx-3 py-3`}
                  onMouseEnter={() => handleProjectSelect(i)}
                  onMouseLeave={handleProjectDeSelect}>
                  <div className='col-md-auto col-4 d-flex align-items-center'>
                    <BsGithub size="16" className='me-2' />
                    <p className='updatedate p-0 m-0 text-center text-truncate'>
                      {repo.updated_at.split('-')[2].split('T')[0] + '-'}
                      {repo.updated_at.split('-')[1] + '-'}
                      {repo.updated_at.split('-')[0].slice(-2)}
                    </p>
                  </div>
                  <div className={'col-md col-8 text-truncate d-flex \
                     align-items-center justify-content-start \
                     justify-content-md-center'}>
                    {i == state.hoveredMenu && state.hoveredMenu != null ?
                        (<p className={'p-0 m-0  text-truncate \
                        animate__animated animate__flipInX'}>
                          {repo.description || 'No Description Available'}
                        </p>) :
                      (<p className={'p-0 m-0 text-start text-truncate \
                      animate__animated animate__flipInX'}>
                        {repo.name}
                      </p>)}
                  </div>
                </div>)) : (<>
              Loading...
                </>)}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
