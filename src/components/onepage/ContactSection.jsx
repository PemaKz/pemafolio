import React, {useState} from 'react';
import Section from './Section';

const ContactSection = () => {
  const [state, setState] = useState({
    email: '',
    subject: '',
    msg: ''});

  const handleSendContact = (e) => {
    e.preventDefault();
  };

  const handleSetEmail = (e) => setState({email: e.target.value});
  const handleSetSubject = (e) => setState({subject: e.target.value});
  const handleSetMSG = (e) => setState({msg: e.target.value});

  return (
    <Section width={100} height={100} color="#2a2344" id="contact">
      <div className='container h-100'>
        <div className='row m-0 p-0 h-100'>
          <div className={'col-md-6 d-flex align-items-center \
           justify-content-center'}>
            <form className='d-flex flex-column'>
              <input onChange={handleSetEmail} value={state.email} />
              <input onChange={handleSetSubject} value={state.subject} />
              <textarea onChange={handleSetMSG} value={state.msg} />
              <button
                onClick={handleSendContact}
                type='submit'
                className='btn btn-primary'>
                  Enviar
              </button>
            </form>
          </div>
          <div className={'col-md-6 d-md-flex d-none align-items-center \
           justify-content-center'}>
            <h2 className='text-white'>Contactame</h2>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
