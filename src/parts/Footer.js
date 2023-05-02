import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
  return (
    <footer>
      <Fade bottom>
        <div className="container">
          <Fade bottom delay={300}>
            <div className="row">
              <div className="col-auto" style={{ width: 350 }}>
                <IconText />
                <p className="brand-tagline">
                  We kaboom your beauty holiday instantly and memorable.
                </p>
              </div>
              <div className="col-auto mr-5">
                <h6 className="mt-2">For Beinners</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Button type="link" href="/register">
                      New Account
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/properties">
                      Start Booking a Room
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/use-payments">
                      Use Payments
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="col-2 mr-5">
                <h6 className="mt-2">Explore Us</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Button type="link" href="/careers">
                      Our Careers
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/privacy">
                      Privacy
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/terms">
                      Terms & Conditions
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <h6 className="mt-2">Connect Us</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Button
                      isExternal
                      type="link"
                      href="mailto:shofianal28@gmail.com"
                    >
                      support@yogyacation.id
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button isExternal type="link" href="tel:+622122081996">
                      0855 - 9146 - 7429
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <span>Yogyacation, Gunung kidul, Yogyakarta</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col text-center copyrights">
                Copyright 2019 • All rights reserved • Staycation
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
    </footer>
  );
}
