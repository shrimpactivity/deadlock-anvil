import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import errorImg from "../assets/shiv.png";

export default function ErrorPage() {
    const error = useRouteError();
    let errorMessage = "";
    let errorStack = "";
    if (isRouteErrorResponse(error)) {
        if (error.status) {
            errorMessage += error.status + " ";
        }
        if (error.statusText) {
            errorMessage += error.statusText + " ";
        }
    } else if (error instanceof Error) {
        if (error.message) {
            errorMessage = error.message;
            errorStack = error.stack ?? "";
        } else {
            errorMessage = "An unexpected error occured";
        }
    } else {
        errorMessage = "An unexpected error occured";
    }
    errorMessage = errorMessage.trim();

    return (
        <div id="error-page">
            <h1>Error</h1>
            <h2>{errorMessage}</h2>
            {errorStack && <p>{errorStack}</p>}
            <img src={errorImg} />
        </div>
    );
}
