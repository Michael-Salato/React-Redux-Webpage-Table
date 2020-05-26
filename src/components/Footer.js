import React from "react";

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <p>
          123 ABC Street
          <br />
          Pizza, Planet 12345
        </p>
        <p>Copyright &copy; {currentYear}, PizzaTime</p>
      </footer>
    );
  }
}

export default Footer;
