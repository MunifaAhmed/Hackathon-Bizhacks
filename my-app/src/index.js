import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom'

const skillShare = [
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/nav.jpg'

    },
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Mongo',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/nav.jpg'
    },
    {
        Name: 'Maher Zain',
        Expertise: 'Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/navy.jpg'
    },
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/navy.jpg'
    },
    {
        Name: 'Maher Zain',
        Expertise: ' Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/nav.jpg'
    },
    {
        Name: 'Maher Zain',
        Expertise: ' Mongo',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/navy.jpg'
    },
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/navy.jpg'
    },
    {
        Name: 'Maher Zain',
        Expertise: 'Javascript, Mongo, Web design',
        id: 0,
        description:'ldksfjlidsfd',
        Img: '/images/nav.jpg'
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
