import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import idols from '../../../../res/idols/idols';

DatingCard.propTypes = {
  name: PropTypes.string.isRequired,
  kanji: PropTypes.string,
  image: PropTypes.string.isRequired,
  sign: PropTypes.string,
  hometown: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
}

export default function DatingCard(props) {
  const { name, kanji, image, sign, hometown, likes, bio } = props;
  return (
    <Card
      centered
      raised
      image={image}
      header={`${name} (${kanji})`}
      meta={`${sign} from ${hometown}`}
      description={bio}
      extra={likes}
    />
  )
}

DatingCard.defaultProps = {
  ...idols[0],
};