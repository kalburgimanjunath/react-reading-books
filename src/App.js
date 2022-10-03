import React, { useState, Component } from 'react';
import logger from 'logging-library';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';

const file = 'http://www.africau.edu/images/default/sample.pdf';
const type = 'pdf';
export default class App extends Component {
  // Create new plugin instance
  render() {
    return (
      <div>
        <h1>Display Library for Javascript Books</h1>

        <FileViewer
          fileType={type}
          filePath={file}
          errorComponent={CustomErrorComponent}
          onError={this.onError}
        />
      </div>
    );
  }
  onError(e) {
    logger.logError(e, 'error in file-viewer');
  }
}
