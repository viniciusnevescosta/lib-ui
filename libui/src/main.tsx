import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* <App /> */}
		<h1 className="text-blue-600">Hello, World!</h1>
	</StrictMode>,
);
