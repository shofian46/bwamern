import React, { Component } from "react";
import Fade from "react-reveal/Fade";
// import { connect } from "react-redux";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
// import Activities from "parts/Activities";
import itemDetails from 'json/itemDetails';
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

// import { checkoutBooking } from "store/actions/checkout";
// import { fetchPage } from "store/actions/page";

class DetailsPage extends Component {
  componentDidMount() {
    document.title = "Yogyacation | Details";
    window.scrollTo(0, 0);
  }

  render() {

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Village Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
        <FeaturedImage data={itemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={itemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={itemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={itemDetails.categories} />
        <Testimony data={itemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   page: state.page,
// });

export default (
  DetailsPage
);
