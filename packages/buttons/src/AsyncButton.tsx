import * as React from 'react';
import {SpaceProps} from 'styled-system';

import Button from './Button';
import Spinner from '../../core/Spinner';

type Props = SpaceProps & {
  sm?: boolean;
  wide?: boolean;
  caution?: boolean;
  primary?: boolean;
  onClick?: Function;
  loading?: boolean;
  children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
};

const AsyncButton = ({loading, children, ...props}: Props) => (
  // @ts-ignore
  <Button {...props}>{loading ? <Spinner loading={loading} /> : children}</Button>
);

AsyncButton.propTypes = {
  loading: false,
};

export default AsyncButton;
export {Props};
