import React from "react";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import {NativeRouter, Routes, Route} from "react-router-native";
import SignIn from "./SignInView";
import RepositoryDetails from "./RepositoryDetails";
import ReviewForm from "./ReviewForm";
import SignUpForm from "./SignUpForm";
import UserReviews from "./UserReviews";

const Main = () => {
    return (
        <NativeRouter>
            <AppBar></AppBar>
            <Routes>
                <Route path="/" exact element={<RepositoryList />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUpForm />} />
                <Route path="myReviews" element={<UserReviews />} />
                <Route path="/repo/:repoId" element={<RepositoryDetails />} />
                <Route path="/createReview" element={<ReviewForm />} />
            </Routes>
        </NativeRouter>
    );
};

export default Main;