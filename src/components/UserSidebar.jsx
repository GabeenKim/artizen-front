import React from 'react';
import styled from 'styled-components';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


function UserSidebar({setSidebar}) {
    return (
        <Bar>
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              // maybe push to the route
              setSidebar(itemId);
            }}
            items={[
              {
                title: '회원 정보',
                itemId: '/info',
                // you can use your own custom Icon component as well
                // icon is optional
              },
              {
                title: '펀딩 목록',
                itemId: '/fundingList',
              },
              {
                title: '티켓 목록',
                itemId: '/ticketList'  
              },
              {
                title: '찜 목록',
                itemId: '/jjimList',
              },
            ]}
          />
        </Bar>
        
    );
}

const Bar = styled.div`
  top: 200px;
  width: 10rem;
  margin-left: 100px;
  height: 100%;
  position: relative;
  left: 150px;
  top: 1px;
  transform: translate(1em, 12rem); */
`;

export default UserSidebar;