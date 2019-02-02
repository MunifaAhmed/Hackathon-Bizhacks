import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route} from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  state = {
    skillShare:this.props.skillShare,
    filteredSkill:[],

  }

  // componentDidMount (){
  //   axios.get('http://localhost:8081/getskillshare')
  //     .then((response) => {
  //       this.setState({
  //         skillList: response.data.skillShare
  //       })
  //     })
  // }

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
        <Route path= '/skillshare' render={() => <SkillShare  skillShare={this.props.skillShare} />}/>
        <Route path='/:skillId' render={(routerProps) => <SkillDetails {...routerProps} skillShare={this.props.skillShare}/>} />
        
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
                <p>A space where skill is shared through effective knowledge management tool</p>
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
    const skillList = this.props.skillShare.map((skill, i) => {
      return <div className='col-lg-3 col-md-4 col-sm-8 col-xs-8' >
             <div className="card">
              <img src={skill.Img}   class="card-img-top" style={{"height": "220px"}} alt=""/>
                <div key={i} className="card-body" >
                  <Link to={'/' + skill.id}><h4>{skill.Name}</h4></Link>
                  <p>{skill.Expertise}</p>
                  <Link to=''><img src='./images/play.png'  alt="" /></Link>
                </div>
                </div>
             </div>
    })
    return (
      <div className="App">
        <h1 id='header'>Skills Share</h1>
        <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="What skills you are looking for?"/>
                <button type="submit" class="searchButton" >
                  Search
              </button>
            </div>
          </div>

          <div>
          <div className='container'>
            <div className='row'>
                {skillList}
            </div>
          </div>
        </div>
        </div>
    
    );
  }
}


class SkillDetails extends Component {
  render(){
    let skillId = this.props.match.params.skillId
    let skill = this.props.skillShare[skillId]
    return(
          <div className='container'>
            <div className='skillDetail'>
                <p>Title: </p>
                <p>Artist: </p>
                <p>Description:</p>
              </div>
            </div>
    )
  }
}
export default App;
