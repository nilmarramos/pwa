import React, { Component } from 'react';
import { Link } from "@magento/venia-drivers";
import classify from "../../classify";
import defaultClasses from "./home.css";

class Home extends Component {
  render() {
    const {
      classes
    } = this.props;
    return React.createElement("section", {
      className: classes.Home
    }, React.createElement("div", {
      className: classes.category
    }, React.createElement("div", {
      className: classes.categoryImg
    }, React.createElement(Link, {
      to: "/venia-tops.html"
    }, React.createElement("img", {
      src: "/images/top.png",
      alt: "category",
      className: classes.image
    }))), React.createElement("div", {
      className: classes.categoryImg
    }, React.createElement(Link, {
      to: "/venia-accessories.html"
    }, React.createElement("img", {
      src: "/images/accessories.png",
      alt: "category",
      className: classes.image
    }))), React.createElement("div", {
      className: classes.categoryImg
    }, React.createElement(Link, {
      to: "/venia-dresses.html"
    }, React.createElement("img", {
      src: "/images/dresses.png",
      alt: "category",
      className: classes.image
    }))), React.createElement("div", {
      className: classes.categoryImg
    }, React.createElement(Link, {
      to: "/shop-the-look.html"
    }, React.createElement("img", {
      src: "/images/collection.png",
      alt: "category",
      className: classes.image
    })))), React.createElement("div", {
      className: classes.features
    }, React.createElement("h1", {
      className: classes.title
    }, "Featured Products"), React.createElement("div", {
      className: classes.category
    }, React.createElement("div", {
      className: classes.categoryImg
    }, React.createElement(Link, {
      to: "/serena-blouse.html"
    }, React.createElement("img", {
      src: "/images/serena-blouse.png",
      alt: "category",
      className: classes.image
    })), React.createElement("div", {
      className: classes.items
    }, React.createElement("div", {
      className: classes.itemTitle
    }, "Serena Blouse"), React.createElement("div", {
      className: classes.itemPrice
    }, "\u20AC62.19"))), React.createElement("div", {
      className: classes.categoryImg
    }, React.createElement(Link, {
      to: "/echo-sweater.html"
    }, React.createElement("img", {
      src: "/images/echo-sweater.png",
      alt: "category",
      className: classes.image
    })), React.createElement("div", {
      className: classes.items
    }, React.createElement("div", {
      className: classes.itemTitle
    }, "Echo Sweater"), React.createElement("div", {
      className: classes.itemPrice
    }, "\u20AC55.12"))), React.createElement("div", {
      className: classes.categoryImg
    }, React.createElement(Link, {
      to: "/jillian-top.html"
    }, React.createElement("img", {
      src: "/images/jillian-top.png",
      alt: "category",
      className: classes.image
    })), React.createElement("div", {
      className: classes.items
    }, React.createElement("div", {
      className: classes.itemTitle
    }, "Jillian Top"), React.createElement("div", {
      className: classes.itemPrice
    }, "\u20AC40.99"))), React.createElement("div", {
      className: classes.categoryImg
    }, React.createElement(Link, {
      to: "/hanna-sweater.html"
    }, React.createElement("img", {
      src: "/images/hanna-sweater.png",
      alt: "category",
      className: classes.image
    })), React.createElement("div", {
      className: classes.items
    }, React.createElement("div", {
      className: classes.itemTitle
    }, "Hanna Sweater"), React.createElement("div", {
      className: classes.itemPrice
    }, "\u20AC69.26"))))));
  }

}

export default classify(defaultClasses)(Home);
//# sourceMappingURL=home.js.map