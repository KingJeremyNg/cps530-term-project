import React from "react";

import Layout from "./layout";

export default props => {
  return (
    <Layout title="Home">

      <section className="hero is-medium is-info is-bold">
        <div className="hero-body">
          <h1 className="title is-1">CPS 530 Term Project</h1>
          <p className="subtitle is-2">
            A comprehensive review of web development system frameworks: Node.JS, Ronin, React, and Bulma.
          </p>
        </div>
      </section>
      <section className="hero is-medium is-light is-bold">
        <div className="hero-body columns mt-40 is-multiline is-vcentered">
          <div className="column is-3 has-text-centered">
            <img src="/static/logos/Node.js-logo.png"></img>
          </div>
          <div className="column is-3 has-text-centered">
            <img src="/static/logos/ronin-logo.png"></img>
          </div>
          <div className="column is-3 has-text-centered">
            <img src="/static/logos/bulma-logo.png"></img>
          </div>
          <div className="column is-3 has-text-centered">
            <img src="/static/logos/react-logo.png"></img>
          </div>
        </div>
      </section>
      <section className="hero is-dark is-bold">
        <div className="hero-body">
          <h3 className="title is-3 has-text-center">Our mission statement: <em>To help new developers learn and use these powerful tools to create something awesome!</em></h3>
        </div>
      </section>
    </Layout>
  );
};
