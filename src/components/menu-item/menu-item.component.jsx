import React from "react";
import './menu-item.styles.scss'

function MenuItem({ title, size, imageUrl }) {
	return (
		<div className={`menu-item ${size}`}>
			<div
				className="background-image"
				style={{
					background: `url(${imageUrl})`,
				}}
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">Shop Now</span>
			</div>
		</div>
	);
}

export default MenuItem;
