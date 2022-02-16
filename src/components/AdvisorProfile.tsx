import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

type CategoryType = {
  sys: { id: string };
  displayName: string;
  avatarUrl?: { title: string; url: string } | null;
}

type SkillType = {
  sys: { id: string };
  displayName: string;
}

type ServiceType = {
  sys: { id: string };
  name: string;
}

type AdvisorProfileType = {
  sys: { id: string; publishedAt: string };
  displayName: string;
  email?: string | null;
  phone?: string | null;
  status?: string;
  avatarUrl?: { title: string; url: string } | null;
  categoriesCollection: {
    items: CategoryType[];
  };
  skillsCollection: {
    items: SkillType[];
  };
  servicesCollection: {
    items: ServiceType[];
  }
}

type AdvisorProfileProps = {
  advisor: AdvisorProfileType
}

const Container = styled.div`
  border: 1px solid #08a1a0;
  border-radius: 5px;
  padding: 15px;
  width: 450px;
`;

const Content = styled.div``;

const DisplayName = styled.div`
  color: rgb(240, 128, 51);
  font-size: 25px;
  font-weight: 500;
`;

const Text = styled.div``;

const AdvisorProfile = ({ advisor }: AdvisorProfileProps) => {
  return (
    <Container>
      <Avatar alt={advisor.avatarUrl?.title} src={advisor.avatarUrl?.url} />
      <Content>
        <DisplayName>{advisor.displayName}</DisplayName>
        <Text>{advisor.email}</Text>
        <Text>{advisor.phone}</Text>
        <Text>{advisor.status}</Text>
      </Content>
    </Container>
  );
}

export default AdvisorProfile;
