import React from 'react';
import Typist from 'react-typist'; /* https://github.com/jstejada/react-typist */

const Typewriter = () => {
  return (
    <div className="typeWriter">
      <Typist>
        <span className="welcomeTxt">Hello, and welcome to my site!<br />
        In here, you will find work that I have done for web development, programming, and design.</span>
      </Typist>
    </div>
  );
}

export default Typewriter;
