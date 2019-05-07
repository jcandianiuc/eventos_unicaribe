import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppContainer, LinkSpan } from "./index.styled";
import { appActions } from "../../redux/actions";

const links = [
  {
    url: "/users",
    display: "usuarios"
  },
  {
    url: "/places",
    display: "Cedes"
  },
  {
    url: "/events",
    display: "eventos"
  },
  {
    url: "/profile",
    display: "mi perfil"
  },
  {
    url: "/talkers",
    display: "ponentes"
  }
];

class Layout extends Component {
  constructor(props) {
    super(props);
    this.renderUserLinks = this.renderUserLinks.bind(this);
  }

  renderLinks() {
    const linksToRender = [];
    links.recude((acc, link) => {
      acc.push(
        <li className="nav-item" key={`link-${link.url}`}>
          <Link className="nav-link" to={link.url}>
            <LinkSpan>{link.display}</LinkSpan>
          </Link>
        </li>
      );
      return acc;
    }, linksToRender);
    return linksToRender;
  }

  render() {
    const { children, logOut } = this.props;
    return (
      <AppContainer className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
          <Link className="navbar-brand" to="/">
            Universidad del Caribe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/crear">
                  Crear Proyecto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/buscar">
                  Buscar Proyecto
                </Link>
              </li>
              {this.renderUserLinks()}
              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={logOut}
                >
                  Cerrar Session
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div>{children}</div>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  const {
    user: {
      tipo: { name }
    }
  } = state;
  return { userType: name };
};

const mapDispatchToProps = dispatch => {
  const { logOut } = appActions;
  return bindActionCreators({ logOut }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
