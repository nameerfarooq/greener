import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logowhite.png";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="inner">
        <div className="row1">
          <div className="box">
            <div className="left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="40"
                viewBox="0 0 36 40"
                fill="none"
              >
                <path
                  d="M26.5625 30.9375C26.1313 30.9375 25.7812 31.2875 25.7812 31.7188C25.7812 32.15 26.1313 32.5 26.5625 32.5C26.9937 32.5 27.3438 32.15 27.3438 31.7188C27.3438 31.2875 26.9937 30.9375 26.5625 30.9375Z"
                  fill="#173300"
                ></path>
                <path
                  d="M28.4861 28.4112L24.7728 27.1737L23.4398 24.5075C24.6407 23.2852 25.4745 21.6678 25.7557 19.9809L25.922 18.9844H27.3438C28.6361 18.9844 29.6875 17.933 29.6875 16.6406V11.7188C29.6875 5.25703 24.4305 0 17.9688 0C11.4905 0 6.25 5.24195 6.25 11.7188V16.6406C6.25 17.6591 6.9032 18.5275 7.8125 18.85V19.7656C7.8125 21.058 8.86391 22.1094 10.1562 22.1094H10.8423C11.181 22.8451 11.6194 23.5265 12.1528 24.1386C12.2634 24.2658 12.3788 24.3891 12.497 24.509L11.1647 27.1737L7.45133 28.4113C3.13375 29.8509 0 34.3962 0 39.2188C0 39.6502 0.349766 40 0.78125 40H35.1562C35.5877 40 35.9375 39.6502 35.9375 39.2188C35.9375 34.3962 32.8038 29.8509 28.4861 28.4112ZM28.125 16.6406C28.125 17.0714 27.7745 17.4219 27.3438 17.4219H26.1514C26.35 15.8836 26.4823 14.2466 26.5355 12.6344C26.5371 12.5889 26.5384 12.5447 26.5398 12.5H28.125V16.6406ZM8.59375 17.4219C8.16297 17.4219 7.8125 17.0714 7.8125 16.6406V12.5H9.39828C9.40086 12.5815 9.40359 12.6634 9.40664 12.7458C9.40672 12.7486 9.40687 12.7513 9.40695 12.7541C9.40695 12.7544 9.40695 12.7546 9.40695 12.7548C9.46164 14.323 9.59227 15.9174 9.78633 17.4218H8.59375V17.4219ZM10.1562 20.5469C9.72547 20.5469 9.375 20.1964 9.375 19.7656V18.9844H10.0155L10.1817 19.9812C10.2134 20.1706 10.2524 20.3594 10.2975 20.5469H10.1562ZM9.37633 10.9375H7.84219C8.23789 5.70148 12.6076 1.5625 17.9688 1.5625C23.3061 1.5625 27.695 5.70094 28.0952 10.9375H26.5613C26.505 6.62289 22.9915 3.125 18.668 3.125H17.2696C12.9462 3.125 9.4325 6.62289 9.37633 10.9375ZM17.2695 4.6875H18.668C22.1687 4.6875 25.002 7.55086 25 11.0477C25 11.2935 24.998 11.5076 24.9939 11.7023C24.9939 11.7048 24.9938 11.7074 24.9938 11.71L24.0166 11.5704C21.362 11.1913 18.8554 9.93805 16.9587 8.04133C16.8121 7.89484 16.6134 7.8125 16.4062 7.8125C14.3081 7.8125 12.2997 8.76844 10.972 10.3834C11.2992 7.20227 13.9885 4.6875 17.2695 4.6875ZM11.9172 20.5469C11.5261 19.2459 11.0786 15.4177 10.9797 12.9646L12.0312 11.5626C12.9969 10.2754 14.4993 9.47562 16.0975 9.38383C18.2004 11.3851 20.9209 12.7066 23.7957 13.1171L24.9459 13.2815C24.869 14.9131 24.7119 16.5505 24.4868 18.0563C24.4867 18.0568 24.4866 18.0573 24.4866 18.0579C24.415 18.542 24.3586 18.8536 24.2145 19.7238C23.8008 22.2055 21.9491 24.4496 19.5046 25.0608C18.4986 25.312 17.4387 25.3119 16.4333 25.0608C14.907 24.6792 13.5074 23.6231 12.6042 22.1094H14.1969C14.5194 23.0187 15.3877 23.6719 16.4062 23.6719H17.9688C19.2637 23.6719 20.3125 22.6231 20.3125 21.3281C20.3125 20.0358 19.2611 18.9844 17.9688 18.9844H16.4062C15.3651 18.9844 14.5095 19.6569 14.1955 20.5469H11.9172ZM16.3405 26.6419C16.8764 26.7548 17.4227 26.8125 17.9688 26.8125C18.3962 26.8125 18.8237 26.7767 19.2463 26.7073L17.8659 28.1673L16.3405 26.6419ZM16.7918 29.303L14.3138 31.9235C13.6316 30.6177 13.0455 29.2588 12.5647 27.8675L13.4952 26.0064L16.7918 29.303ZM22.3098 25.7417L23.3727 27.8674C22.8911 29.261 22.3048 30.6205 21.6233 31.9247L18.9711 29.2725L22.3098 25.7417ZM15.625 21.3281C15.625 20.8968 15.9748 20.5469 16.4062 20.5469H17.9688C18.3995 20.5469 18.75 20.8973 18.75 21.3281C18.75 21.7595 18.4001 22.1094 17.9688 22.1094H16.4062C15.9755 22.1094 15.625 21.7589 15.625 21.3281ZM1.59375 38.4375C1.90336 34.5673 4.47906 31.0495 7.94547 29.8935L11.2341 28.7976C11.8366 30.4636 12.583 32.0829 13.4577 33.621C13.4592 33.6237 13.4606 33.6263 13.4621 33.6289L13.4622 33.6291C14.1013 34.7532 14.8207 35.8517 15.6006 36.8946L16.5617 38.4375H1.59375ZM17.9688 37.7411L16.9092 36.0401C16.8973 36.021 16.8847 36.0025 16.8712 35.9845C16.2386 35.1406 15.6484 34.258 15.1109 33.3547L17.8971 30.4083L20.8329 33.3441C20.2918 34.254 19.6996 35.1402 19.0664 35.9844C19.0281 36.0354 19.0824 35.955 17.9688 37.7411ZM19.3758 38.4375L20.3368 36.8947C21.1202 35.8478 21.8447 34.7405 22.4902 33.6031C22.4941 33.5962 22.4978 33.5892 22.5017 33.5823C22.5022 33.5815 22.5027 33.5807 22.5031 33.5798C23.3668 32.0564 24.1054 30.4512 24.7034 28.7976L27.992 29.8935C31.4584 31.0495 34.0341 34.5673 34.3438 38.4375H19.3758Z"
                  fill="#173300"
                ></path>
                <path
                  d="M31.9956 35.2758C31.4735 34.2307 30.7088 33.3023 29.784 32.5909C29.442 32.3277 28.9515 32.3916 28.6885 32.7337C28.4253 33.0757 28.4893 33.5662 28.8313 33.8293C29.5699 34.3975 30.1807 35.1391 30.5978 35.9741C30.791 36.3607 31.2605 36.5163 31.6458 36.3238C32.0317 36.131 32.1884 35.6618 31.9956 35.2758Z"
                  fill="#173300"
                ></path>
              </svg>
            </div>
            <div className="right">
              <div className="text-16">Support & Email</div>
              <a href="mailto:info@greener.com.pk">
                <div className="text-17">info@greener.com.pk</div>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M22.7676 0C22.3361 0 21.9863 0.349798 21.9863 0.781398C21.9863 1.213 22.3361 1.5628 22.7676 1.5628C31.4074 1.5628 38.4362 8.59324 38.4362 17.2344C38.4362 17.666 38.7862 18.0158 39.2174 18.0158C39.6489 18.0158 39.9987 17.666 39.9987 17.2344C39.9987 7.73157 32.2689 0 22.7676 0Z"
                  fill="#173300"
                ></path>
                <path
                  d="M34.5177 18.0162C34.9492 18.0162 35.299 17.6661 35.299 17.2348C35.299 10.3234 29.6773 4.70068 22.7676 4.70068C22.3361 4.70068 21.9863 5.05079 21.9863 5.48208C21.9863 5.91368 22.3361 6.26348 22.7676 6.26348C28.8158 6.26348 33.7365 11.1851 33.7365 17.2348C33.7365 17.6661 34.0862 18.0162 34.5177 18.0162Z"
                  fill="#173300"
                ></path>
                <path
                  d="M29.0359 17.2346C29.0359 17.6659 29.3856 18.016 29.8171 18.016C30.2486 18.016 30.5984 17.6659 30.5984 17.2346C30.5984 12.9159 27.0855 9.40234 22.7676 9.40234C22.3361 9.40234 21.9863 9.75214 21.9863 10.1834C21.9863 10.615 22.3361 10.9648 22.7676 10.9648C26.224 10.9648 29.0359 13.7773 29.0359 17.2346Z"
                  fill="#173300"
                ></path>
                <path
                  d="M21.9863 14.8844C21.9863 15.3157 22.3361 15.6655 22.7677 15.6655C23.6328 15.6655 24.3366 16.3694 24.3366 17.2347C24.3366 17.666 24.6864 18.0161 25.118 18.0161C25.5493 18.0161 25.8994 17.666 25.8994 17.2347C25.8994 15.5077 24.4944 14.103 22.7677 14.103C22.3361 14.103 21.9863 14.4528 21.9863 14.8844Z"
                  fill="#173300"
                ></path>
                <path
                  d="M14.6409 25.3703C14.6409 25.8019 14.2911 26.1517 13.8595 26.1517C13.4279 26.1517 13.0781 25.8019 13.0781 25.3703C13.0781 24.939 13.4279 24.5889 13.8595 24.5889C14.2911 24.5889 14.6409 24.939 14.6409 25.3703Z"
                  fill="#173300"
                ></path>
                <path
                  d="M21.4068 39.0588C24.9642 40.8026 29.244 40.077 32.0571 37.2634L33.6723 35.6478C34.5494 34.7714 34.5497 33.3518 33.6727 32.4749L27.4312 26.2328C26.5557 25.3559 25.136 25.3547 24.2595 26.2325L21.6076 28.8853C21.0882 29.4048 20.2865 29.5107 19.7017 29.1374C18.7484 28.5279 17.821 27.8558 16.9454 27.1397C16.6112 26.8665 16.1193 26.9159 15.8462 27.2499C15.573 27.5841 15.6225 28.0764 15.9563 28.3493C16.8789 29.1039 17.8557 29.812 18.8607 30.4542C20.0585 31.2194 21.6784 31.0244 22.7123 29.9903L25.3649 27.3372C25.6301 27.0716 26.0598 27.071 26.3262 27.3375L32.5679 33.5798C32.8337 33.846 32.8343 34.2764 32.5679 34.5422L30.9523 36.1584C28.6089 38.5023 25.0493 39.1039 22.0943 37.6556C11.2689 32.3461 5.37898 23.9271 2.34432 17.7992C0.892601 14.8687 1.49532 11.3219 3.84425 8.9731L5.42445 7.3929C5.68934 7.12735 6.11933 7.12644 6.38544 7.39321L12.6278 13.6365C12.8921 13.9005 12.8948 14.3309 12.6272 14.5979L9.97521 17.2507C8.94128 18.2849 8.74628 19.905 9.51135 21.1034C9.96209 21.8088 10.4479 22.5047 10.9557 23.1716C11.217 23.515 11.7071 23.5813 12.0504 23.32C12.3937 23.0587 12.4603 22.5685 12.1987 22.2248C11.7172 21.5921 11.2557 20.9315 10.8279 20.2622C10.4546 19.677 10.5605 18.8752 11.0799 18.3557L13.7316 15.7035C14.6084 14.8278 14.6093 13.4075 13.7322 12.5312L7.49048 6.28857C6.61524 5.41163 5.19526 5.41041 4.3191 6.28826L2.73952 7.86815C-0.0839584 10.6913 -0.805392 14.9612 0.944176 18.493C4.08656 24.8379 10.187 33.556 21.4068 39.0588Z"
                  fill="#173300"
                ></path>
              </svg>
            </div>
            <div className="right">
              <div className="text-16">Customer Support</div>
              <a href="tel:+923458230986">
                <div className="text-17">+923458230986</div>
              </a>{" "}
            </div>
          </div>
          <div className="box">
            <div className="left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="40"
                viewBox="0 0 27 40"
                fill="none"
              >
                <path
                  d="M13.3578 3.12551C12.9258 3.12238 12.5735 3.47004 12.5703 3.90129C12.5672 4.33254 12.9141 4.68489 13.3461 4.68801C13.7774 4.69114 14.1297 4.34426 14.1328 3.91301C14.136 3.48176 13.7891 3.12942 13.3578 3.12551Z"
                  fill="#173300"
                ></path>
                <path
                  d="M13.3224 7.81264C10.3059 7.79123 7.83547 10.2248 7.81266 13.2403C7.78992 16.2557 10.2248 18.7273 13.2403 18.75C13.2543 18.7501 13.2682 18.7502 13.2822 18.7502C16.2785 18.7502 18.7274 16.3239 18.75 13.3223C18.7728 10.3071 16.338 7.83537 13.3224 7.81264ZM13.282 17.1877C13.2722 17.1877 13.2619 17.1877 13.252 17.1876C11.0981 17.1713 9.35883 15.4059 9.37508 13.252C9.39125 11.1079 11.1403 9.37491 13.2806 9.37491C13.2905 9.37491 13.3008 9.37499 13.3106 9.37507C15.4646 9.39132 17.2038 11.1568 17.1876 13.3106C17.1713 15.4548 15.4224 17.1877 13.282 17.1877Z"
                  fill="#173300"
                ></path>
                <path
                  d="M16.69 3.71798C16.2836 3.57376 15.8368 3.78665 15.6926 4.19337C15.5484 4.60009 15.7613 5.04658 16.1679 5.1908C19.6091 6.41041 21.9025 9.68784 21.875 13.3462C21.8718 13.7776 22.2189 14.13 22.6504 14.1333C22.6523 14.1333 22.6544 14.1333 22.6564 14.1333C23.085 14.1333 23.4342 13.7874 23.4375 13.3579C23.47 9.03393 20.7583 5.15994 16.69 3.71798Z"
                  fill="#173300"
                ></path>
                <path
                  d="M18.0751 29.4096C23.2714 22.7209 26.5189 19.233 26.5627 13.3811C26.6177 6.01837 20.6425 0 13.2803 0C6.00405 0 0.0557598 5.89282 0.000447185 13.1819C-0.0442404 19.1925 3.2635 22.6756 8.4957 29.4085C3.29061 30.1863 0.000447185 32.1408 0.000447185 34.5313C0.000447185 36.1327 1.48061 37.5696 4.16835 38.5774C6.61468 39.4948 9.85117 40 13.2816 40C16.712 40 19.9485 39.4948 22.3948 38.5774C25.0825 37.5695 26.5627 36.1326 26.5627 34.5312C26.5627 32.142 23.2756 30.188 18.0751 29.4096ZM1.56287 13.1937C1.61162 6.76173 6.85968 1.5625 13.2805 1.5625C19.7773 1.5625 25.0487 6.87408 25.0003 13.3695C24.9587 18.9268 21.5148 22.3516 16.0166 29.519C15.0359 30.7969 14.1352 32.005 13.2827 33.1868C12.4327 32.0043 11.5501 30.8178 10.5547 29.5186C4.82921 22.0511 1.52053 18.8851 1.56287 13.1937ZM13.2816 38.4376C6.57444 38.4376 1.56287 36.3753 1.56287 34.5313C1.56287 33.1638 4.55882 31.4363 9.59617 30.8381C10.7097 32.2991 11.6859 33.6265 12.6434 34.9821C12.7897 35.1891 13.0273 35.3124 13.2809 35.3126C13.2811 35.3126 13.2813 35.3126 13.2816 35.3126C13.5348 35.3126 13.7724 35.1898 13.9189 34.9831C14.8674 33.6451 15.8703 32.2851 16.9743 30.839C22.007 31.4378 25.0003 33.1648 25.0003 34.5314C25.0002 36.3753 19.9887 38.4376 13.2816 38.4376Z"
                  fill="#173300"
                ></path>
              </svg>
            </div>
            <div className="right">
              <div className="text-16">Our Location</div>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/jRfuxs51kFgvUdkg7"
              >
                <div className="text-17">Shahra-e-Faisal, Karachi</div>
              </a>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="column colflex2">
            <img className="footer-logo" src={logo} alt="Logo Image" />
            <div className="text-17">
              Greener is more than just a solar company, we're your partners in
              embracing sustainable energy solutions.
            </div>
          </div>
          <div className="column">
            <div className="text-16">Quick Links</div>
            <div className="list">
              <ul>
                <li className="text-18" onClick={() => navigate("/")}>
                  Home
                </li>
                <li className="text-18" onClick={() => navigate("/about")}>
                  About Us
                </li>
                <li className="text-18" onClick={() => navigate("/services")}>
                  Services
                </li>
                <li className="text-18" onClick={() => navigate("/elc")}>
                  Energy Load Calculator
                </li>
                <li className="text-18" onClick={() => navigate("/products")}>
                  Products
                </li>
                <li className="text-18" onClick={() => navigate("/contact")}>
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="text-16">Services</div>
            <div className="list">
              <ul>
                <li
                  className="text-18"
                  onClick={() => navigate("/services/#residential-solar")}
                >
                  Residential Solar System
                </li>
                <li
                  className="text-18"
                  onClick={() => navigate("/services/#commercial-solar")}
                >
                  Commercial Solar System
                </li>
                <li
                  className="text-18"
                  onClick={() => navigate("/services/#industrial-solar")}
                >
                  Industrial Solar System
                </li>
                <li
                  className="text-18"
                  onClick={() => navigate("/services/#solar-maintainance")}
                >
                  Solar Maintainance & Support
                </li>
                <li className="text-18" onClick={() => navigate("/cabling")}>
                  Underground Cabling Maintainance
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="text-16">Useful Links</div>
            <div className="list">
              <ul>
                <li className="text-18">Privacy Policy</li>
                <li className="text-18">Term & Conditions</li>
                <li className="text-18">Warranty</li>
                <li className="text-18">Support</li>
                <li className="text-18">Damage Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row3 text-19">
          Copyright © 2024 Greener Pakistan. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
