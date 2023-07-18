import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"
import pintrest from "../images/icon-pinterest.svg"
import instagram from "../images/icon-instagram.svg"
import logo from "../images/footer-logo.svg"
import React from "react"

export default function Footer() {
  return (
    <>
      <footer className="space" >
        <div className="footer-wrapper ">
            <article>
                <img src={logo} alt="" />
              
            </article>
            <article>
                <h3>Features</h3>
                <ul>
                    <li><button>Link Shortening</button></li>
                    <li><button>Branded Links</button></li>
                    <li><button>Analytics</button></li>
                </ul>
            </article>
            <article>
                <h3>Resources</h3>
                <ul>
                    <li><button>Blog</button></li>
                    <li><button>Developers</button></li>
                    <li><button>Support</button></li>
                </ul>
            </article> <article>
                <h3>Company</h3>
                <ul>
                    <li><button>About</button></li>
                    <li><button>Our Team</button></li>
                    <li><button>Careers</button></li>
                    <li><button>Contact</button></li>
                </ul>
            </article>
            <article>
                <ul className="social-icon">
                    <li><img src={facebook} alt="" /></li>
                    <li><img src={twitter} alt="" /></li>
                    <li><img src={pintrest} alt="" /></li>
                    <li><img src={instagram}alt="" /></li>
                </ul>
            </article>
        </div>

      </footer>
    </>
  )
}
