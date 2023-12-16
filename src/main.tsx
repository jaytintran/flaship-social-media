import ReactDOM from "react-dom/client";
import App from "./App";
import {
    BrowserRouter,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    // BrowserRoter controls routing of entire app 
    <BrowserRouter>
        <App />
    </BrowserRouter>
)