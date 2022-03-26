import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question-container'>
            <div className='question-1'>
                <h3>How React Works?</h3>
                    Before we know how React works, we need to know some common features of React such as:
                    <ul>
                        <li>
                            <span className='bold'>React is just the view: </span>
                            That means, React components change what the user sees.
                        </li>
                        <li>
                            <span className='bold'>React is simple: </span>
                            Beacuse within a React component we have to think about four things at a time. They are data, lifecycle, events, JSX.
                        </li>
                        <li>
                            <span className='bold'>React has a declarative UI structure.</span>
                        </li>
                        <li><span className='bold'>Time and data.</span></li>
                        <li><span className='bold'>Performance matters with React.</span></li>
                        <li><span className='bold'>React has the right level of abstraction:</span><br></br>
                            Through this abstraction we can find:-
                            <ol>
                                <li>Implement components specific to the target.</li>
                                <li>Implement a React renderer that can perform the platform-specific operations under the hood.</li>
                                <li>Profit.</li>
                            </ol>
                        </li>
                    </ul>
            </div>
            <div className='question-2'>
                <h3>What are the difference between props and state?</h3>
                    <span className='bold'>The difference between props and state are given below. Which are written down by points:</span>
                    <ol>
                        <li>Array, object and function all of the mentioned things we can send via props. On the other hand ,declare the state in the parent component and pass event handler to the child.</li>
                        <li>The Data is passed from one component to another. With the state the data is passed within the component only.</li>
                        <li>The props can't be modified and the state can be modified.</li>
                        <li>Props are used to pass data from one component to another. And the state is a local data storage that is local to the component only and cannot be passed to other components.</li>
                        <li>For parent-child communication, simply pass props. Use state to store the data on current page and use props to pass data and event handlers down to any child components.</li>
                    </ol>
            </div>
        </div>
    );
};

export default Question;