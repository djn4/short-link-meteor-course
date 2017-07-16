import React from 'react';

// export default class NotFound extends React.Component {
//   render() {
//     return <p>NotFound component here </p>
//   }
// }

export default () => {
  return (
    <div className="boxed-view">
    <div className="boxed-view__box">
      <h1>Page Not Found</h1>
      <p>We are unable to find that page.</p>
      <a href="/" className="button button--link">HEAD HOME</a>
    </div>
    </div>
  )
};
