import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{
  constructor(props){
      super(props);
      this.state = {apiResponse:""};
  }

  callAPI(){
    fetch("http:/localhost:9000/test")
      .then(res=>res.json())
      .then(res=>this.setState(apiResponse:res))
      .catch(err=>err)
  }
  componentDidMount(){
    this.callAPI();
  }

  render(){
        return (
          <div className="App">
          <p className="App-intro">{this.state.apiResponse}</p>
          </div>
        );
  }

}

export default App;
