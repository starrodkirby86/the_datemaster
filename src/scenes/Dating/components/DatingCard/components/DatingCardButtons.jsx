import React from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'semantic-ui-react';
import anime from 'animejs';

class DatingCardButtons extends React.Component {
  handleRejection = () => {
    // Spoiler: You can't.

    // anime goes here

    this.props.rejectHandler();
  };

  handleStar = () => {

    // anime goes here

    this.props.starHandler();
  };

  handleDate = () => {

    // anime goes here

    this.dateHandler();
  };

  render() {
    return (
      <List size="massive" horizontal>
        <List.Item>
          <Button size="massive" basic color="red" icon="remove" circular onClick={this.handleRejection} />
        </List.Item>
        <List.Item>
          <Button size="massive" basic color="blue" icon="star" circular onClick={this.handleStar} />
        </List.Item>
        <List.Item>
          <Button size="massive" basic color="green" icon="heart" circular onClick={this.handleDate} />
        </List.Item>
      </List>
    );
  }

}


DatingCardButtons.propTypes = {
  rejectHandler: PropTypes.func.isRequired,
  starHandler: PropTypes.func.isRequired,
  dateHandler: PropTypes.func.isRequired,
};

export default DatingCardButtons;