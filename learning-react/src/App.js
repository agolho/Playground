import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
     super(props);
     this.handleChange = this.handleChange.bind(this);
     this.state = {value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Yusuf Bektas](https://ysfbkts.github.io)*'};
   }

   handleChange() {
     this.setState({value: this.refs.textarea.value});
   }

   spitOut() {
     var md = require('marked');
     return { __html: md(this.state.value) };
   }

  render() {
    return (
      <section className="App row">
      <div className='col-md-6'>
      <h1>Markdown Editor</h1>
       <textarea className='form-control' ref="textarea" onChange={this.handleChange} defaultValue={this.state.value} />
        </div>
        <div className='col-md-6'>
          <h1>Output</h1>
           <div className='output' dangerouslySetInnerHTML= {this.spitOut()}>
           </div>
       </div>
      </section>
    );
  }
}

export default App;
