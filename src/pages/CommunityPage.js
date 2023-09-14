import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import '../App.css';
import ComTitlePage from './ComTitlePage';
import ComFundingPage from './ComFundingPage';
import ComSupportPage from './ComSupportPage';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';

function CommunityPage(props) {
  let options = {
    anchors: ['title', 'ranking1', 'ranking2'],
    navigation: true,
    scrollBar: false,
    delay: 700,
  };

  return (
    <SectionsContainer {...options}>
      <Section id="section1">
        <MenuBar />
        <ComTitlePage />
      </Section>

      <Section id="section2">
        <ComFundingPage />
      </Section>
      <Section id="section3">
        <ComSupportPage />
        <Footer />
      </Section>
    </SectionsContainer>
  );
}

export default CommunityPage;
