import React from "react"
import { Link } from "react-router-dom"


const SwapNotice = () => (
	<div style={{ padding: "8px", backgroundColor: "#FADA5E", textAlign: "center" }}>
		<p style={{ margin: "0" }}><em>Action Required:</em> <span>OPQ → OPCT Token Swap</span> <Link to="./swap-information">Learn More</Link></p>
	</div>
);

export default SwapNotice;
