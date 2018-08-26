import * as React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Messages from "../molecules/Messages";
import PostForm from "../molecules/PostForm";

const Home = (props: any) => {
  return (
    <>
      <Header />
      <PostForm {...props} />
      <Messages {...props} />
      <Footer />
    </>
  );
};

export default Home;
