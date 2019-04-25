import React, { Component } from 'react';
import { Link } from 'src/drivers';
import classify from 'src/classify';

import defaultClasses from './home.css';

class Home extends Component {

  render() {
    const { classes } = this.props

    return (
      <section className={classes.Home}>
        <div className={classes.category}>
          <div className={classes.categoryImg}>
            <Link to="/venia-tops.html">
              <img src="/images/top.png" alt="category" className={classes.image} />
            </Link>
          </div>
          <div className={classes.categoryImg}>
            <Link to="/venia-accessories.html">
              <img src="/images/accessories.png" alt="category" className={classes.image} />
            </Link>
          </div>
          <div className={classes.categoryImg}>
            <Link to="/venia-dresses.html">
              <img src="/images/dresses.png" alt="category" className={classes.image} />
            </Link>
          </div>
          <div className={classes.categoryImg}>
            <Link to="/shop-the-look.html">
              <img src="/images/collection.png" alt="category" className={classes.image} />
            </Link>
          </div>
        </div>
                {/*----FEATURES----*/}
        <div className={classes.features}>
          <h1 className={classes.title}>Featured Products</h1>
          <div className={classes.category}>
            <div className={classes.categoryImg}>
              <Link to="/serena-blouse.html">
                <img src="/images/serena-blouse.png" alt="category" className={classes.image} />
              </Link>
              <div className={classes.items}>
                <div className={classes.itemTitle}>Serena Blouse</div>
                <div className={classes.itemPrice}>€62.19</div>
              </div>
            </div>
            <div className={classes.categoryImg}>
              <Link to="/echo-sweater.html">
                <img src="/images/echo-sweater.png" alt="category" className={classes.image} />
              </Link>
              <div className={classes.items}>
                <div className={classes.itemTitle}>Echo Sweater</div>
                <div className={classes.itemPrice}>€55.12</div>
              </div>
            </div>
            <div className={classes.categoryImg}>
              <Link to="/jillian-top.html">
                <img src="/images/jillian-top.png" alt="category" className={classes.image} />
              </Link>
              <div className={classes.items}>
                <div className={classes.itemTitle}>Jillian Top</div>
                <div className={classes.itemPrice}>€40.99</div>
              </div>
            </div>
            <div className={classes.categoryImg}>
              <Link to="/hanna-sweater.html">
                <img src="/images/hanna-sweater.png" alt="category" className={classes.image} />
              </Link>
              <div className={classes.items}>
                <div className={classes.itemTitle}>Hanna Sweater</div>
                <div className={classes.itemPrice}>€69.26</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default classify(defaultClasses)(Home)
