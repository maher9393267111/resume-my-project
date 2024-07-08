import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
I am Ahmad, a software developer originally from South Africa.
I have been working in the industry for over 15 years and currently specialise in mobile development.
</p>`;
const IndexDark = () => {
  return (
    <Layout bg={"blured"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
        <link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          <div
            className="slide"
            style={{ backgroundImage: "url(https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png)", backgroundColor: "#000" }}
          />
          <div className="title">Mohammed Jumah</div>
          <TypingAnimation />
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ultracoolbru">
              <span className="fa fa-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/ultracoolbru">
              <span className="fa fa-twitter" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/ultracoolbru">
              <span className="fa fa-github" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/11984602/edward-whitehead">
              <span className="fa fa-stack-overflow" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a target="_blank" rel="noreferrer" href="resume/Mohammed Jumah - Professional Resume.pdf" className="lnk">
              <span className="text">Download CV</span>
              <span class="ion ion-ios-cloud-download"></span>
            </a>
            <a target="_blank" rel="noreferrer" href="https://t.me/ultracoolbru" className="lnk discover">
              <span className="text">Contact Me</span>
              <span class="ion ion-paper-airplane"></span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          {/* <Pricing /> */}
          <FunFact />
          {/* <Clients /> */}
          <Quote />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          {/* <Testimonials /> */}
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;
