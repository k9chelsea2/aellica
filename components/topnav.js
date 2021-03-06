import React from 'react';
import styles from '../styles/topnav.module.css';

const Topnav = () => {
	return (
		<>
			<div className={styles.topnav}>
				<a className={styles.link} href="javascript:void(0);">About</a>
			</div>
		</>
	)
}

export default Topnav;