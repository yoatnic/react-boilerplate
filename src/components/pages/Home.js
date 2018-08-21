//@flow
import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Messages from "../molecules/Messages";
import PostForm from "../molecules/PostForm";

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
