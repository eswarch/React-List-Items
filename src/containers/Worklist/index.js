import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Worklist from '../../components/Worklist/Worklist';
import { getWorkListData } from '../../actions/worklistActions';

class WorklistContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchOpenState: false
    };

    this.toggleSearch = this.toggleSearch.bind(this);
    this.openConfirmPopup = this.openConfirmPopup.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getWorkListData());
  }

  toggleSearch() {
    this.setState({
      searchOpenState: (this.state.searchOpenState ? false : true)
    });
  }

  openConfirmPopup() {
    const { dispatch } = this.props;
    dispatch(showConfirmPopup(COMPLETE_CONFIRM, false));
  }

  goBack() {
    window.history.back();
  }

  render() {
    let worklist = this.props.worklistData;
    console.log('HI');
    console.log(worklist);
    worklist = (worklist === null || worklist === undefined) ? [] : worklist;

    return (
      <div className="worklist">
        <Worklist
          worklist = { worklist }
          searchIsOpen = { this.state.searchOpenState }
          toggleSearch = { this.toggleSearch }
          onDeleteClick={ this.openConfirmPopup } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    worklistData: state.worklistReducer.worklists,
    modal: state.notificationsReducer
  };
}

WorklistContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  worklistData: PropTypes.array,
  modal: PropTypes.object
};

export default connect(mapStateToProps)(WorklistContainer);
