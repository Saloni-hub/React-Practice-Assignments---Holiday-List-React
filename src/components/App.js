import React, { Component, useState } from "react";
import '../styles/App.css';

class Listings extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return(
      <ol>
        {/* <li key='location1'>{this.props.name[0].name}</li>
        <li key='location1'>{this.props.name[3].name}</li>
        <li key='location2'>{this.props.name[5].name}</li>
        <li key='location3'>{this.props.name[9].name}</li>
        <li key='location4'>{this.props.name[10].name}</li>
        <li key='location5'>{this.props.name[11].name}</li>
        <li key='location6'>{this.props.name[12].name}</li>
        <li key='location7'>{this.props.name[13].name}</li>
        <li key='location8'>{this.props.name[14].name}</li>
        <li key='location9'>{this.props.name[18].name}</li>
        <li key='location10'>{this.props.name[19].name}</li>
        <li key='location11'>{this.props.name[23].name}</li>
        <li key='location12'>{this.props.name[24].name}</li>
        <li key='location13'>{this.props.name[25].name}</li>
        <li key='location14'>{this.props.name[26].name}</li>
        <li key='location15'>{this.props.name[27].name}</li>
        <li key='location16'>{this.props.name[28].name}</li> */}
        <li key='location1'>Goa</li>
        <li key='location2'>Darjeeling</li>
        <li key='location3'>Lonavala</li>
        {/* <li key='location4'>Munnar</li>
        <li key='location5'>Leh Ladakh</li>
        <li key='location6'>Goa</li>
        <li key='location7'>Agra</li>
        <li key='location8'>Dalhousie</li>
        <li key='location9'>Coorg</li>
        <li key='location10'>Varanasai</li>
        <li key='location11'>Jaipur</li>
        <li key='location12'>Kahna National Park</li>
        <li key='location13'>Amritsar</li>
        <li key='location14'>Mussoorie</li>
        <li key='location15'>Mount Abu</li>
        <li key='location16'>Tirupati</li> */}
        {/* let listItems = this.cityList.filter((ele)=>ele.country === "India")
        {listItems.map((ele,index)=><li key={"location"+(index+1)}>{ele.name}</li>)} */}
      </ol>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    { name: 'Brandenburg Gate', country: 'Germany' },
    { name: 'Reichstag Building', country: 'Germany' },
    { name: 'Museum Island', country: 'Germany' },
    { name: 'Munnar', country: 'India' },
    { name: 'Leh Ladakh', country: 'India' },
    { name: 'Goa', country: 'India' },
    { name: 'Agra', country: 'India' },
    { name: 'Dalhousie', country: 'India' },
    { name: 'Coorg', country: 'India' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Milan', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Varanasai', country: 'India' },
    { name: 'Jaipur', country: 'India' },
    { name: 'The Hofburg', country: 'Austria' },
    { name: 'Belvedere Palace', country: 'Austria' },
    { name: 'St. Stephen Cathedral', country: 'Austria' },
    { name: 'Kahna National Park', country: 'India' },
    { name: 'Amritsar', country: 'India' },
    { name: 'Mussoorie', country: 'India' },
    { name: 'Mount Abu', country: 'India' },
    { name: 'Tirupati', country: 'India' },
    ]
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <Listings />
        {/* <Listings name={this.cityList}/> */}
      </div>
    )
  }
}


export default App;