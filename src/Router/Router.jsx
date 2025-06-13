import Login from "../Component/Login";
import Register from "../Component/Register";
import MainLayout from "../MainLayout/MainLayout";
import AddCar from "../Pages/AddCar";
import AvailableCar from "../Pages/AvailableCar";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router";
import MyCars from "../Pages/MyCars";
import MyBookings from "../Pages/MyBookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AvailableCarDetails from "../Component/AvailableCarDetails";
import MyBookingUpdate from "../Component/MyBookingUpdate";
import MyBookingDetails from "../Component/MyBookingDetails";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase.init";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                index: true,
                Component: Home
            },
            {
                path: 'availableCar',
                loader: () => fetch('https://assainment-11-server-side.vercel.app/available-cars'),
                element: <AvailableCar></AvailableCar>
            },
            {
                path: 'addCar',
                element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
            },
            {
                path: 'myCars',
                loader: () => {
                    return new Promise((resolve, reject) => {
                        const auth = getAuth(app);

                        const unsubscribe = onAuthStateChanged(auth, async (user) => {
                            if (!user) {
                                reject(new Response("Unauthorized", { status: 401 }));
                                return;
                            }

                            try {
                                const token = await user.getIdToken();

                                const res = await fetch(`https://assainment-11-server-side.vercel.app/cars?email=${user.email}`, {
                                    headers: {
                                        Authorization: `Bearer ${token}`,
                                    },
                                });

                                const data = await res.json();
                                resolve(data);
                            } catch (error) {
                                reject(error);
                            } finally {
                                unsubscribe();
                            }
                        });
                    });
                },

                element: <PrivateRoute><MyCars></MyCars></PrivateRoute>
            },
            {
                path: 'mybookings',
                hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>,
                // loader: ()=>fetch('https://assainment-11-server-side.vercel.app/bookings'),
                loader: () => {
                    return new Promise((resolve, reject) => {
                        const auth = getAuth(app);

                        const unsubscribe = onAuthStateChanged(auth, async (user) => {
                            if (!user) {
                                reject(new Response("Unauthorized", { status: 401 }));
                                return;
                            }

                            try {
                                const token = await user.getIdToken();

                                const res = await fetch(`https://assainment-11-server-side.vercel.app/bookings?email=${user.email}`, {
                                    headers: {
                                        Authorization: `Bearer ${token}`,
                                    },
                                });

                                if (!res.ok) {
                                    reject(new Response("Forbidden or Error", { status: res.status }));
                                    return;
                                }

                                const data = await res.json();
                                resolve(data);
                            } catch (error) {
                                reject(error);
                            } finally {
                                unsubscribe(); 
                            }
                        });
                    });
                },
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: 'availablecardetails/:id',
                hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>,
                loader: ({ params }) => fetch(`https://assainment-11-server-side.vercel.app/cars/${params.id}`),
                element: <AvailableCarDetails></AvailableCarDetails>
            },
            {
                path: 'mybookingupdate/:id',
                loader: ({ params }) => fetch(`https://assainment-11-server-side.vercel.app/bookings/${params.id}`),
                element: <MyBookingUpdate></MyBookingUpdate>
            },
            {
                path: 'mybookingsDetails/:id',
                loader: ({ params }) => fetch(`https://assainment-11-server-side.vercel.app/bookings/${params.id}`),
                element: <MyBookingDetails></MyBookingDetails>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;