import "./header.css";

export default function Header() {
  return (
    <div className="header_container">
      <div className="logo_container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/013/342/395/original/food-delivery-logo-design-fast-delivery-service-sign-free-vector.jpg"
        />
        <p>Garma garam</p>
      </div>
      <div className="link_container">
        <ul className="nav_items">
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
