const styles = {
    root: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width:'90%',
        height: '100px',
        margin: '20px auto',
        padding: '10px',
        position: 'relative'

    },
    headline: {
      fontSize: '20px'
    },
    errorActive: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        height: '40px',
        position: 'absolute',
        right: '5px',
        top: '0',
        color:'#a00f17',
        fontSize: '15px'
    },
    errorNotActive: {
        display: 'none'
    },
    star: {
        width:'40px',
        height: '40px'
    },
    link: {
        height:'32px',
        marginLeft: '10px'
    }

} ;
export default styles;