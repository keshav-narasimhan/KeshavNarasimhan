  
import React from 'react';

const Courses = () => {
  return (
    <div style={{backgroundColor: 'black'}}>
      <div style={{
        fontSize: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '7vh'
      }}>
        <h1 style={{color: 'white'}}>Courses</h1>
      </div>
      <div style={{
        color: 'black',
        fontSize: 16,
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'normal',
        height: '10vh'
      }}>
        <p style={{fontSize: 20}}>
          <br /><br /><br /> 
          Electrical Engineering Courses:
          <ul style={{fontSize: 14}}>
            <li>
              <br />
                &ensp;-&emsp;<b>EE 302H (Intro to Electrical Engineering Honors)</b>
              <br /> <br />

              <p style={{fontSize: 12}}>
                &emsp;&emsp;&emsp;&bull; Introduction to basic circuit analysis using Kirchhoff's Laws, Mesh Current and Node Voltage Analysis, and Thevenin/Norton Equivalent Circuits <br/>
                &emsp;&emsp;&emsp;&bull; Analysis of operational amplifier circuits and their various applications <br />
                &emsp;&emsp;&emsp;&bull; Honors specific topics: two-port networks, diodes, transistors, and CMOS logic
              </p>
            </li>
            <li>
              <br />
              &ensp;-&emsp;<b>EE 411 (Circuit Theory)</b>
              <br /> <br />

              <p style={{fontSize: 12}}>
                &emsp;&emsp;&emsp;&bull; Review of operational amplifier circuits from EE 302H <br/>
                &emsp;&emsp;&emsp;&bull; Analysis of RC, RL, and RLC circuits containing capacitors, resistors, and inductors <br />
                &emsp;&emsp;&emsp;&bull; Introduction to Sinusoidal and AC analysis, phasors, complex power calculations, three-phase circuits, and transformers <br />
                &emsp;&emsp;&emsp;&bull; In depth study of two-port networks and filters
              </p>

            </li>
            <li>
              <br />
              &ensp;-&emsp;<b>EE 313 (Linear Systems and Signals)</b>
              <br /> <br />

              <p style={{fontSize: 12}}>
                &emsp;&emsp;&emsp;&bull; In depth study of LTI systems and their properties <br/>
                &emsp;&emsp;&emsp;&bull; Convolution of Continuous-Time and Discrete-Time Signals <br />
                &emsp;&emsp;&emsp;&bull; Fourier Series and Fourier Transform of Continuous-Time and Discrete-Time Signals <br />
                &emsp;&emsp;&emsp;&bull; Introduction to Filtering and Communication Systems
              </p>

            </li>
          </ul>
          <br />
          Computer Engineering Courses:
          <ul style={{fontSize: 14}}>
            <li>
              <br />
                &ensp;-&emsp;<b>EE 306 (Intro to Computing)</b>
              <br /> <br />

              <p style={{fontSize: 12}}>
                &emsp;&emsp;&emsp;&bull; Introduction to binary and hexadecimal numeric representations  <br/>
                &emsp;&emsp;&emsp;&bull; Introduction to Boolean Algebra and Digital Logic using gates and combinational logic circuits <br />
                &emsp;&emsp;&emsp;&bull; Analysis of Instruction Cycle and LC3 ISA <br />
                &emsp;&emsp;&emsp;&bull; Foundations of Assembly Language programming, including subroutines, interrupts, I/O, and data structures
              </p>
            </li>
            <li>
              <br />
              &ensp;-&emsp;<b>EE 319KH (Intro to Embedded Systems Honors)</b>
              <br /> <br />

              <p style={{fontSize: 12}}>
                &emsp;&emsp;&emsp;&bull; Understanding how computers and microcontrollers interact with the environment to form embedded systems <br/>
                &emsp;&emsp;&emsp;&bull; Introduction to ARM Cortex-M Assembly Language and C programming <br />
                &emsp;&emsp;&emsp;&bull; In depth study of the EK-TM4C123GXL microcontroller <br />
                &emsp;&emsp;&emsp;&bull; Continued study of interrupts, subroutines, variables, stack, and memory management <br />
                &emsp;&emsp;&emsp;&bull; Analog to Digital (ADC) Converters and Digital to Analog (DAC) Converters <br />
                &emsp;&emsp;&emsp;&bull; Process of debugging, synchronization, and sampling
              </p>
            </li>
            <li>
              <br />
              &ensp;-&emsp;<b>EE 312H (Software Design and Implementation I Honors)</b>
              <br /> <br />

              <p style={{fontSize: 12}}>
                &emsp;&emsp;&emsp;&bull; Introduction to C/C++ programming <br/>
                &emsp;&emsp;&emsp;&bull; Analysis of Heap and memory management <br />
                &emsp;&emsp;&emsp;&bull; Study of data structures such as linked lists, trees, stacks, and hashmaps  <br />
                &emsp;&emsp;&emsp;&bull; Basic algorithms and time-complexity analysis <br />
                &emsp;&emsp;&emsp;&bull; Introduction to OOP
              </p>
            </li>
          </ul>
          <br />
          Math Courses:
          <ul style={{fontSize: 14}}>
            <li>
              <br />
                &ensp;-&emsp;<b>M 408D (Sequences, Series, and Multivariable Calculus)</b>
              <br /> <br />

              <p style={{fontSize: 12}}>
                &emsp;&emsp;&emsp;&bull; Integration Techniques, such as U-substitution, Integration by Parts, and Partial Fraction Decomposition <br/>
                &emsp;&emsp;&emsp;&bull; Introduction to Differential Equations <br />
                &emsp;&emsp;&emsp;&bull; Analysis of sequences and series and evaluating convergence <br />
                &emsp;&emsp;&emsp;&bull; Brief introduction to partial derivatives and multiple integrals
              </p>
            </li>
            <li>
              <br />
              &ensp;-&emsp;<b>M 427J (Differential Equations and Linear Algebra)</b>
              <br /> <br />

              <p style={{fontSize: 12}}>
                &emsp;&emsp;&emsp;&bull; Solving first order and second order differential equations <br/>
                &emsp;&emsp;&emsp;&bull; Analyzing various methods to solving systems, such as eigenvalues and eigenvectors <br />
                &emsp;&emsp;&emsp;&bull; Introduction to partial differential equations and Fourier series
              </p>
            </li>
            <li>
              <br />
              &ensp;-&emsp;<b>M 325KH (Discrete Mathematics Honors)</b>
              <br /> <br />

              <p style={{fontSize: 12}}>
                &emsp;&emsp;&emsp;&bull; Introduction to Graph Theory, Group Theory, and Epsilon Delta Calculus <br/>
                &emsp;&emsp;&emsp;&bull; Inquiry-based learning approach by creating proofs to various theorems <br />
                &emsp;&emsp;&emsp;&bull; Develop strategies of thinking that can be employed to learn, discover, and perhaps even create, mathematics
              </p>
            </li>
          </ul>
          <br />
        </p>
      </div>
    </div>
  );
};

export default Courses;