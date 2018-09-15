import styled from 'styled-components';

const Button = styled.button`
  border: ${({ flat, color }) => (flat ? `1px solid ${color}` : 'none')};
  color: ${({ color }) => (color ? color : 'white')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'lightgray')};
  font-size: ${({ fsize }) => fsize && fsize};
  padding: 0.5rem 1.5rem;
`;

export default Button;
