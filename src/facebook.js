import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import autoBind from 'react-autobind';

class Facebook extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
    };
  }

  responseFacebook(response) {
    window.FB.api(
      `/${response.id}/friends`,
      'GET',
      {},
      function(response) {
        console.log(response)
      }
    );
    console.log(response);
  }

  render() {
    return (
      <div className="Facebook">
        <FacebookLogin
          appId="193220928115144"
          autoLoad={true}
          fields="name,email,picture,friends"
          scope="public_profile,user_friends"
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}

export default Facebook;
