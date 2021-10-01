import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import "../../assets/css/Footer.css";

class Footer extends React.Component {
    render() {
        return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} {this.props.t('footerText')}
            </p>
          </div>
        </div>
      </div>
        );
    }
}

export default withTranslation()(withRouter(Footer));
