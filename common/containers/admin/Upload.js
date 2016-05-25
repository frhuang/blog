import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as UploadActions from '../../actions/upload';
import { bindActionCreators } from 'redux';

export default class Upload extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { actions } = this.props;
        $("#resource").on('change', function(e){
            var file = e.target.files[0];
            actions.doUpload({ file });
        })
    }
    render() {
        return (
            <div>
                <input type="file" id="resource" accept="image/*" />
            </div>
        )
    }
}
export default connect(
        state => ({}),
        dispatch => ({
        actions: bindActionCreators(UploadActions, dispatch)
    })
)(Upload);