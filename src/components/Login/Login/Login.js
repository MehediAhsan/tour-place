import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const {signIn, providerLogin, setLoading} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace:true});
            toast.success('Successfully Login');
        })
        .catch( error => {
            console.error(error);
            setError(error.message);
        })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then( result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true});
            toast.success('Successfully Login');
        })
        .catch( error => {
            console.error(error);
        })
        .finally( () => {
            setLoading(false);
        })
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
        .then( result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true});
            toast.success('Successfully Login');
        })
        .catch( error => {
            console.error(error);
        })
    }


    return (
        <div className='py-28'>
            <div className="md:w-96 max-w-md p-5 space-y-2 rounded text-gray-200 border border-rose-500 mx-auto my-5">
                <h1 className="text-3xl font-semibold text-center pb-2 text-rose-500">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-2 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md  text-gray-200 bg-gray-100" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block mb-2 text-sm">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border  text-gray-800 bg-gray-100 focus:dark:border-violet-400" required />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link rel="noopener noreferrer" href="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm  dark:bg-rose-400 font-semibold text-white">Login</button>
                    <p className='text-red-500'>
                        {error}
                    </p>
                </form>
                <div className="flex items-center pt-2 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-200">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="space-y-2 text-white">
                    <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 text-gray-400">
                        <FaGoogle className="w-5 h-5 fill-current"></FaGoogle>
                        <p>Login with Google</p>
                    </button>
                    <button onClick={handleGithubSignIn} aria-label="Login with GitHub" type="button" className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 text-gray-400">
                        <FaGithub className="w-5 h-5 fill-current"></FaGithub>
                        <p>Login with GitHub</p>
                    </button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<Link rel="noopener noreferrer" to="/register" className="hover:underline dark:text-violet-500">Sign up</Link>.
			    </p>
            </div>
        </div>
    );
};

export default Login;