import styled from 'styled-components';

export const Card = styled.div.attrs({
  className: 'card border-primary mb-3',
})``;

export const CardHeader = styled.div.attrs({
  className: 'card-header',
})`
  font-size: 26px;
  font-weight: bold;
  color: #17a2b8;
`;

export const CardBody = styled.div.attrs({
  className: 'card-body',
})`
  font-size: 20px;
`;

export const CardTitle = styled.h5.attrs({
  className: 'card-title',
})``;

export const CardSubtitle = styled.h6.attrs({
  className: 'card-subtitle mb-2 text-muted',
})``;

export const CardText = styled.p.attrs({
  className: 'card-text',
})`
  margin-top: 10px;
`;

export const Small = styled.small.attrs({
  className: 'text-muted',
})`
  margin-top: 10px;
  display: block;
`;

export const ButtonContainer = styled.div`
  display: block;
  margin-top: 5px;
`;
