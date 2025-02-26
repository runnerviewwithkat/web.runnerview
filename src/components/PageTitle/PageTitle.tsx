import React, { FC } from "react";

import styles from "./PageTitle.module.scss";
import { IPageTitleProps } from "./PageTitle.props";

export const PageTitle: FC<IPageTitleProps> = ({ children }) => <div className={styles.title}>{children}</div>;
