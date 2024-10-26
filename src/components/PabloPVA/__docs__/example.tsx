import React from 'react';
import PabloPVA, {PabloPVAProps} from '../PabloPVA';

function Example(props: PabloPVAProps) {
  return (
    <PabloPVA
      title={props.title}
      description={props.description}
      avatar={props.avatar}
    />
  );
}

export default Example;