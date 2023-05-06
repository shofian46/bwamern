import { React, Component } from 'react'

import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle'
import ItemDetails from 'json/itemDetails.json'

export default class DetailsPage extends Component() {
  componentDidMount() {
    window.title = "Details";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { PageTitle: "Home", PageHref: "" },
      { PageTitle: "House Details", PageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails}></PageDetailTitle>
      </>
    );
  }
}
