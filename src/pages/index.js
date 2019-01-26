import React from 'react';
import Layout from '../components/layout';
import MainHeader from '../components/MainHeader';
import EventDirectoryTeaser from '../components/projects/EventDirectory';
import UnserWein2018Teaser from '../components/projects/UnserWein2018';
import GschwantnerOrgTeaser from '../components/projects/GschwantnerOrg';
import TastingManagerTeaser from '../components/projects/TastingManager';
import LandhausAltlengbachTeaser from '../components/projects/LandhausAltlengbach';
import BrindlmayerTeaser from '../components/projects/Brindlmayer';
import SumeraTeaser from '../components/projects/Sumera';
import AlexandraKleinheinzTeaser from '../components/projects/AlexandraKleinheinz';
import Unserwein2014Teaser from '../components/projects/UnserWein2014';
import BGKSTeaser from '../components/projects/BGKS';
import BrigitteKattTeaser from '../components/projects/BrigitteKatt';
import Intro from '../components/Intro';
import Footer from '../components/Footer';

// function Post(props) {
//   return <Box pb={4} as="section" {...props} />;
// }

function IndexPage() {
  return (
    <Layout>
      <MainHeader nextId="about" />

      <Intro id="about" nextId="projects" />

      <div id="projects">
        <EventDirectoryTeaser
          reverse
          id="bottlebooks"
          previousId="about"
          nextId="unserwein-2018"
        />
        <UnserWein2018Teaser
          id="unserwein-2018"
          previousId="bottlebooks"
          nextId="gschwantner-org"
        />
        <GschwantnerOrgTeaser
          reverse
          id="gschwantner-org"
          previousId="unserwein-2018"
          nextId="tasting-manager"
        />
        <TastingManagerTeaser
          id="tasting-manager"
          previousId="gschwantner-org"
          nextId="landhaus-altlengbach"
        />
        <LandhausAltlengbachTeaser
          reverse
          id="landhaus-altlengbach"
          previousId="tasting-manager"
          nextId="brindlmayer"
        />
        <BrindlmayerTeaser
          id="brindlmayer"
          previousId="landhaus-altlengbach"
          nextId="sumera"
        />
        <SumeraTeaser
          reverse
          id="sumera"
          previousId="brindlmayer"
          nextId="alexandra-kleinheinz"
        />
        <AlexandraKleinheinzTeaser
          id="alexandra-kleinheinz"
          previousId="sumera"
          nextId="unserwein-2014"
        />
        <Unserwein2014Teaser
          reverse
          id="unserwein-2014"
          previousId="alexandra-kleinheinz"
          nextId="bgks"
        />
        <BGKSTeaser
          id="bgks"
          previousId="unserwein-2014"
          nextId="brigitte-katt"
        />
        <BrigitteKattTeaser
          reverse
          id="brigitte-katt"
          previousId="bgks"
          nextId="blog"
        />
      </div>

      <div id="blog">
        {/* <Container as="section" py={4}>
        <H2>Recent Posts</H2>
        <Post>First Post</Post>
        <Post>Second Post</Post>
        <Post>Third Post</Post>
      </Container> */}
      </div>

      <Footer id="footer" />
    </Layout>
  );
}
export default IndexPage;
