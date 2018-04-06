import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, List, Icon } from 'semantic-ui-react';
import idols from '../../../../res/idols/idols';
import DatingCardButtons from './components/DatingCardButtons';

DatingCard.propTypes = {
  name: PropTypes.string.isRequired,
  kanji: PropTypes.string,
  image: PropTypes.string.isRequired,
  sign: PropTypes.string,
  hometown: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default function DatingCard(props) {
  const { name, kanji, image, sign, hometown, likes, bio } = props;
  return (
    <Card centered raised>
      <Image src={image} />
      <Card.Content textAlign="left">
        <Card.Header content={`${name} (${kanji})`} />
          <List as={Card.Meta}>
            <List.Item>
              <Icon name="street view" />
              <List.Content content={sign} />
            </List.Item>
            <List.Item>
              <Icon name="puzzle" />
              <List.Content content={likes} />
            </List.Item>
            <List.Item>
              <Icon name="marker" />
              <List.Content content={hometown} />
            </List.Item>
          </List>
      </Card.Content>
      <Card.Content textAlign="left" content={bio} />
      <Card.Content>
        <DatingCardButtons rejectHandler={null} starHandler={null} dateHandler={null} />
      </Card.Content>
    </Card>
  )
}

DatingCard.defaultProps = {
  ...idols[0],
};