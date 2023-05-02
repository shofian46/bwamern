import React, { Component } from "react";
// import { connect } from "react-redux";

import Header from "parts/Header";
import Hero from "parts/Hero";
import HomePage from "json/landingPage.json";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

// import { fetchPage } from "store/actions/page";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  // componentDidMount() {
  //   document.title = "Staycation | Home";
  //   window.scrollTo(0, 0);

  //   if (!this.props.page.landingPage)
  //     this.props.fetchPage(`/landing-page`, "landingPage");
  // }

  render() {
    const { page } = this.props;

    // if (!page.hasOwnProperty("landingPage")) return null;
    console.log(this.props);

    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={HomePage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={HomePage.mostPicked}
        />
        <Categories data={HomePage.category} />
        <Testimony data={HomePage.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default (LandingPage);
