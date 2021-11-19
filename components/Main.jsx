import React from "react";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import {NativeRouter, Routes, Route} from "react-router-native";
import SignIn from "./SignInView";

const Main = () => {
    return (
        <NativeRouter>
            <AppBar></AppBar>
            <Routes>
                <Route path="/" exact element={<RepositoryList />} />
                <Route path="/signIn" element={<SignIn />} />
            </Routes>
        </NativeRouter>
    );
};

export default Main;