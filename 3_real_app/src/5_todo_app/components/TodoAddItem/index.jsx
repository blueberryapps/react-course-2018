import React from 'react';
import PropTypes from 'prop-types';

export default class AddItem extends React.Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onChange = (e) => {
    const value = e.target.value;

    this.setState({
      value,
    });
  };

  handleSubmit = (e) => {
    const { value } = this.state;
    if (e.keyCode === 13 && value) {
      const { add } = this.props;

      add(value);
      this.setState({
        value: '',
      });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <label>New Item
          <input
            type="text"
            onChange={this.onChange}
            value={value}
            onKeyDown={this.handleSubmit}
            required
          />
        </label>
      </div>
    );
  }
}

