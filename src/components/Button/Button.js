import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ text, backcolor, color, goto, opacity }) => {
  Button.propTypes = {
    text: PropTypes.string,
    backcolor: PropTypes.string,
    color: PropTypes.string,
    goto: PropTypes.string,
    opacity: PropTypes.string,
  };
  const navigate = useNavigate();
  return (
    <NaviButton
      backcolor={backcolor}
      color={color}
      opacity={opacity}
      onClick={() => {
        navigate(goto);
        window.location.reload();
      }}
    >
      {text}
    </NaviButton>
  );
};

const NaviButton = styled.button`
  padding: 25px 45px;
  border-radius: 20px;
  border: 1px solid #fff;
  font-size: 17px;
  font-weight: 700;
  background: ${(props) => props.backcolor};
  color: ${(props) => props.color};
  transition: background 0.2s ease-in;
  &:hover {
    background: ${(props) => props.opacity};
  }
`;

export default Button;
