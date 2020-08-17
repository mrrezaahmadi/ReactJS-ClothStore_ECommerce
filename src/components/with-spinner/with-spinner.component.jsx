import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherPorps }) => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	) : (
		<WrappedComponent {...otherPorps} />
	);
};

export default WithSpinner;
