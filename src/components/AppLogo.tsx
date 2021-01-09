import React from 'react';
import styled from 'styled-components';
import APP_PARAMS from '../utils/app-params'

const AppLogo: React.FC = () => {
  return (
    <Root>
        {APP_PARAMS.APP_IMG_LOGO && <img src={APP_PARAMS.APP_IMG_LOGO} alt={APP_PARAMS.APP_TITLE || 'Match Logo'} />}
        {APP_PARAMS.APP_TITLE && <Title>{APP_PARAMS.APP_TITLE}</Title>}
    </Root> 
  );
};

const Root = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    left: 16px;
    height: 120px;
    width: 100%;
    img {
      max-width: 40%;
      object-fit: contain;
    }  
`;

const Title = styled.div`
    padding: 16px;
    font-weight: 700;
    align-self: center;
    font-size: larger;
`;

export default AppLogo;
