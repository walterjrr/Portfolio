import P from 'prop-types';
import * as Styled from './style';

export const MenuLink = ({ children, Link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={Link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  Link: P.string.isRequired,
  newTab: P.bool,
};
