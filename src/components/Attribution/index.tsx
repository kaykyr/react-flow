import React from 'react';
import cc from 'classcat';

import { AttributionPosition, ProOptions } from '../../types';

type AttributionProps = {
  proOptions?: ProOptions;
  position?: AttributionPosition;
};

const accounts = ['paid-pro', 'paid-sponsor', 'paid-enterprise', 'paid-custom'];

function Attribution({ proOptions, position = 'bottom-right' }: AttributionProps) {
  if (proOptions?.account && accounts.includes(proOptions?.account) && proOptions?.hideAttribution) {
    return null;
  }

  const positionClasses = `${position}`.split('-');

  return (
    <></>
  );
}

export default Attribution;
