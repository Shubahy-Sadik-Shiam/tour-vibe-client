import { Link, useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center gap-5 justify-center min-h-screen">
            <h2 className="text-6xl font-bold">Sorry</h2>
            <h2 className="text-5xl font-bold text-gray-300">404</h2>
            <h2 className="text-4xl font-bold text-red-400">Page Not Found</h2>
           <Link to="/"> <button className="btn btn-accent text-white">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;