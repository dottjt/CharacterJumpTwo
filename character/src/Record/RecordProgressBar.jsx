import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecordProgressBar extends Component {

  render() {

    let store = this.props.state.reducer;

    return (
      <ul className="MRC-progression-bar">
        {this.state.progressBar.map(progress => (
            progress.page === this.state.page
          ?
            <li className="MRC-progression-item-selected">{progress.display_name}</li>  
          :
            <li className="MRC-progression-item">{progress.display_name}</li>
          ))
        }
      </ul>
    )
  }
}

export default RecordProgressBar;
