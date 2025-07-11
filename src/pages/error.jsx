import { Link, useRouteError } from "react-router-dom";
0
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <div>
                <Link to="/">back home</Link>
            </div>
        </div>
    );
}
