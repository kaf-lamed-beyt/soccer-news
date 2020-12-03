import React from "react"
import news from "./style/news.module.css"
import { liveSports, headlines } from "../../news_data"
import { Container, Row, Col } from "reactstrap"
import Card from "../../../components/card"

const NewsLayout = () => {
  return (
    <Container>
        <section className={news.news_sect}>
        <h1>News Layout</h1>
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
            )
          })}
        </Row>
    </section>
    </Container>
  )
}

export default NewsLayout;
