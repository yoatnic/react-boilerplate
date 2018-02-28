//@flow
import React from "react";
import Header from "../molecules/Header";
import Messages from "../molecules/Messages";
import PostForm from "../molecules/PostForm";
import Footer from "../molecules/Footer";

const Fragment = (React: any).Fragment;
const Home = (props: any) => {
  return (
    <Fragment>
      <Header />
      <PostForm {...props} />
      <Messages {...props} />
      <Footer />
    </Fragment>
  );
};

export default Home;
