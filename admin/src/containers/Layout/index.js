import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppContainer, LinkSpan } from "./index.styled";

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
    this.renderLinks = this.renderLinks.bind(this);
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
                <Link className="nav-link" to="/event/create">
                  Crear Evento
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/event/find">
                  Buscar Evento
                </Link>
              </li>
              {this.renderUserLinks()}
            </ul>
          </div>
        </nav>
      </AppContainer>
    );
  }
}
