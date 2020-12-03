import React from "react"
import news from "./style/news.module.css"
import { liveSports, headlines } from "../../news_data"
import { Container, Row, Col } from "reactstrap"
import Card from "../../../components/card"
import { IoIosArrowForward } from "react-icons/io"

const NewsLayout = () => {
  return (
    <Container>
      <section className={news.news_sect}>
        <div className={news.banner}>
          <div className={news.banner_content}>
            <img
              src="/img/anthony-joshua.jpeg"
              alt="anthony joshua"
              className={news.img}
            />
            <div className={news.banner_details}>
              <div>
                <div className={news.contestants}>
                <p className={news.banner_sport}>Boxing</p> 
                  <h5>AJ Vs Pulev in front of 1,000 fans</h5>
                </div>
                <div className={news.bookings}>
                  <p>
                    Book Joshua VS Pulev now! <IoIosArrowForward />
                  </p>
                  <p>
                    Joshua VS Pulev: Booking info <IoIosArrowForward />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row>
          {headlines.map((headline, index) => {
            return (
              <Card key={index}>
                <div className={news.content_area}>
                  <img
                    src={headline.img}
                    alt="headline image"
                    className={news.headline_img}
                  />
                  <div className={news.details}>
                    <p className={news.sport}>{headline.sport}</p>
                    <p className={news.txt}>{headline.details}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </Row>
        <section className={news.live}>
          <h3>Live on Sky</h3>
          <Row>
            {liveSports.map((sports, index) => {
              return (
                <div key={index} id={news.card}>
                  <div className={news.live_content}>
                    <p className={news.sport}>{sports.name}</p>
                    <h4>{sports.title}</h4>
                    <p>{sports.status}</p>
                    <img src={sports.img} />
                    <p className={news.muted}>
                      Get Sky Sports <IoIosArrowForward />{" "}
                    </p>
                    <p className={news.mute}>
                      Get a Sky Sports Pass <IoIosArrowForward />{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </Row>
        </section>
      </section>
    </Container>
  );
};

export default NewsLayout;
