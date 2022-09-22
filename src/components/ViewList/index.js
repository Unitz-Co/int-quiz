/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { map, get } from 'lodash';
import { Grid } from '@chakra-ui/react';
import Horizontal from './Horizontal';
import Vertical from './Vertical';

const RenderView = (props) => {
  const { item, selectedView } = props;
  const ChangeView = selectedView.horizontal ? Horizontal : Vertical;

  return <ChangeView item={item} />;
};

export default function ViewList(props) {
  const { data, selectedView } = props;

  if (data.length === 0) return <h2>Not Found</h2>;
  return (
    <Grid gridTemplateColumns={selectedView.vertical ? "repeat(auto-fill, minmax(350px, 1fr)); grid-column-gap: 1rem; grid-row-gap: 1rem;}}" : 'initial'}>
      {
        map(data, (item, index) => (
          <RenderView item={item} selectedView={selectedView} key={get(item, 'sys.id', index)} />
        ))
      }
    </Grid>
  );
};