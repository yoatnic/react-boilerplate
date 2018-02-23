import React from "react";
import Header from "../molecules/Header";
import Messages from "../molecules/Messages";
import PostForm from "../molecules/PostForm";
import Footer from "../molecules/Footer";

const Home = props => {
  return (
    <React.Fragment>
      <Header />
      <PostForm {...props} />
      <Messages {...props} />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
