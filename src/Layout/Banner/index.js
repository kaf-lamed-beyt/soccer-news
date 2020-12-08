import React from "react";
import Grid from "@material-ui/core/Grid";
import banner from "./style/banner.module.css";
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <Grid item xs={12} lg={12} md={12}>
      <div className={banner.banner}>
        <div className={banner.banner_content}>
          <img
            src="/img/anthony-joshua.jpeg"
            alt="anthony joshua"
            className={banner.img}
          />
          <div className={banner.banner_details}>
            <div>
              <div className={banner.contestants}>
                <p className={banner.banner_sport}>Boxing</p>
                <h5>AJ Vs Pulev in front of 1,000 fans</h5>
              </div>
              <div className={banner.bookings}>
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
    </Grid>
  );
};

export default Banner;
