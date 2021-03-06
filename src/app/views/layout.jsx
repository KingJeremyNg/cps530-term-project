import React from "react";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false //flag for mobile menu expand
    };

    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    console.log("Hello");
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <html>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{`${
            this.props.title ? this.props.title + " | " : ""
            }CPS530-Term-Project`}</title>

          <link rel="stylesheet"
            href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/default.min.css"/>
            <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/highlight.min.js"/>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
            />
            <script
              defer
              src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
            />

            <link rel="stylesheet" href="/static/styles.css" />
        </head>
          <body>
            <nav className="navbar is-transparent">
              <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  <h1 className="logo">SYNO</h1>
                </a>
                <div className="dropdown is-active"></div>
              </div>
              <div className="navbar-menu is-active">
                <div className="navbar-end">
                  {[
                    "Overview",
                    "Installation",
                    "Tutorial",
                    "Demo",
                    "Conclusion",
                    "Credits"
                  ].map(p => (
                    <a
                      key={p}
                      className="navbar-item"
                      href={`/${p.toLowerCase()}`}
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
            <div className="main">{this.props.children}</div>
            <footer className="footer has-background-white" style={{ marginTop: "100px" }}>
              <div className="content has-text-centered">
                <p><strong>SYNO </strong>by
                {[
                    { name: 'Adam Aboud', url: 'https://github.com/OneHandKlap' },
                    { name: 'Christian Wang', url: 'https://github.com/Squishy123' },
                    { name: 'Jeremy Ng', url: 'https://github.com/KingJeremyNg' }]
                    .map((u, i) => {
                      if (i < 2)
                        return <a key={u.url} href={u.url}> {u.name},</a>
                      else
                        return <a key={u.url} href={u.url}> and {u.name}.</a>
                    }
                    )}</p>
              </div>
            </footer>
          </body>
      </html>
        );
      }
    }
