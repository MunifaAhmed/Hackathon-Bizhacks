import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom'

const skillShare = [
    {
        Name: 'Bill Gate',
        Expertise: 'Javascript, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/bill.jpeg'

    },
    {
        Name: 'Oprah Winfrey',
        Expertise: 'Javascript, Mongo',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/oprah.jpeg'
    },
    {
        Name: 'Priyanka Chopra',
        Expertise: 'Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/priyanka.jpeg'
    },
    {
        Name: 'Warren Baffet',
        Expertise: 'Javascript',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/warren.jpeg'
    },
    {
        Name: 'Marc Benioff',
        Expertise: ' Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/salesforce.jpeg'
    },
    {
        Name: 'Mark Z.',
        Expertise: ' Mongo',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/mark.jpeg'
    },
    {
        Name: 'Munifa Ahmed',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/munifa.jpeg'
    },
    {
        Name: 'Elon Musk',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/elon.jpeg'
    }
    
]



ReactDOM.render(
 <Router>
    <App skillShare ={skillShare} />
 </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
