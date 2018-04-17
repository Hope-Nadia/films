const styles = {
    main: {
        margin: '20px auto',
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    image: {
        width:'100%',
        height: '100%',
        objectFit: 'cover'
    },
    media: {
      width:'150px',
      height:'200px'
    },
    content: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    headContainer:{
      width:'100%',
      display: 'flex',
      justifyContent:'space-between',
      marginBottom:'10px'
    },
    rating: {
        width: '150px'
    },
    text:{
      width: '100%'
    },
    more: {
        marginTop: '10px',
        color: 'black',
        fontStyle: 'bold',
    },
    activeLink:{
        display: 'block',
        marginLeft:'5px',
        marginRight:'5px',
    },
    icon: {
        width: '60px',
        height: '60px'
    },
    notActiveLink:{
        display: 'none'
    }

} ;
export default styles;