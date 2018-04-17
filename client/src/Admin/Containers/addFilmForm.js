import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { stopSubmit} from 'redux-form';
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import ReduxForm from '../Components/AddFilm/';
import { addFilm} from "../services";

class AddFilmForm extends Component {

    constructor(props) {
        super(props);
        this.submit=this.submit.bind(this);
    }
    submit(values) {
        //обрабатывается строка с картинками для корректного занесения в бд
          if(!values.poster) values.poster = 'http://localhost:3000/images/noimage.jpg';
          let gallery  = values.images ? values.images : '';
          if(gallery!==''){
              values.images = '';
              gallery = gallery.split(',').map( item => {
                      return item.trim();
                  }
              );
              values.images = gallery.join(',');
          } else values.images=gallery;

          addFilm(values)
              .then(res => {
                  if(res.add) this.props.history.push(`/filmList/film/${(values.name).replace(/\s/ig,'_')}/${res.add}`);
                  else this.props.stopSubmit('addFilm',{_error:'Sorry, something wrong with  service. Please wait'})
              })
              .catch( err => console.log(err));
    }

    render() {
        let props = {
            onSubmit: this.submit,
        };
        return (
          <ReduxForm {...props}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
        stopSubmit: bindActionCreators(stopSubmit,dispatch)
    }
};

AddFilmForm.propTypes = {
    stopSubmit: PropTypes.func.isRequired
};

export default withRouter(connect(mapDispatchToProps)(AddFilmForm));