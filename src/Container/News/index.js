import React from "react"
import news from "./style/news.module.css"
import { liveSports, headlines } from "../../news_data"
import Card from "../../../components/card"
import { IoIosArrowForward } from "react-icons/io"
import Grid from "@material-ui/core/Grid"
import Banner from "../../Layout/Banner"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { setSportNews } from "../../store/actions"

const NewsLayout = () => {
  // news is the property of the initial state
  // that was set in the sporNews reducer of the
  const { sports } = useSelector(({ sportNews }) => sportNews)
  const dispatch = useDispatch()
  console.log(sports)

  React.useEffect(() => {
    const getSportNews = async () => {
      const newsResult = await axios(
        "https://skysportsapi.herokuapp.com/sky/getlatest/v1.0",
        {
          headers: {
            "Access-Control-Allow-Origin": "localhost:3000",
          },
        }
      )

      // console.log(newsResult.data)
      dispatch(sportNewsAction.setSportNews(newsResult.data))
    }

    getSportNews()
  }, [])

  return (
    <Grid>
      <section className={news.news_sect}>
        <Banner />
        <Grid container spacing={2}>
          {headlines.map((headline, index) => {
            return (
              <Grid item xs={12} lg={4} sm={6} key={index}>
                <Card className={news.card_item}>
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
              )
            })}
          </section>
        </Grid>
      </section>
    </Grid>
  )
}

export default NewsLayout
