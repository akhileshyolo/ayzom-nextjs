import {createRef} from 'react';

export default function Navbar(props) {
  const closeNavRef = createRef();

    return (
      <div className="navbar header">
            <a href="/" className="logo">
                <img
                  src="https://ayzom.com/assets/img/titleImage.png"// Route of the image file
                  height={64} // Desired size with correct aspect ratio
                  width={256} // Desired size with correct aspect ratio
                  alt="Header Title Picture"
                />
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" ref={closeNavRef} />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/work">Work</a></li>
              {/* <li><a href="https://github.com/arki7n">Github</a></li> */}
              <li><a href="/blog">Blog</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdqkAwUpGOc-SNmMssHBgFrX9rDtRFdFAB82p5bG2_atW64kg/viewform">Become Mentee</a></li>
              <li><a onClick={(e) => props.triggerHireModal(e, closeNavRef.current)}>Hire Me!</a></li>
            </ul>
 
        <style jsx>{`
          .navbar {
            background-color: #d9e4ef;
            width: 100%;
          }

          a {
            color: #000;
          }

          /* header */

          .header {
            background-color: #fff;
            box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
            position: fixed;
            z-index: 3;
            top: 0;
          }

          .header ul {
            margin: 0;
            padding: 0;
            padding-right: 30px;
            list-style: none;
            overflow: hidden;
            background-color: #fff;
          }

          .header li a {
            display: block;
            padding: 20px 20px;
            border-right: 1px solid #f4f4f4;
            text-decoration: none;
          }

          .header li a:hover,
          .header .menu-btn:hover {
            background-color: #f4f4f4;
          }

          .header .logo {
            display: block;
            float: left;
            font-size: 2em;
            padding: 10px 20px;
            text-decoration: none;
          }

          /* menu */

          .header .menu {
            clear: both;
            max-height: 0;
            transition: max-height .2s ease-out;
            padding-top: 10px;
          }

          /* menu icon */

          .header .menu-icon {
            cursor: pointer;
            display: inline-block;
            float: right;
            padding: 28px 20px;
            position: relative;
            user-select: none;
          }

          .header .menu-icon .navicon {
            background: #333;
            display: block;
            height: 2px;
            position: relative;
            transition: background .2s ease-out;
            width: 18px;
          }

          .header .menu-icon .navicon:before,
          .header .menu-icon .navicon:after {
            background: #333;
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            transition: all .2s ease-out;
            width: 100%;
          }

          .header .menu-icon .navicon:before {
            top: 5px;
          }

          .header .menu-icon .navicon:after {
            top: -5px;
          }

          /* menu btn */

          .header .menu-btn {
            display: none;
          }

          .header .menu-btn:checked ~ .menu {
            max-height: 350px;
          }

          .header .menu-btn:checked ~ .menu-icon .navicon {
            background: transparent;
          }

          .header .menu-btn:checked ~ .menu-icon .navicon:before {
            transform: rotate(-45deg);
          }

          .header .menu-btn:checked ~ .menu-icon .navicon:after {
            transform: rotate(45deg);
          }

          .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
          .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
            top: 0;
          }

          /* 48em = 768px */

          @media (min-width: 48em) {
            .header li {
              float: left;
            }
            .header li a {
              padding: 20px 30px;
            }
            .header .menu {
              clear: none;
              float: right;
              max-height: none;
            }
            .header .menu-icon {
              display: none;
            }
          }

        `}  
        </style>
  </div>  
  )
}