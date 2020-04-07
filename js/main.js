import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "AI-powered Deep Edit",
    'image': {
      'desc': "screenshot of books",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "In-tool reviews",
    'image': {
      'desc': "screenshot of papers",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "Publish to various formats",
    'image': {
      'desc': "screenshot of letters",
      'src': "images/example3.png",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                 https://www.flickr.com/photos/37287295@N00/2540855181"`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
