import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
           <Link to='/home'> HOME </Link>
           <Link to='/aboutus'> About Us</Link>
           <Link to='/skillShare'> Skill Share</Link>
          </ul>
        </nav>

        <Switch>
        <Route path= '/home' exact component= {Home}/>
        <Route path= '/aboutus' component= {AboutUs}/>
        <Route path= '/skillshare' component= {SkillShare}/>
        </Switch>
      </div>
    );
  }
}


class Home extends Component {
  render() {
    return (
      <div className="App">

      <h1 id='header'>Online Bullentin Board</h1>
        <div id='homep1'>
          <div className='row'>
            <div className='col'>
                <p>A space where skill sharing through knowledge management </p>
              </div> 
            </div>
          </div>
        </div>
    );
  }
}

class AboutUs extends Component {
  render() {
    return (
      <div className="App">
        <h1>About page</h1>
      </div>
    );
  }
}

class SkillShare extends Component {
  render() {
    return (
      <div className="App">
        <h1 id='header'>Skill Share</h1>
        <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                <button type="submit" class="searchButton">
                  Search
              </button>
            </div>
          </div>
          

          <div className='row'>
            <div className='col'>
          <div class="card" />
          <img class="card-img-top" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            <div className='col'>
          <div class="card" />
          <img class="card-img-top" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>

          <div className='container'>
            <div className='col'>
          <div class="card" />
          <img class="card-img-top" src='../public/images/hat01.jpg' alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>

             <div className='col'>
          <div class="card" />
          <img class="card-img-top" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
           
             <div className='col'>
          <div class="card" />
          <img class="card-img-top" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
          </div>
          </div>


          
        </div>
    
      
      
    );
  }
}




export default App;
