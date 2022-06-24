import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
  console.log(props);
  return (<div
    id={props.id || ''}
    style={{
      height: `${props.height || 100}vh`,
      maxWidth: `${props.width || 100}vw`,
      backgroundColor: `${props.color || '#212529'}`,
      overflow: 'hidden',
    }}>
    {props.children || ''}
  </div>);
};

Section.propTypes = {
  children: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  id: PropTypes.string,
};

export default Section;
