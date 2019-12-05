import React, { Component } from 'react';
import marked from 'marked';
import './App.css';
import { sampleText } from './sampleText'

class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount () {
    const text = localStorage.getItem('myText')
    if(text != ''){
      this.setState({ text })
    }
  }

  componentDidUpdate () {
    const {text} = this.state
    localStorage.setItem('myText', text);
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({
      text
    })
  }

  renderText = text =>{ 
    const __html = marked(text, { sanitize: true})
    return {__html}
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this.handleChange}
              className="form-control"
              rows="35"
              value={this.state.text}>
            </textarea>
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={ this.renderText(this.state.text) }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
