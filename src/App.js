import ReactGA from "react-ga";
import './App.css';
import { Component } from 'react';
import $ from "jquery";
import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contatc";
import Resume from "./component/Resume";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resume_data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({
          resumeData : data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main}/>
        <Contact data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
      </div>
    )
  }
}

export default App;
