import React from "react"
import Slider from "react-slick"
import * as Icon from "react-feather"

import ClientImg1 from "../../images/client-image/client1.jpg"
import ClientImg2 from "../../images/client-image/client2.jpg"
import ClientImg3 from "../../images/client-image/client3.jpg"
import ClientImg4 from "../../images/client-image/client4.jpg"
import ClientImg5 from "../../images/client-image/client5.jpg"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const NextArrow = props => {
  const { onClick } = props
  return (
    <button className="next-arrow slick-arrow" onClick={onClick}>
      <Icon.ArrowRight />
    </button>
  )
}

const PrevArrow = props => {
  const { onClick } = props
  return (
    <button className="prev-arrow slick-arrow" onClick={onClick}>
      <Icon.ArrowLeft />
    </button>
  )
}

class Feedback extends React.Component {
  state = {
    imagesSlider: null,
    thumbnailsSlider: null,
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0,
  }

  componentDidMount() {
    this.setState({
      imagesSlider: this.slider1,
      thumbnailsSlider: this.slider2,
    })
  }

  renderSliderFullContent = () => {
    return DEFAULT_PROPS.map(({ name, profession, image, content }) => {
      return (
        <div key={name}>
          <div className="item">
            <div className="single-feedback">
              <div className="client-img">
                <img src={image} alt="client" />
              </div>

              <h3>{name}</h3>
              <span>{profession}</span>
              <p>{content}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  renderSliderImages = () => {
    return DEFAULT_PROPS.map(({ name, image }) => {
      return (
        <div key={name}>
          <div className="item">
            <div className="img-fill">
              <img src={image} alt="client" />
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    const sliderSettings1 = {
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      fade: true,
      autoplay: true,
      asNavFor: this.state.thumbnailsSlider,
      draggable: false,
      arrows: false,
      nextArrow: false,
      prevArrow: false,
    }

    const sliderSettings2 = {
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      cssEase: "linear",
      autoplay: true,
      centerMode: true,
      draggable: false,
      focusOnSelect: true,
      asNavFor: this.state.imagesSlider,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current }),
    }

    return (
      <section className="feedback-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>What users Saying</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="feedback-slides">
            <div className="client-feedback">
              <div>
                <Slider
                  ref={slider => (this.slider1 = slider)}
                  {...sliderSettings1}
                >
                  {this.renderSliderFullContent()}
                </Slider>
              </div>
            </div>

            <div className="client-thumbnails">
              <div>
                <Slider
                  ref={slider => (this.slider2 = slider)}
                  {...sliderSettings2}
                >
                  {this.renderSliderImages()}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </section>
    )
  }
}

const DEFAULT_PROPS = [
  {
    name: "David Gale",
    profession: "Web Developer",
    image: ClientImg1,
    content:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Matt Damon",
    profession: "Software Engineer",
    image: ClientImg2,
    content:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Nicky Parsons",
    profession: "Fictional Character",
    image: ClientImg3,
    content:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jason Momoa",
    profession: "American Actor",
    image: ClientImg4,
    content:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Gennady Korotkevich",
    profession: "Sport Programmer",
    image: ClientImg5,
    content:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Petr Mitrichev",
    profession: "Russian Programmer",
    image: ClientImg1,
    content:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Reid W. Barton",
    profession: "Mathematics",
    image: ClientImg2,
    content:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lisa Sauermann",
    profession: "Mathematician",
    image: ClientImg3,
    content:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

export default Feedback
