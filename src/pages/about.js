  
import React from 'react';
//import Logo from './logo512.png'

const About = () => {
  return (
    <div style={{backgroundColor: 'black'}}>
      <div style={{
        fontSize: 25, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '7vh'
      }}>
        <h1 style={{color: 'white'}}>About Me</h1>
      </div>
      <div style={{
        color: 'black',
        fontSize: 16,
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'normal',
        height: '10vh'
      }}>
        <p>
          <br /> <br /> <br /> <br />
          My name is Keshav Narasimhan and I'm currently a sophomore Electrical and Computer Engineering
          student at the University of Texas at Austin. I am part of the Engineering Honors Program, looking to 
          specialize in the Software or Computer Architecture/Embedded Systems tracks.
          <br /><br /><br />
          Outside of computer programming and pursuing my career interests in technology, I enjoy spending time on other
          hobbies. A big passion of mine has always been playing sports, whether it be basketball, soccer, football, or my
          personal favorite, tennis. I also love to read, mystery/thriller novels being my favorite. If you ask me, you
          can't go wrong with a good Dan Brown novel. I am also passionate about photography. I enjoy taking pictures
          of local wildlife on walks and bike rides. But most importantly, I enjoy spending quality time with my close friends
          and family.
        </p>
      </div>
    </div>
  );
};

export default About;