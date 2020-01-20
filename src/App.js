import React, { Component } from 'react';
import {Header, Footer, Body} from "./RCMC";
import {PhHeader, PhFooter, PhBody} from "./pharmacy";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'medical',
    };
  }
  
  renderHome(){
    return (
      <div>
      <Header />
      <Body onClick={(pageName) => this.changePage(pageName)}/>
      <Footer />
    </div>
    );
  }

  renderPharmacy(){
    return (
      <div>
        <PhHeader />
        <PhBody onClick={(pageName) => this.changePage(pageName)}/>
        <PhFooter />
    </div>
    );
  }

  renderCurrentPage() {
    switch(this.state.currentPage){
      case 'home':
      default:
        return this.renderHome();
      case 'pharmacy':
        return this.renderPharmacy();
    }
  }

  changePage(pageName) {
    this.setState({
      currentPage: pageName,
    });
  }

  render(){
    return(
      <div>
        {this.renderCurrentPage()}
      </div>
    );
  }
}
export default App;