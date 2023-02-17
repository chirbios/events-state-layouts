import React, {Component} from 'react';
import ListView from '../List/ListView'
import CardsView from '../Card/CardsView';
import IconSwitch from '../IconSwitch/IconSwitch';

class Store extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "Nike Metcon 2",
          price: "130",
          color: "red",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
          name: "Nike Metcon 2",
          price: "130",
          color: "green",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
          name: "Nike Metcon 2",
          price: "130",
          color: "blue",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
          name: "Nike Metcon 2",
          price: "130",
          color: "black",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
          name: "Nike free run",
          price: "170",
          color: "black",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
          name: "Nike Metcon 3",
          price: "150",
          color: "green",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }
      ],
      controlIcon: "view_list",
      storeView: "list",
    };
  }
  
  onSwitch = (event) => {
    let icon = event.target.textContent;
    let view;
    icon === "view_list" ? (icon = "view_module") : (icon = "view_list");
    icon === "view_list" ? (view = "list") : (view = "cards");
    this.setState({ controlIcon: icon, storeView: view });
  }
  
  render() {
    return (
      <div className={"container"}>
        <IconSwitch  
          icon={this.state.controlIcon}
          onSwitch={this.onSwitch}
        />
        {this.state.storeView === "list" ? (
          <CardsView cards={this.state.products} />
        ) : (
          <ListView items={this.state.products} />
        )}
      </div>
    );
  }
}

export default Store