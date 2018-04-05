const styles = {
    root: {
        display:'block',
        width:'1500px',
        height:'800px',
        position: 'absolute',
        top: '100px',
        left:'50%',
        transform: 'translate(-50%)',
        zIndex: '1'
    },

    rootNotActive: {
        display:'none',
    },
    image: {
        width:'100%',
        height:'100%',
        objectFit: 'cover'
    },
    close: {
        position:'absolute',
        top:'5px',
        right:'5px'
    }
} ;
export default styles;