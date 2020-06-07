/* @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/core";

const styles = css`
  margin: 0.5rem 0.8rem;
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  font-weight: 700;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  &:hover {
    box-shadow: 0 5px 15px -10px rgba(31, 18, 53, 0.6);
    transform: translate(0px, -3px);
    transition: all 0.3s ease;
  }
`;

interface SortButtonProps {
  text: string;
  handleSort: any;
}

const SortButton: FC<SortButtonProps> = ({ text, handleSort }) => (
  <button css={styles} onClick={() => handleSort(text)}>
    {text.toUpperCase()} sort
  </button>
);

export default SortButton;
