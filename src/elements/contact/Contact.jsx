import React, { Component } from "react"
import emailjs from "emailjs-com"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

class Contact extends Component {
  handleClick = () => {
    this.setState({ open: true })
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    this.setState({ open: false })
  }
  constructor(props) {
    super(props)
    this.state = {
      rnName: "",
      rnEmail: "",
      rnSubject: "",
      rnMessage: "",
      open: false,
    }
  }
  sendEmail = (e) => {
    e.preventDefault()
    if (this.state.rnName && this.state.rnEmail) {
      emailjs
        .send(
          "service_oc8qznf",
          "template_oc0q9be",
          {
            rnEmail: this.state.rnEmail,
            rnSubject: this.state.rnSubject,
            rnMessage: this.state.rnMessage,
            rnName: this.state.rnName,
          },
          "user_HDJ1SCLZ6I6ByO7Ey8D36"
        )
        .then(
          (result) => {
            this.handleClick()
          },
          (error) => {
            console.log(error.text)
          }
        )
      this.setState({ rnName: "", rnEmail: "", rnSubject: "", rnMessage: "" })
    } else {
      alert("Please fill in the contact form before submitting")
    }
  }
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <center>
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">{this.props.contactTitle}</h2>
                <p className="description">
                  I am available for full time, part time and freelance work.
                  Connect with me via email:
                  <a href="mailto:othmanosx@gmail.com">
                    {" "}
                    othmanosx@gmail.com
                  </a>{" "}
                </p>
              </div>
              <div className="form-wrapper">
                <form onSubmit={this.sendEmail}>
                  <label
                    style={{ float: "left", width: "48%" }}
                    htmlFor="item01"
                  >
                    <input
                      type="text"
                      name="name"
                      id="item01"
                      value={this.state.rnName}
                      onChange={(e) => {
                        this.setState({ rnName: e.target.value })
                      }}
                      placeholder="Your Name *"
                    />
                  </label>

                  <label
                    style={{ float: "right", width: "48%" }}
                    htmlFor="item02"
                  >
                    <input
                      type="email"
                      name="email"
                      id="item02"
                      value={this.state.rnEmail}
                      onChange={(e) => {
                        this.setState({ rnEmail: e.target.value })
                      }}
                      placeholder="Your email *"
                    />
                  </label>

                  <label htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      id="item03"
                      value={this.state.rnSubject}
                      onChange={(e) => {
                        this.setState({ rnSubject: e.target.value })
                      }}
                      placeholder="Write a Subject"
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={this.state.rnMessage}
                      onChange={(e) => {
                        this.setState({ rnMessage: e.target.value })
                      }}
                      placeholder="Your Message"
                    />
                  </label>
                  <button
                    className="rn-btn btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
        <Snackbar
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity="success">
            Email sent!
          </Alert>
        </Snackbar>
      </div>
    )
  }
}
export default Contact
