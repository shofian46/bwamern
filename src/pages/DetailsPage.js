import React, { Component } from "react";
// import Fade from "react-reveal/Fade";
// import { connect } from "react-redux";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
// import BookingForm from "parts/BookingForm";
// import Activities from "parts/Activities";
import ItemDetails from 'json/itemDetails';
// import Testimony from "parts/Testimony";
// import Footer from "parts/Footer";

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
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={ItemDetails} />
            </div>
            <div className="col-5">
              Booking Form
            </div>
          </div>
        </section>
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
