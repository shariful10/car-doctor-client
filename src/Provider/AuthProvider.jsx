import React, { createContext, useEffect, useState } from "react";
import {
	getAuth,
	signOut,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	FacebookAuthProvider,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const facebookSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, fbProvider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
			if (currentUser && currentUser.email) {
				const loggedUser = {
					email: currentUser.email,
				};
				fetch("https://car-doctor-server-shariful10.vercel.app/jwt", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(loggedUser),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log("jwt response", data);
						// Warning: Local storage is not the best (second best place) to store access token
						localStorage.setItem("car-access-token", data.token);
						if (user) {
							alert("Successfully Login");
						}
					});
			} else {
				localStorage.removeItem("car-access-token");
			}
		});
		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = { user, loading, createUser, signIn, googleSignIn, facebookSignIn, logOut };

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
