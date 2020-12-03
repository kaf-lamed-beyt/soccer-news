import React from "react"
import news from "./style/news.module.css"
import { liveSports, headlines } from "../../news_data"
import { Container, Row, Col } from "reactstrap"
import Card from "../../../components/card"

const NewsLayout = () => {
    return (
        <section className={news.news_sect}>
            <Container>
            <h1>News Layout</h1>
            <Row>
                {headlines.map((headline, index) => {
                    return (
                        <Card key={index}>
                            
                        </Card>
                    )
                })}
            </Row>
            </Container>
        </section>
    )
}

export default NewsLayout