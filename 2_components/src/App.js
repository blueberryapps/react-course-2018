import React, { Component } from 'react';
import './App.css';

import Heading from  './solution/1_Heading/Heading';
import LoginForm from  './solution/2_LoginForm/LoginForm';
import StateLess from  './solution/3_StateLess/StateLess';
import Wrapper from  './solution/4_Wrapper/Wrapper';
import Tabs from  './solution/5_Tabs';
import tabsData from  './solution/5_Tabs/data';


class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Heading />
        </section>
        <section>
          <LoginForm />
        </section>
        <section>
          <StateLess name={"John"} />
        </section>
        <section>
          <Wrapper>
            Content in <b>Wrapper Component</b>
          </Wrapper>
        </section>
        <section>
          <Tabs tabs={tabsData} />
        </section>
      </div>
    );
  }
}

export default App;
