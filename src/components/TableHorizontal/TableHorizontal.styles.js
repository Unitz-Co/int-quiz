export const useStyles = theme => ({
    tableHorizontalArea: {
        display: 'flex',
        width: '100%',
        color: theme.palette.primary.main,
        border: '2px solid',
        borderColor: theme.palette.primary.main,
        justifyContent: 'flex-start',
        flexDirection: 'column',

        '& .item': {
            display: 'inherit',
            width: '100%',
            height: 50,
            fontWeight: 600,
            borderColor: 'inherit', 
            alignItems: 'center',
            borderTop: 'none',
            borderBottom: 'none',
            padding: '0 15px',
            textTransform: 'uppercase',
        }
    }
});
