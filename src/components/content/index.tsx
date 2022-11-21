import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ContentWrapper = styled.div`
  display: flex;
`;

function MainContent({ children }: Props): React.ReactElement {
  return <ContentWrapper>{children}</ContentWrapper>;
}

export default MainContent;
