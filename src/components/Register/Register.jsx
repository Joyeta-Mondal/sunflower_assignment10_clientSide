import { signOut, updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import auth from '../../firebase/firebase.init';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        photoUrl: '',
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    // const [verificationMessage, setVerificationMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        setErrorMessage('');
        // setVerificationMessage('');

        // Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter.
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        // Validate password
        if (!passwordRegex.test(formData.password)) {
            setErrorMessage(
                'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter'
            );
            return;
        }

        // Create user using Auth Provider
         createUser(formData.email, formData.password)
        .then(userCredential => {
            updateProfile(auth.currentUser, {
                displayName: formData.username,
                photoURL: formData.photoUrl
            }).catch(error => {
                toast.error('Error updating user profile:', error.code, error.message);
            });

            // Explicitly log the user out after registration
            signOut(auth)
                .catch(error => {
                    toast.error('Error logging out:', error.code, error.message);
                });

            setSuccess(true);
            toast.success('User registered successfully!');
            setFormData({
                email: '',
                password: '',
                username: '',
                photoUrl: ''
            });
        })
        .catch(error => {
            toast.error('Error creating user:', error.code, error.message);
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen my-6">
            <Helmet>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 64 64">
      <linearGradient id="R_FDZw81mQ~I9YaM19jQpa_Wm9BpxflIpY0_gr1" x1="23.45" x2="23.45" y1="13.887" y2="57" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#R_FDZw81mQ~I9YaM19jQpa_Wm9BpxflIpY0_gr1)" points="7,35.316 23.547,57 39.9,57 7,13.887"></polygon><linearGradient id="R_FDZw81mQ~I9YaM19jQpb_Wm9BpxflIpY0_gr2" x1="46.721" x2="46.721" y1="15.06" y2="42" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#R_FDZw81mQ~I9YaM19jQpb_Wm9BpxflIpY0_gr2)" points="52.795,42 57,36.489 57,15.06 36.442,42"></polygon><linearGradient id="R_FDZw81mQ~I9YaM19jQpc_Wm9BpxflIpY0_gr3" x1="32" x2="32" y1="12.887" y2="58" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#R_FDZw81mQ~I9YaM19jQpc_Wm9BpxflIpY0_gr3)" d="M39.899,58H23.547c-0.312,0-0.605-0.146-0.795-0.394L6.205,35.923	C6.072,35.749,6,35.535,6,35.316v-21.43c0-0.429,0.273-0.81,0.68-0.947c0.405-0.137,0.855-0.001,1.115,0.341l32.899,43.113	c0.23,0.302,0.27,0.709,0.102,1.05C40.627,57.784,40.279,58,39.899,58z M24.042,56h13.837L8,16.846v18.133L24.042,56z M52.795,43	H36.442c-0.38,0-0.728-0.216-0.896-0.557c-0.168-0.341-0.129-0.748,0.102-1.05l20.558-26.94c0.26-0.342,0.71-0.476,1.115-0.341	C57.727,14.25,58,14.631,58,15.06v21.43c0,0.219-0.072,0.433-0.205,0.606l-4.205,5.511C53.4,42.854,53.106,43,52.795,43z M38.463,41	H52.3l3.7-4.849V18.019L38.463,41z"></path>
      </svg>
                <title>𝙑𝙞𝙨𝙖 𝙉𝙖𝙫𝙞𝙜𝙖𝙩𝙤𝙧 | Register</title>
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Create an Account</h2>
                <hr className='my-4'></hr>
                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            autoComplete='name'
                            required
                            placeholder='Enter a username'
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-600">
                            Avatar
                        </label>
                        <input
                            type="text"
                            name="photoUrl"
                            value={formData.photoUrl}
                            onChange={handleChange}
                            autoComplete='photo'
                            required
                            placeholder='Enter a photo URL'
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete='email'
                            required
                            placeholder='Enter a valid e-mail'
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            autoComplete='new-password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder='Enter a strong password'
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-4 top-6 flex items-center text-gray-600 hover:text-gray-800"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <span onClick={() => navigate("/login")} className="text-blue-500 hover:underline">
                        Log in
                    </span>
                </p>

                {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
                {success && <p className="text-sm text-green-500">User registered successfully</p>}
                {/* {verificationMessage && <p className="text-sm text-blue-500">{verificationMessage}</p>} */}
            </div>
        </div>
    );
};

export default Register;