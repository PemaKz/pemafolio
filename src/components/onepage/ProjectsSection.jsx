import React, {useEffect, useState} from 'react';
import Section from './Section';
import Config from '../../config.json';

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

  return (
    <Section width={100} height={100} color="#19142a" id="projects">
      <div className='container h-100'>
        <div className='d-flex align-items-center justify-content-center h-100'>
          <h2 className={'text-white text-center mb-5 align-self-start \
          position-absolute mt-5'}>
            Projects
          </h2>
          <div className={`flex-column d-flex w-100 h-50 \
          text-white overflow-auto`}>
            {state.repositories ?
              state.repositories.map((repo, i) => (
                <div key={repo.id} className={`rounded bg-project \
                my-3 row m-0 mx-3 py-3`}
                onMouseEnter={() => handleProjectSelect(i)}
                onMouseLeave={handleProjectDeSelect}>
                  <div className='col-md-auto col-4'>
                    <p className='p-0 m-0 text-wrap text-center'>
                      Updated at
                    </p>
                    <p className='p-0 m-0 text-center'>
                      {repo.updated_at.split('-')[2].split('T')[0] + '-'}
                      {repo.updated_at.split('-')[1] + '-'}
                      {repo.updated_at.split('-')[0]}
                    </p>
                  </div>
                  <div className='col-md col-8 '>
                    <div className='row h-100'>
                      <div className={'col-md col-8 d-flex align-items-center \
                      justify-content-center'}>
                        <p className='p-0 m-0 text-start'>
                          {i == state.hoveredMenu && state.hoveredMenu != null ?
                          repo.description ||
                          'No Description Available' : repo.name}
                        </p>
                      </div>
                      <div className={'col-md-auto col-4 ms-auto text-center \
                       d-flex align-items-center justify-content-end'}>
                        <a target="_blank" rel="noreferrer" href={`https://github.com/${repo.html_url}`}
                          className="text-decoration-none text-white">
                          Ver...
                        </a>
                      </div>
                    </div>
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
