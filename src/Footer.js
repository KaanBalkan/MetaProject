import logo from './icons_assets/Logo.svg';

function Footer() {
    return (
      <>
      <footer class="footer">
        <div>
          <img src={logo} alt="Logo"></img>
        </div>
        <div id="navigation">
        <text class="footerTitles">Navigation</text>
          <ul>
            <li><a href="/home">Homepage</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order_online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div class="contact">
          <text class="footerTitles">Contacts</text>
          <p>Adress</p>
          <p>Phone number</p>
          <p>Email</p>
        </div>
        <div class="social">
          <text class="footerTitles">Social Media Links</text>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Tiktok</p>
        </div>
        </footer>
      </>
    );
  }

  export default Footer;
