import React from 'react';
import { get } from 'lodash';
import clsx from 'clsx';
import { Card, CardContent, Avatar, Chip, IconButton, Icon, Tooltip } from '@material-ui/core';
import { isWidthDown } from '@material-ui/core/withWidth';
import { itemStyles } from '../../assets/styles/modules/itemStyles';
import noImage from '../../assets/images/no-image.png';

const renderServiceIcon = (name) => {
    switch (name) {
        case 'ChatService':
            return 'chat'
        case 'PhoneService':
            return 'perm_phone_msg'
        case 'VideoService':
            return 'voice_chat'
        default: return 'info';
    }
}
function AdvisorItem({ item, viewBy, width }) {
    const classes = itemStyles();

    const isList = viewBy === 'list' && !isWidthDown('sm', width);
    const isGrid = viewBy === 'grid';
    const categories = get(item, 'categoriesCollection.items', []);
    const skills = get(item, 'skillsCollection.items', []);
    const services = get(item, 'servicesCollection.items', []);

    return (
        <Card variant={isList ? 'elevation' : 'outlined'} className={clsx(classes.root, {
            [classes.viewByList]: isList,
          })}>
            <div className={clsx(classes.media, {
                [classes.mediaList]: isList,
            })}>
                <Avatar className={classes.mediaImg} src={get(item, 'avatarUrl.url' , noImage)} alt={get(item, 'avatarUrl.title' , '(No title)')}/>
            </div>
            <CardContent className={clsx(classes.content, {
                [classes.contentList]: isList,
            })}>
                <div style={{ textAlign: isList ? 'left' : 'center' }}>
                    <Chip
                        size="small"
                        label={item.userStatus === 'ONLINE' ? 'Trực tuyến' : 'Ngoại tuyến'}
                        color={item.userStatus === 'ONLINE' ? 'primary' : 'default'}
                        style={{ marginBottom: '8px'}}
                    />
                    <h4 className={classes.heading}>
                        {item.displayName}
                        <br/>
                        <small>{item.email}</small>
                    </h4>
                    <p>{item.phone || 'N/A'}</p>
                    {categories.length > 0 && categories.map(category => <Chip
                        key={category.sys.id}
                        size="small"
                        label={category.displayName}
                        style={{ marginRight: '8px', marginBottom: '8px'}}
                        color="secondary"
                    />)} 
                </div>
                {skills.length > 0 && <p><strong>Kỹ năng: </strong> <br/> {skills.map(skill => <Chip
                    key={skill.sys.id}
                    size="small"
                    label={skill.displayName}
                    style={{ marginRight: '8px', marginTop: '8px'}}
                    color="primary"
                />)}</p>
                }
                <div className={clsx(classes.service, {[classes.serviceGrid]: isGrid,})}>
                    {services.length > 0 && services.map(service => <Tooltip key={service.sys.id} title={service.name}>
                        <IconButton
                        size="small"
                        style={{ marginRight: '8px'}}
                        color="primary"
                    >
                        <Icon>{renderServiceIcon(service.name)}</Icon>
                    </IconButton></Tooltip>)}
                </div>
            </CardContent>
        </Card>
    );
}

export default AdvisorItem;
