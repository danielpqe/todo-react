import React from "react";

function Header({ children, loading }) {
  return (
    <header className="header_container">
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}
    </header>
  );
}

export { Header };
