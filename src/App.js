import React, { Component } from 'react';
import {Header, Footer, Body} from "./RCMC";
import {phHeader, phFooter, phBody} from "./pharmacy";

function App() {
  if (true){
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }

  else {
    return (
      <div>
        <phHeader />
        <phFooter />
        <phBody />
      </div>
    );
  }
}

export default App;

class App extends Component {
  constructor(props) {
    
  }
}