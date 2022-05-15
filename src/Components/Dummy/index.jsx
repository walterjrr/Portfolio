import P from 'prop-types';
import * as Styled from './style';

export const Dummy = ({ children }) => {
  return (
    <Styled.Container>
      <h1>Dummy</h1>
    </Styled.Container>
  );
};

Dummy.propTypes = {
  children: P.node.isRequired,
};
