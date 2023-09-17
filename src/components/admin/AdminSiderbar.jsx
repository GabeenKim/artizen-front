import React from 'react';
import styled from 'styled-components';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function AdminSiderbar({setSidebar}) {
    return (
        <Bar>
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/admin"
            onSelect={({itemId}) => {
              // maybe push to the route
              setSidebar(itemId);
            }}
            items={[
              {
                title: '홈',
                itemId: '/home',
              },
              {
                title: '프로젝트 승인',
                itemId: '/project',
              },
              {
                title: '수익률 분배',
                itemId: '/distribution',
              },
            ]}
          />
        </Bar>
        
    );
}

const Bar = styled.div`
  width: 12rem;
  margin-left: 100px;
  height: 100%;
  position: relative;
  left: 150px;
  top: 1px;
  transform: translate(1em, 12rem); 
`;

export default AdminSiderbar;