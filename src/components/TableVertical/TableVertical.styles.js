export const useStyles = theme => ({
    tableVerticalArea: {
        display: 'flex',
        width: '100%',
        height: 50,
        border: '2px solid',
        borderColor: theme.palette.primary.main,
        justifyContent: 'flex-start',
        alignItems: 'center',

        '&:first-child': {
            borderBottom: 'none'
        },

        '&:nth-child(n + 2)': {
            borderBottom: 'none',

            '& .item': {
                background: theme.palette.primary.contrastText,
                color: theme.palette.primary.main,
            }
        },

        '&:last-child': {
            borderBottom: '2px solid'
        },

        '& .item': {
            display: 'inherit',
            width: '100%',
            height: '100%',
            fontWeight: 600,
            padding: '0 5px',
            border: '1px solid',
            color: theme.palette.primary.contrastText,
            background: theme.palette.primary.main,
            borderColor: 'inherit',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderTop: 'none',
            borderBottom: 'none',
            textTransform: 'uppercase',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',

            '&.header': {
                justifyContent: 'center',
                color: `${theme.palette.primary.contrastText}!important`,
                background: `${theme.palette.primary.main}!important`,
            },

            '&:first-child': {
                width: 230,
                borderLeft: 'none',
                justifyContent: 'center'
            },
    
            '&:last-child': {
                borderRight: 'none'
            },

            '&.cateItemArea': {
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },

            '&.serviceItemArea': {
                flexDirection: 'column',
                lineHeight: 1,
                alignItems: 'flex-start',
            }
        },
    },

    bodyItem: {
        background: 'red'
    },

    avaElement: {
        width: 30,
        height: 30,
        backgroundSize: 'cover!important',
        backgroundPosition: 'center!important',
        backgroundRepeat: 'no-repeat!important',
        'border-radius': '50%',
        '-webkit-border-radius': '50%',
        '-moz-border-radius': '50%',
        '-ms-border-radius': '50%',
        '-o-border-radius': '50%',
    },

    imgCatoElement: {
        width: 20,
        height: 20,
        border: '1px solid',
        backgroundSize: 'cover!important',
        backgroundPosition: 'center!important',
        backgroundRepeat: 'no-repeat!important',
        'border-radius': '50%',
        '-webkit-border-radius': '50%',
        '-moz-border-radius': '50%',
        '-ms-border-radius': '50%',
        '-o-border-radius': '50%',
    },

    textElement: {
        fontSize: 14,
        fontWeight: 400,
        textTransform: 'initial',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },

    cateItem: {
        display: 'flex',
        width: 'auto',
        height: 22,
        border: '1px solid',
        background: theme.palette.primary.main,
        marginRight: 3,
        'border-radius': `${10}px`,
        '-webkit-border-radius': `${10}px`,
        '-moz-border-radius': `${10}px`,
        '-ms-border-radius': `${10}px`,
        '-o-border-radius': `${10}px`,
        alignItems: 'center',

        '&:last-child': {
            marginRight: 0
        }
    },

    cateText: {
        color: theme.palette.primary.contrastText,
        fontWeight: 400,
        fontSize: 12,
        padding: '0 5px',
        maxWidth: '4em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        textTransform: 'initial'
    },

    serviceText: {
        display: 'flex',
        width: 'auto',
        height: 22,
        fontSize: 12,
        fontWeight: 400,
        textTransform: 'initial',
        flexWrap: 'wrap',
        alignItems: 'center',
        border: '1px solid',
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.main,
        marginRight: 3,
        padding: `0 5px`,
        'border-radius': `${10}px`,
        '-webkit-border-radius': `${10}px`,
        '-moz-border-radius': `${10}px`,
        '-ms-border-radius': `${10}px`,
        '-o-border-radius': `${10}px`,

        '&:last-child': {
            marginRight: 0
        }
    },

    filterBtn: {
        width: 12
    },

    searchButton: {
        marginBottom: 5,
    }
});