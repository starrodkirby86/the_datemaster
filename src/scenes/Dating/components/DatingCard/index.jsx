import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, List, Icon } from 'semantic-ui-react';
import { Transition } from 'react-transition-group';
import anime from 'animejs';
import idols from '../../../../res/idols/idols';
import DatingCardButtons from './components/DatingCardButtons';

export default class DatingCard extends React.Component {

  propTypes = {
    name: PropTypes.string.isRequired,
    kanji: PropTypes.string,
    image: PropTypes.string.isRequired,
    sign: PropTypes.string,
    hometown: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  };

  id = `DatingCard${_.snakeCase(this.props.name)}`;

  // react-transition-group calls this callback, which then utilizes anime.js to move into the screen.
  onEnter = () => {
    console.log('Doing entering animation');
    anime.timeline()
      .add({
        targets: `#${this.id}`,
        translateY: -250,
        opacity: 0,
      })
      .add({
        targets: `#${this.id}`,
        translateY: 0,
        opacity: 1,
        offset: 500,
      });
  };

  // react-transition-group calls this callback, which then utilizes anime.js to move out of screen.
  onExit = () => {
    console.log('Doing exit animation');
  };

  render() {
    const {name, kanji, image, sign, hometown, likes, bio} = this.props;
    return (
      <Transition in appear timeout={500} onEnter={this.onEnter}>
        <Card centered raised id={this.id} style={{ opacity: 0 }}>
          <Image src={image}/>
          <Card.Content textAlign="left">
            <Card.Header content={`${name} (${kanji})`}/>
            <List as={Card.Meta}>
              <List.Item>
                <Icon name="street view"/>
                <List.Content content={sign}/>
              </List.Item>
              <List.Item>
                <Icon name="puzzle"/>
                <List.Content content={likes}/>
              </List.Item>
              <List.Item>
                <Icon name="marker"/>
                <List.Content content={hometown}/>
              </List.Item>
            </List>
          </Card.Content>
          <Card.Content textAlign="left" content={bio}/>
          <Card.Content>
            <DatingCardButtons rejectHandler={null} starHandler={null} dateHandler={null}/>
          </Card.Content>
        </Card>
      </Transition>
    )
  }
}

DatingCard.defaultProps = {
  ...idols[0],
};