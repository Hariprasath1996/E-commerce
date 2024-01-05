import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
const error = useRouteError();
console.error(error);

return (
    <div className="flex flex-col justify-center items-center w-screen h-screen " id="error-page" >
    <img src="./src/images/Error-image.avif" alt="404 Error image" />
    <p>
        <i className="text-xl font-bold">{error.statusText || error.message}</i>
    </p>
    </div>
);
}