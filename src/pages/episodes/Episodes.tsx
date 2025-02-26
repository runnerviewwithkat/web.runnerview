import {Image, Skeleton} from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC } from "react";

import { IEpisodesProps } from "./episodes.props";
import { PageTitle } from "../../components";

import styles from "./episodes.module.scss";
import {useEpisodes} from "./query";

export const Episodes: FC<IEpisodesProps> = () => {
  const { data: episodes, isLoading, error } = useEpisodes();
  console.log('isLoading', isLoading)
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <div className={styles.product_header}>
      <div className={styles.product_name}>
        <PageTitle>Episodes</PageTitle>
      </div>
    </div>
    <div className={styles.product_grid}>
      {isLoading && <Skeleton className={styles.product_card}/>}
      {episodes?.map((episodes: any) => (
        <div className={styles.product_card} key={episodes.id}>
          <div className={styles.product_thumbnail}>
            <Image src={episodes?.image} alt="" className={styles.product_img} />
            <div className={styles.product_mask}></div>
          </div>
          <span className={styles.episode_name}>{episodes.title}</span>
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
