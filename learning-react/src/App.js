import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
     super(props);
     this.handleChange = this.handleChange.bind(this);
     this.state = {value: 'Heading \n======= \nSub-heading\n ----------- \n### Another deeper heading\n \n Paragraphs are separated by a blank line. \n Text attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .'};
   }

   handleChange() {
     this.setState({value: this.refs.textarea.value});
   }

   getRawMarkup() {
     var md = require('marked');
     return { __html: md(this.state.value) };
   }

  render() {
    return (
      <section className="App row">
      <div className="input col-md-6">
      <h3>Input</h3>
      <textarea
        onChange={this.handleChange}
        ref="textarea"
        defaultValue={this.state.value} />
      </div>
      <div className="output col-md-6">
      <h3>Output</h3>
      <div
        className="content"
        dangerouslySetInnerHTML={this.getRawMarkup()}
      />
      </div>
      </section>
    );
  }
}

export default App;
