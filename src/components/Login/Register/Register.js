import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL,email,password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            handleUpdateUserProfile(name, photoURL);
            navigate(from, {replace:true});
            toast.success('Registration completed successfully');
        })
        .catch( error => {
            console.error(error);
            setError(error.message);
        })

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then( () => {})
        .catch( error => {
            console.error(error);
        })
    }

    return (
        <div>
            <div className="w-full max-w-md p-8 space-y-3 rounded dark:bg-gray-900 dark:text-gray-100 mx-auto my-5">
                <h1 className="text-3xl font-semibold text-center pb-3">Sign up</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label className="block mb-2 text-sm">Full Name</label>
                        <input type="text" name="name" placeholder="Full Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Photo URL</label>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block mb-2 text-sm">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 font-semibold">Sign up</button>
                    <p className='text-red-500'>
                        {error}
                    </p>
                </form>      
                <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
				<Link rel="noopener noreferrer" to="/login" className="hover:underline dark:text-violet-400">Login</Link>.
			    </p>
            </div>
        </div>
    );
};

export default Register;