import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="column">
        {/* Column 1: Logo */}
        <img src="https://sheikhstudios.live/bs_tokens/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-23-at-09.59-1.png" className='logoimg logoimg11' alt="" />
      </div>
     
      <div className="column">
        {/* Column 3: Office Address */}
        <h2>Office Address</h2>
        <p>
          Bank Street<br />
          Business Atrium Centre<br />
          Khalid bin Waleed Road<br />
          Bur Dubai. Office No. 310
        </p>
      </div>
      <div className="column">
        {/* Column 4: Social Icons and Email */}
        <h2>Connect With Us</h2>
        <p className="social-icons">
          <a href="#"><img src="https://sheikhstudios.live/bs_tokens/wp-content/uploads/2023/10/%F0%9F%A6%86-icon-_instagram_.png" alt="Facebook" /></a>
          <a href="#"><img src="https://sheikhstudios.live/bs_tokens/wp-content/uploads/2023/10/%F0%9F%A6%86-icon-_send-2_.png" alt="Twitter" /></a>
          <a href="#"><img src="https://sheikhstudios.live/bs_tokens/wp-content/uploads/2023/10/%F0%9F%A6%86-icon-_facebook_.png" alt="LinkedIn" /></a>
        </p>
        <p>Email: info@example.com</p>
      </div>
    </footer>
    
    </>
  );
};

export default Footer;
