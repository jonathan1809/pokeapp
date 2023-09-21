import { ReactNode } from "react";
import styled from "styled-components";

export type PrimaryLayoutProps = {
  title?: string;
  children?: ReactNode;
};

const PrimaryLayout = (props: PrimaryLayoutProps) => {
  const { title, children } = props;

  return (
    <$Root>
      <$Container>
        {title && <$Title>{title}</$Title>}
        <$Content>{children}</$Content>
      </$Container>
    </$Root>
  );
};

const $Root = styled.div`
  flex: 1 0 0;
  display: flex;
`;

const $Container = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const $Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

const $Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  width: 100%;
`;

export default PrimaryLayout;
