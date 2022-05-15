import P from 'prop-types';
import * as Styled from './style';

export const TextContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

TextContainer.propTypes = {
  children: P.node.isRequired,
};
