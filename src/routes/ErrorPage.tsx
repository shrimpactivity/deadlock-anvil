import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import errorImg from "../assets/shiv.png";

export default function ErrorPage() {
  const error = useRouteError();
  let errorStatus: number;
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText;
  } else {
    errorStatus = 404;
    errorMessage = "";
  }

  return (
    <div id="error-page">
      <h1>Error</h1>
      <h2>{errorStatus ? errorStatus + ": " : null}{errorMessage}</h2>
      <img src={errorImg} />
    </div>
  );
}