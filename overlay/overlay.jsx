Overlay = React.createClass({

  getDefaultProps: function() {
    return {
      title: '',
      modalId: 'overlay',
      closeable: true
    };
  },

  componentDidMount: function() {
    if (this.props.closeable)
      window.addEventListener("keydown", this._listenForEsc, true);
  },

  componentWillUnmount: function() {
    if (this.props.closeable)
      window.removeEventListener("keydown", this._listenForEsc, true);
  },

  _noPropagate: function (event) {
    event.stopPropagation();
  },

  _listenForEsc: function (event) {
      if (event.key === "Escape" || event.keyCode === 27) {
          this._closeModal(event);
      }
  },

  // destroy the modal from inside
  _closeModal: function (event) {
    event.stopPropagation(); // avoid other events, ESC doesn't provide event
    React.unmountComponentAtNode(document.getElementById(this.props.modalId));
  },

  render: function() {
      return <div className="overlay" onClick={this._closeModal}>
        <div className="wrapper">
          <div className="header" >
            {this.props.title}
              <button className="closeButton" onClick={this._closeModal}>x</button>
          </div>
          <div className="content" onClick={this._noPropagate}>
            {this.props.children}
          </div>
        </div>
      </div>;
  },

});