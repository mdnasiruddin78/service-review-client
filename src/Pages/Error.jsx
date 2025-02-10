import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Helmet>
                <title>ERROR-PAGE</title>
            </Helmet>
            <h1 className="text-7xl font-bold text-blue-600">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
            <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
                Go Home
            </Link>
        </div>
    );
};

export default Error;