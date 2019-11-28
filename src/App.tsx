import React from "react";
import Header from "./views/Header";
import Footer from "./views/Footer";
import { ToastContainer } from "react-toastify";
import { AppContextProvider } from "./common/Store";
import "react-toastify/dist/ReactToastify.css";



export default function App(props: any): JSX.Element {
 
  return (
    <React.Fragment>
       <AppContextProvider>
            <Header />
              <ToastContainer />
                {props.children}
            <Footer />
      </AppContextProvider> 
    </React.Fragment>
  );
}
