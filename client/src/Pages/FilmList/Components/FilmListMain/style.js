const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
    },
    header:{
        fontSize: '40px',
        color: '#b11c1c',
        padding: '10px',
        width: '90%',
        textAlign: 'center'
    },
    functions: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems:'center',
        // alignItems:'baseline',
        width: '50%',
    },
    activeLink: {
        display:'block',
        width: '64px',
        height: '64px',
        marginLeft: '10px'
    },
    notActiveLink :{
        display: 'none'
    }

} ;
export default styles;