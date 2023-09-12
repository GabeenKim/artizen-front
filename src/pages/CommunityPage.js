import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import '../App.css';
import ComTitlePage from './ComTitlePage';
import ComFundingPage from './ComFundingPage';
import ComSupportPage from './ComSupportPage';

function CommunityPage(props) {
  let options = {
    anchors: ['title', 'ranking1', 'ranking2', 'section'],
    navigation: true,
    scrollBar: false,
    delay: 700,
  };

  return (
    <SectionsContainer {...options}>
      <Section id="section1">
        <ComTitlePage />
      </Section>

      <Section id="section2">
        <ComFundingPage />
      </Section>
      <Section id="section3">
        <ComSupportPage />
      </Section>
      <Section>{/*footer 등등*/}</Section>
    </SectionsContainer>
  );
}

export default CommunityPage;
