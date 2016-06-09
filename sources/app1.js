import React, {Component}from 'react';
import {render}from 'react-dom';

class Hello extends Component {
  render() {
    var place = "Prueba";
    return ( < h1 > Hola Mundo {
        place
      } < /h1>);
    }
  }

  // class GroceryList extends Component{
  //   render() {
  //     return(
  //       <ul>
  //         <ListItem quantity="1" name="Pan" />
  //         <ListItem quantity="5" name="Jugo" />
  //         <ListItem quantity="12" name="Huevos" />
  //       </ul>
  //     );
  //   }
  // }

  class GroceryList extends Component {
    render() {
      return(
        <ul>
          <ListItem quantity="25">Pan</ListItem>
            <ListItem quantity="5">Naranjas</ListItem>
              <ListItem quantity="25">Huevos</ListItem>
        </ul>
      );
    }
  }
//
// class ListItem extends Component {
//   render() {
//     return(
//       <li>
//         {this.props.quantity} x {this.props.name}
//       </li>
//     );
//   }
// }
class ListItem extends Component {
  render() {
    return(
      <li>
        {this.props.quantity} x {this.props.children}
      </li>
    );
  }
}


  render( < GroceryList / > , document.getElementById('root'));
