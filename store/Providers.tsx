"use client"

import { store } from "./store"
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
import 'aos/dist/aos.css';

const Providers = ({children}: {children: React.ReactNode}) => {

    useEffect(()=>{
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    },[])

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers