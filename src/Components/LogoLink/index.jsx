import P from 'prop-types';
import * as Styled from './style';
import { Heading } from '../Heading';

export const LogoLink = ({ text, srcImg = '', Link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={Link}>
        {srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span>}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  Link: P.string,
};
