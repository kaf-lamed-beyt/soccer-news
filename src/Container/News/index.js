import React from "react";
import news from "./style/news.module.css";
import { liveSports, headlines } from "../../news_data";
import { Row, Col } from "reactstrap";
import Card from "../../../components/card";
import { IoIosArrowForward } from "react-icons/io";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Banner from "../../Layout/Banner";

const NewsLayout = () => {
  return (
    <Grid>
      <section className={news.news_sect}>
        <Banner />
        <Grid container >
            {headlines.map((headline, index) => {
              return (
                <Grid item xs={12} lg={4} md={6} >
                  <Card key={index} className={news.card_item}>
                  <div className={news.content_area}>
                    <div className={news.img_cont}>
                    <img
                      src={headline.img}
                      alt="headline image"
                      className={news.headline_img}
                    />
                    </div>
                    <div className={news.details}>
                      <p className={news.sport}>{headline.sport}</p>
                      <p className={news.txt}>{headline.details}</p>
                    </div>
                  </div>
                </Card>
                </Grid>
              )
            })}
        </Grid>
        <Grid container>
          <section className={news.live}>
            <h3>Live on Sky</h3>
              {liveSports.map((sports, index) => {
                return (
                  <div key={index} id={news.card}>
                    <div className={news.live_content}>
                      <p className={news.sport}>{sports.name}</p>
                      <h4>{sports.title}</h4>
                      <p>{sports.status}</p>
                      <img src={sports.img} />
                      <div className={news.muted_txt}>
                        <p className={news.muted}>
                          Get Sky Sports <IoIosArrowForward />{" "}
                        </p>
                        <p className={news.mute}>
                          Get a Sky Sports Pass <IoIosArrowForward />{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </section>
        </Grid>
      </section>
    </Grid>
  );
};

export default NewsLayout;
