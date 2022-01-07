import React, { FC, ReactChild, ReactChildren } from 'react';
import classnames from 'classnames';

interface LinkProps {
  active: boolean;
  setFilter: () => void;
  children: ReactChild | ReactChildren;
}

const Link: FC<LinkProps> = ({ active, setFilter, children }) => (
  // eslint-disable-next-line
  <a
    className={classnames({ selected: active })}
    style={{ cursor: 'pointer' }}
    onClick={() => setFilter()}
    onKeyDown={() => setFilter()}
    role="button"
    tabIndex={0}
  >
    {children}
  </a>
);

export default Link;
