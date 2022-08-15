import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // 2 ways to define a state of a class based component

  // constructor(props) {
  //   // tells js class to inherit the properties of parent js file
  //   super(props);
  //   // below is the way to define a state in class component
  //   this.state = { userLocationLatitude: null, errorMessage: '' };
  //   console.log('inside constructor');

  //   // //to get users current geo location
  //   // window.navigator.geolocation.getCurrentPosition(
  //   //   location => {
  //   //     console.log(location.coords.latitude);
  //   //     // below is the only way to update the state
  //   //     this.setState({ userLocationLatitude: location.coords.latitude });
  //   //   },
  //   //   err => {
  //   //     this.setState({ errorMessage: err.message });
  //   //   }
  //   // );
  // }

  // 2nd way to define state in class components
  state = { userLocationLatitude: null, errorMessage: '' };

  // runs only once
  componentDidMount() {
    // console.log('inside component did mount');
    //to get users current geo location
    window.navigator.geolocation.getCurrentPosition(
      location => {
        console.log(location.coords.latitude);
        // below is the only way to update the state
        this.setState({ userLocationLatitude: location.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // runs only when there is an update/change in the component
  componentDidUpdate() {
    // console.log('inside component did update');
  }

  // this will run if you want to un-mounth/clean up
  componentWillUnmount() {
    // console.log('inside component will un-mount');
  }

  // react needs render function always to render the jsx in the ui
  render() {
    // console.log('inside render');
    if (this.state.errorMessage !== '' && this.state.userLocationLatitude === null) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    if (this.state.userLocationLatitude !== null && this.state.errorMessage === '') {
      return <SeasonDisplay latitude={this.state.userLocationLatitude} />;
    }

    return <div>Loading....</div>;
  }
}

export default App;
