import { Image } from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";

import { IEpisodesProps } from "./episodes.props";
import { PageTitle } from "../../components";
import { IEpisode_MOCK } from "../../data";

import styles from "./episodes.module.scss";

export const Episodes: FC<IEpisodesProps> = () => {
  const [episodes, setEpisodes] = useState([]);

  console.log('episodes', episodes);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product/product/')
      .then((response) => response.json())
      .then((data) => setEpisodes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <div className={styles.product_header}>
      <div className={styles.product_name}>
        <PageTitle>Episodes</PageTitle>
      </div>
    </div>
    <div className={styles.product_grid}>
      {IEpisode_MOCK.map((episodes) => (
        <div className={styles.product_card} key={episodes.id}>
          <div className={styles.product_thumbnail}>
            <Image src={episodes?.image} alt="" className={styles.product_img} />
            <div className={styles.product_mask}></div>
          </div>
          <span className={styles.episode_name}>{episodes.number}</span>
          <div className={styles.buttonWrapper}>
            <a target="_blank" rel="noreferrer" href={episodes.linkYouTube} className={styles.productButtonYoutube}>
              <i className="icon-social-youtube"></i>
              YouTube
            </a>
            <a target="_blank" rel="noreferrer" href={episodes.linkSpotify} className={styles.productButtonSpotify}>
              <i className="icon-social-spotify"></i>
              Spotify
            </a>
          </div>
        </div>
      ))}
    </div>
  </motion.section>);
};
