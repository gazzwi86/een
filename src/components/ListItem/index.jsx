import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Item = ({ children, editItem, removeItem }) => (
  <li className="item">
    <span className="item__name">{children}</span>

    <span className="result__remove-btn">
      <Button action={editItem}>
        <i className="item__edit-icon" />
        <span className="item__edit-text">Edit</span>
      </Button>

      <Button action={removeItem}>
        <i className="item__remove-icon" />
        <span className="item__remove-text">Remove</span>
      </Button>
    </span>
  </li>
);
Item.propTypes = {
  editItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};
export default Item;
