import { makeStyles } from '@material-ui/core/styles';

export const itemStyles = makeStyles(() => ({
    root: {
        boxShadow: 'none',
        width: '100%',
        paddingBottom: '24px',
        position: 'relative'
    },
    viewByList: {
        flexDirection: 'row',
        display: 'flex',
        borderBottom: '1px solid #eee'
    },
    heading: {
        margin: '0 0 8px'
    },
    media: {
        width: '100%',
        padding: '8px'
    },
    mediaList: {
        flexBasis: '20%'
    },
    contentList: {
        flexBasis: '80%',
    },
    mediaImg: {
        width: 150,
        height: 150,
        margin: 'auto'
    },
    serviceGrid: {
        textAlign: 'right',
        position: 'absolute',
        bottom: '16px',
        right: '0'
    }
}));
