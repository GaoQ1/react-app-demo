import React, { PropTypes } from 'react';

import styles from './styles.css';

function Button(props) {
  const className = props.className ? props.className : styles.button;

  let button = (
    <a className={`${className} ${styles.button}`} href={props.href} onClick={props.onClick}>{props.children}</a>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <button className={className} onClick={props.handleRoute} >{props.children}</button>
    );
  }

  return (
    <div className={styles.buttonWrapper}>
      {button}
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
