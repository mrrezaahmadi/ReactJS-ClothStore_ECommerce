import React from "react";
import Directory from "../../components/directory-menu/directory-menu.component";

// import "./homepage.styles.scss";
import { HamePageContainer } from "./homepage.styles";


function HomePage() {
	return (
		<HamePageContainer>
			<Directory />
		</HamePageContainer>
	);
}

export default HomePage;
