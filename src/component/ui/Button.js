import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  color: #6e7dfd;
  background-color: transparent;
  cursor: pointer;
`;

function Button(props) {
  const { title, onClick } = props;

  return <StyleButton onClick={onClick}>{title || 'button'}</StyleButton>;
}

export default Button;
