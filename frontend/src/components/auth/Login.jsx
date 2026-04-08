import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });

    // Inline message from server (e.g., "Please verify your email before login")
    const [serverMessage, setServerMessage] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, user } = useSelector(store => store.auth);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        // clear server message if user edits form
        setServerMessage("");
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            dispatch(setLoading(true));
            setServerMessage("");

            const res = await axios.post(
                `${USER_API_END_POINT}/login`,
                input,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            );

            // ✅ Login success
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
                navigate("/");
            }

        } catch (error) {
            const message = error.response?.data?.message || "Login failed";

            // 🔐 EMAIL VERIFICATION CASE: backend returns "Please verify your email before login"
            if (message.toLowerCase().includes("verify your email")) {
                toast.warning(message);
                setServerMessage(message);
            } else {
                toast.error(message);
                setServerMessage("");
            }

        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div>
            <Navbar />

            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form
                    onSubmit={submitHandler}
                    className='w-1/2 border border-gray-200 rounded-md p-4 my-10'
                >
                    <h1 className='font-bold text-xl mb-5'>Login</h1>

                    {/* Email */}
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            autoComplete="off"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            required
                        />
                    </div>

                    {/* Forgot password */}
                    <div className="text-right mb-2">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-blue-600"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Role */}
                    <RadioGroup className="flex items-center gap-4 my-5">
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="role"
                                value="student"
                                checked={input.role === 'student'}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                                required
                            />
                            <Label>Student</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="role"
                                value="recruiter"
                                checked={input.role === 'recruiter'}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                                required
                            />
                            <Label>Recruiter</Label>
                        </div>
                    </RadioGroup>

                    {/* Button */}
                    {
                        loading ? (
                            <Button className="w-full my-4" disabled>
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                Please wait
                            </Button>
                        ) : (
                            <Button type="submit" className="w-full my-4">
                                Login
                            </Button>
                        )
                    }

                    {/* Inline server message (visible until user edits) */}
                    {serverMessage && (
                        <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 text-yellow-900 rounded">
                            {serverMessage}
                            <div className="mt-2 text-sm">
                                <span>Check your inbox for the verification email. If you don't see it, check spam/junk.</span>
                            </div>
                        </div>
                    )}

                    <span className='text-sm mt-4 block'>
                        Don&apos;t have an account?{" "}
                        <Link to="/signup" className='text-blue-600'>
                            Signup
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Login;
