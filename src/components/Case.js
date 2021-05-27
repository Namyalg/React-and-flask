import React, { Component } from 'react'
import './Header.css'

class Case extends Component {
    constructor(){
        super();
        this.state = {
            case : '',
            ispred : false,
            class : ''
        }
    }

    showCase(){
        console.log(this.state.case);
    }
    async predict(){
      console.log("In the predictions ")
      console.log(this.state.case);
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'    
          },
          body: JSON.stringify({ case: this.state.case})
        };
        
        const data = await fetch('http://localhost:5000/foo', requestOptions)   
        const response = await data.json();
        console.log(response.message);
        this.setState({
          ispred : true,
          class : response.message
        })
      }
  
    setCase = event => {
        this.setState({
            case : event.target.value
        })
        //console.log(this.state.case)
    }
        mystyle = {
        rows : 10,
        cols : 500,
        padding: "10px",
        fontFamily: "Arial"
      };
    
    render() {
        return (
            <div className="case">
                Enter the case content : 
                <br></br>
                <br></br>
                <textarea  style={this.mystyle} value={this.state.case} onChange={this.setCase}></textarea>
                <br></br>
                <br></br>
                <button onClick={() => this.showCase()}>Show case content</button>
                <br></br>
                <br></br>
                <button onClick={() => this.predict()}>Predict</button>
                {this.state.ispred ? <div><h2>The case prediction belongs to class {this.state.class}</h2></div> : null}
            </div>
        )
    }
}
export default Case;