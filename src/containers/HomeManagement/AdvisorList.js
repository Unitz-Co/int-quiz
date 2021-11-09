import React, { useState } from 'react';
import { Grid, Tooltip, Icon, withWidth } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { isWidthDown } from '@material-ui/core/withWidth';

import { AdvisorItem } from '../../components';

function AdvisorList({ items, width }) {
    const [viewBy, setViewBy] = useState('list');

    const handleView = (_, newView) => {
        setViewBy(newView);
    };

    return (
        <Grid container spacing={2}>
            {!isWidthDown('sm', width) &&
                <Grid item xs={12} style={{ textAlign: 'right', padding: '16px'}}>
                    <ToggleButtonGroup
                        value={viewBy}
                        exclusive
                        onChange={handleView}
                        aria-label="table view"
                        size="small"
                    >
                    <ToggleButton value="list" aria-label="list">
                    <Tooltip title="List">
                        <Icon>view_list</Icon>
                    </Tooltip>
                    </ToggleButton>
                    <ToggleButton value="grid" aria-label="grid">
                    <Tooltip title="Grid">
                        <Icon>view_module</Icon>
                    </Tooltip>
                    </ToggleButton>
                </ToggleButtonGroup>
                </Grid>
            }
            {items.map(item => <Grid item key={item.sys.id} xs={12} sm={viewBy === 'grid' ? 6 : 12} md={viewBy === 'grid' ? 3 : 12} style={{ display: viewBy === 'grid' ? 'flex' : 'block'}}><AdvisorItem viewBy={viewBy} item={item} width={width}/></Grid>)}
        </Grid>
    );
}

export default withWidth()(AdvisorList);
