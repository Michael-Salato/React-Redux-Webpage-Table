import React from "react";

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <address>
          123 ABC Street
          <br />
          Pizza, Planet 12345
        </address>
        <p>Copyright &copy; {currentYear}, PizzaTime</p>
      </footer>
    );
  }
}

export default Footer;
