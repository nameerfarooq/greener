import React from "react";
import HeroSection from "../../components/HeroSection";
import facebook from "../../assets/icons/facebooknew.png";
import twitter from "../../assets/icons/twitternew.png";
import instagram from "../../assets/icons/instagram.png";
import linkedIn from "../../assets/icons/linkedinnew.png";
import youtube from "../../assets/icons/youtubenew.png";

import ButtonStyle1 from "../../components/Buttons/ButtonStyle1";
import transition from "../../Transition";
const ContactUs = () => {
  return (
    <div>
      <HeroSection text={"Contact Us"} />
      <div className="contact-us">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="contact-form">
          <div className="inner">
            <div className="form">
              <br />
              <br />
              <div className="text-5 center">Get In Touch With Us</div>
              <br />
              <br />
              <form
                action="https://formspree.io/f/mdknokwq"
                method="post"
                enctype="multipart/form-data"
              >
                <div className="double-field">
                  <input
                    type="text"
                    name="First_name"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    required
                    name="Last_name"
                    placeholder="Last Name"
                  />
                </div>

                <div className="double-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                  <input
                    type="tel"
                    min={"0"}
                    name="contact"
                    placeholder="Contact Number"
                    required
                  />
                </div>
                <div className="double-field">
                  <input
                    type="text"
                    name="Company"
                    placeholder="Company"
                    required
                  />
                  <input type="text" name="City" placeholder="City" required />
                </div>
                <div className="options-fields">
                  <div className="w-100">
                    <p className="text-7">How did you hear about us?</p>
                    <select
                      name="How did you hear about us?"
                      placeholder="How did you hear about us?"
                      required
                    >
                      <option value="None">None</option>
                      <option value="Facebook">Facebook</option>
                      <option value="TV Commercial">TV Commercial</option>
                      <option value="Radio">Radio</option>
                      <option value="Bill Boards">Bill Boards</option>
                      <option value="Print Advertisement">
                        Print Advertisement
                      </option>
                      <option value="Youtube">Youtube</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Twitter">Twitter</option>
                      <option value="Trade Show">Trade Show</option>
                      <option value="Road Show">Road Show</option>
                      <option value="Website Advertisement">
                        Website Advertisement
                      </option>
                    </select>
                  </div>
                  <div className="w-100">
                    <p className="text-7">Customer Type</p>
                    <select
                      name="Customer Type"
                      placeholder="Customer Type"
                      required
                    >
                      <option value="None">None</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                </div>
                <div className="options-fields">
                  <div className="w-100">
                    <p className="text-7">Maximum Summer Electricity Bill?</p>
                    <select name="Maximum Summer Electricity Bill?" required>
                      <option value="None">None</option>
                      <option value="5000">5000</option>
                      <option value="10000">10000</option>
                      <option value="15000">15000</option>
                      <option value="20000">20000</option>
                      <option value="25000">25000</option>
                      <option value="30000">30000</option>
                      <option value="35000">35000</option>
                      <option value="40000">40000</option>
                      <option value="45000">45000</option>
                      <option value="50000">50000</option>
                      <option value="60000">60000</option>
                      <option value="70000">70000</option>
                      <option value="70000+">70000+</option>
                    </select>
                  </div>
                  <div className="w-100">
                    <p className="text-7">
                      How many Inverter AC do you want to run?
                    </p>
                    <select
                      name="How many Inverter AC do you want to run?"
                      required
                    >
                      <option value="None">None</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                </div>
                <div className="options-fields">
                  <div className="w-100">
                    <p className="text-7">Property Size</p>
                    <select name="Property Size" required>
                      <option value="None">None</option>
                      <option value="0 to 5 marla or 125 sq yd">
                        0 to 5 marla or 125 sq yd
                      </option>
                      <option value="10 to 19 marla or 250 to 475 sq yd">
                        10 to 19 marla or 250 to 475 sq yd
                      </option>
                      <option value="1 kanal or 500 sq yd">
                        1 kanal or 500 sq yd
                      </option>
                      <option value="2 kanal or 1000 sq yd">
                        2 kanal or 1000 sq yd
                      </option>
                      <option value="3 kanal & above or 1500 sq yd & Above">
                        3 kanal & above or 1500 sq yd & Above
                      </option>
                      <option value="6 to 9 marla or 1500 to 2250 sq yd">
                        6 to 9 marla or 1500 to 2250 sq yd
                      </option>
                    </select>
                  </div>
                  <div className="w-100">
                    <p className="text-7">Property Type</p>
                    <select
                      name="How many Inverter AC do you want to run?"
                      required
                    >
                      <option value="None">None</option>
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Factory roof">Factory roof</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Farm">Farm</option>
                      <option value="Shop/Office">Shop/Office</option>
                    </select>
                  </div>
                </div>

                <br />
                <br />
                <div className="center-margin">
                  <button type="submit" className="nostyle">
                    <ButtonStyle1 text="Request a meeting" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1863356834956!2d67.03921448646864!3d24.857484721028523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e7e78b508ad%3A0x9f9e02c208d97ced!2sSea%20Breeze%20Plaza%2C%20Shahrah-e-Faisal%20Rd%2C%20Karachi%20Cantonment%20Fowler%20Lines%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713733913497!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="contact-options">
          <div className="inner">
            <div className="text-5">Happy to Answer All Your Questions</div>
            <div className="cards">
              <div className="card">
                <div className="bg bg1"></div>
                <div className="content">
                  <div className="inner">
                    {" "}
                    <div className="top">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="40"
                        viewBox="0 0 27 40"
                        fill="none"
                      >
                        <path
                          d="M13.3578 3.12551C12.9258 3.12238 12.5735 3.47004 12.5703 3.90129C12.5672 4.33254 12.9141 4.68489 13.3461 4.68801C13.7774 4.69114 14.1297 4.34426 14.1328 3.91301C14.136 3.48176 13.7891 3.12942 13.3578 3.12551Z"
                          fill="white"
                        ></path>
                        <path
                          d="M13.3224 7.81264C10.3059 7.79123 7.83547 10.2248 7.81266 13.2403C7.78992 16.2557 10.2248 18.7273 13.2403 18.75C13.2543 18.7501 13.2682 18.7502 13.2822 18.7502C16.2785 18.7502 18.7274 16.3239 18.75 13.3223C18.7728 10.3071 16.338 7.83537 13.3224 7.81264ZM13.282 17.1877C13.2722 17.1877 13.2619 17.1877 13.252 17.1876C11.0981 17.1713 9.35883 15.4059 9.37508 13.252C9.39125 11.1079 11.1403 9.37491 13.2806 9.37491C13.2905 9.37491 13.3008 9.37499 13.3106 9.37507C15.4646 9.39132 17.2038 11.1568 17.1876 13.3106C17.1713 15.4548 15.4224 17.1877 13.282 17.1877Z"
                          fill="white"
                        ></path>
                        <path
                          d="M16.69 3.71798C16.2836 3.57376 15.8368 3.78665 15.6926 4.19337C15.5484 4.60009 15.7613 5.04658 16.1679 5.1908C19.6091 6.41041 21.9025 9.68784 21.875 13.3462C21.8718 13.7776 22.2189 14.13 22.6504 14.1333C22.6523 14.1333 22.6544 14.1333 22.6564 14.1333C23.085 14.1333 23.4342 13.7874 23.4375 13.3579C23.47 9.03393 20.7583 5.15994 16.69 3.71798Z"
                          fill="white"
                        ></path>
                        <path
                          d="M18.0751 29.4096C23.2714 22.7209 26.5189 19.233 26.5627 13.3811C26.6177 6.01837 20.6425 0 13.2803 0C6.00405 0 0.0557598 5.89282 0.000447185 13.1819C-0.0442404 19.1925 3.2635 22.6756 8.4957 29.4085C3.29061 30.1863 0.000447185 32.1408 0.000447185 34.5313C0.000447185 36.1327 1.48061 37.5696 4.16835 38.5774C6.61468 39.4948 9.85117 40 13.2816 40C16.712 40 19.9485 39.4948 22.3948 38.5774C25.0825 37.5695 26.5627 36.1326 26.5627 34.5312C26.5627 32.142 23.2756 30.188 18.0751 29.4096ZM1.56287 13.1937C1.61162 6.76173 6.85968 1.5625 13.2805 1.5625C19.7773 1.5625 25.0487 6.87408 25.0003 13.3695C24.9587 18.9268 21.5148 22.3516 16.0166 29.519C15.0359 30.7969 14.1352 32.005 13.2827 33.1868C12.4327 32.0043 11.5501 30.8178 10.5547 29.5186C4.82921 22.0511 1.52053 18.8851 1.56287 13.1937ZM13.2816 38.4376C6.57444 38.4376 1.56287 36.3753 1.56287 34.5313C1.56287 33.1638 4.55882 31.4363 9.59617 30.8381C10.7097 32.2991 11.6859 33.6265 12.6434 34.9821C12.7897 35.1891 13.0273 35.3124 13.2809 35.3126C13.2811 35.3126 13.2813 35.3126 13.2816 35.3126C13.5348 35.3126 13.7724 35.1898 13.9189 34.9831C14.8674 33.6451 15.8703 32.2851 16.9743 30.839C22.007 31.4378 25.0003 33.1648 25.0003 34.5314C25.0002 36.3753 19.9887 38.4376 13.2816 38.4376Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <div className="bottom">
                      <div className="text-6">Our Address:</div>
                      <div>
                        <div className="text-7">
                          Suite # 105, 1st Floor, Sea Breeze Plaza,
                          Shahra-e-Faisal, Karachi- 75330, Pakistan.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="bg bg2"></div>
                <div className="content">
                  <div className="inner">
                    <div className="top">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <path
                          d="M14.5774 15.8629C13.5314 15.858 12.4922 15.6941 11.4955 15.3769C9.90292 14.8441 8.72005 13.4959 8.39898 11.8475C8.04765 10.1553 8.68792 8.36598 10.1553 6.93855C10.3127 6.78521 10.4763 6.63833 10.6461 6.49791C12.1484 5.24011 14.1739 4.803 16.0613 5.32927C17.8886 5.91247 19.1511 7.58234 19.2143 9.49934C19.2827 10.6028 18.923 11.6902 18.2101 12.5352C17.6603 13.2278 16.7694 13.555 15.902 13.3828C15.5473 13.3092 15.2378 13.0944 15.0448 12.7878C14.8716 12.4899 14.8272 12.1344 14.9218 11.8032C15.3298 10.2607 15.7447 7.91652 15.7488 7.89277C15.7778 7.72856 15.8922 7.59228 16.0489 7.53528C16.2056 7.47827 16.3808 7.50919 16.5085 7.6164C16.6363 7.72361 16.6971 7.89081 16.6681 8.05502C16.6508 8.15254 16.2423 10.4615 15.8241 12.0417C15.7943 12.1293 15.8018 12.2253 15.8449 12.3071C15.9094 12.3964 16.0068 12.4564 16.1155 12.4739C16.6465 12.5625 17.1829 12.3495 17.5084 11.9207C18.062 11.2584 18.3394 10.4084 18.283 9.54699C18.2374 8.02108 17.2367 6.68888 15.784 6.21989C14.1982 5.78372 12.4994 6.15633 11.2417 7.21615C11.0918 7.3406 10.946 7.47088 10.8061 7.60714C10.0806 8.31279 8.92222 9.77699 9.31256 11.6575C9.57482 12.9713 10.5131 14.048 11.7788 14.4874C13.9673 15.1856 17.112 15.2696 18.7689 13.2094C18.9317 13.0134 19.2217 12.9842 19.4203 13.1438C19.6189 13.3035 19.6527 13.5929 19.4962 13.7941C18.271 15.3178 16.4065 15.8629 14.5774 15.8629Z"
                          fill="white"
                        ></path>
                        <path
                          d="M12.9792 13.4435C12.4859 13.4519 12.0048 13.2902 11.6169 12.9855C10.7212 12.2687 10.6966 11.0234 10.9477 10.1754C11.0322 9.89302 11.1458 9.62011 11.2865 9.36106C11.6366 8.65463 12.1965 8.07363 12.8894 7.69756C13.7524 7.24977 14.8068 7.41958 15.4855 8.11566C15.8222 8.48469 16.0759 8.92166 16.2293 9.39709C16.3106 9.63835 16.1835 9.90021 15.9437 9.98562C15.7038 10.071 15.4398 9.94846 15.3503 9.71015C15.2396 9.35891 15.0558 9.03514 14.8108 8.76022C14.415 8.35554 13.7984 8.26347 13.3018 8.53489C12.7821 8.82797 12.3644 9.27295 12.1048 9.81015C11.9958 10.0114 11.9076 10.2234 11.8419 10.4427C11.6606 11.0561 11.7004 11.8566 12.2008 12.2573C12.7478 12.6966 13.6707 12.5108 14.1899 12.0629C14.5769 11.7146 14.9093 11.3101 15.1762 10.8631C15.2627 10.7182 15.4205 10.6313 15.5891 10.6357C15.7577 10.6401 15.9108 10.7352 15.9896 10.8843C16.0683 11.0334 16.0605 11.2135 15.969 11.3552C15.6529 11.8819 15.2593 12.3581 14.8015 12.7678C14.2913 13.1983 13.6468 13.4373 12.9792 13.4435Z"
                          fill="white"
                        ></path>
                        <path
                          d="M26.5981 28H1.3999C0.627109 27.9992 0.000848671 27.3729 0 26.6001V9.33467C7.33548e-06 9.15372 0.104627 8.98908 0.268447 8.91223C0.432266 8.83538 0.625748 8.86016 0.764906 8.97583L12.2147 18.4917C13.2508 19.3473 14.7483 19.347 15.784 18.491L27.2327 8.97583C27.3719 8.85993 27.5655 8.835 27.7295 8.91188C27.8935 8.98877 27.9981 9.15357 27.998 9.33467V26.6001C27.9972 27.3729 27.3709 27.9992 26.5981 28ZM0.933267 10.3292V26.6001C0.933602 26.8577 1.14232 27.0664 1.3999 27.0667H26.5981C26.8557 27.0665 27.0645 26.8577 27.0648 26.6001V10.3292L16.3798 19.2092C14.9983 20.351 13.0008 20.3513 11.6189 19.2099L0.933267 10.3292Z"
                          fill="white"
                        ></path>
                        <path
                          d="M0.46709 9.80131C0.263839 9.80149 0.0838465 9.67009 0.0220927 9.47645C-0.0396612 9.28281 0.0310296 9.07147 0.196863 8.95395L4.39657 5.97682C4.60683 5.8311 4.89522 5.88183 5.04313 6.09057C5.19103 6.29931 5.14328 6.58822 4.93609 6.73828L0.736385 9.7154C0.657746 9.77136 0.563607 9.80139 0.46709 9.80131Z"
                          fill="white"
                        ></path>
                        <path
                          d="M27.5311 9.80131C27.4346 9.80139 27.3404 9.77136 27.2618 9.7154L23.0621 6.73828C22.8549 6.58822 22.8072 6.29931 22.9551 6.09057C23.103 5.88183 23.3914 5.8311 23.6016 5.97682L27.8013 8.95395C27.9672 9.07147 28.0378 9.28281 27.9761 9.47645C27.9143 9.67009 27.7343 9.80149 27.5311 9.80131Z"
                          fill="white"
                        ></path>
                        <path
                          d="M18.3103 3.26841C18.2137 3.26846 18.1195 3.23844 18.0408 3.1825L15.8102 1.60061C14.7748 0.725669 13.2618 0.716555 12.216 1.57896L9.95745 3.18255C9.82143 3.27901 9.64428 3.29557 9.49273 3.22601C9.34118 3.15644 9.23826 3.01131 9.22274 2.84528C9.20721 2.67925 9.28144 2.51756 9.41746 2.4211L11.648 0.839208C13.0262 -0.287729 15.0101 -0.278765 16.3781 0.860579L18.5807 2.42091C18.7466 2.5384 18.8174 2.74984 18.7556 2.94358C18.6938 3.13731 18.5137 3.26872 18.3103 3.26841Z"
                          fill="white"
                        ></path>
                        <path
                          d="M0.769799 27.748C0.573145 27.7482 0.39749 27.6251 0.33059 27.4401C0.26369 27.2552 0.319907 27.0482 0.471154 26.9225L11.1197 18.0751C11.2477 17.9663 11.4242 17.9347 11.582 17.9923C11.7398 18.0499 11.8545 18.1878 11.8822 18.3535C11.91 18.5191 11.8466 18.6869 11.7162 18.7928L1.06765 27.6402C0.984046 27.7099 0.878644 27.7481 0.769799 27.748Z"
                          fill="white"
                        ></path>
                        <path
                          d="M27.228 27.748C27.1192 27.7481 27.0139 27.7099 26.9304 27.6402L16.2818 18.7928C16.1514 18.6869 16.088 18.5191 16.1158 18.3535C16.1436 18.1878 16.2582 18.0499 16.416 17.9923C16.5738 17.9347 16.7503 17.9663 16.8783 18.0751L27.5266 26.9225C27.6778 27.0482 27.7341 27.2552 27.6672 27.4401C27.6003 27.6251 27.4246 27.7482 27.228 27.748Z"
                          fill="white"
                        ></path>
                        <path
                          d="M23.3312 13.2917C23.0735 13.2917 22.8646 13.0828 22.8646 12.8251V3.27205C22.8632 3.28185 22.8445 3.26865 22.8132 3.26841H5.18382C5.16319 3.26715 5.14295 3.2744 5.12782 3.28848L5.13249 12.8251C5.13249 13.0828 4.92357 13.2917 4.66585 13.2917C4.40814 13.2917 4.19922 13.0828 4.19922 12.8251V3.26841C4.21427 2.7392 4.65456 2.32187 5.18382 2.33515H22.8132C23.3425 2.32192 23.7827 2.73923 23.7978 3.26841V12.8251C23.7978 13.0828 23.5889 13.2917 23.3312 13.2917Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <div className="bottom">
                      <div className="text-6">Email:</div>
                      <div>
                        <div className="text-7">info@greener.com.pk</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="bg bg3"></div>
                <div className="content">
                  <div className="inner">
                    <div className="top">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M22.7676 0C22.3361 0 21.9863 0.349798 21.9863 0.781398C21.9863 1.213 22.3361 1.5628 22.7676 1.5628C31.4074 1.5628 38.4362 8.59324 38.4362 17.2344C38.4362 17.666 38.7862 18.0158 39.2174 18.0158C39.6489 18.0158 39.9987 17.666 39.9987 17.2344C39.9987 7.73157 32.2689 0 22.7676 0Z"
                          fill="white"
                        ></path>
                        <path
                          d="M34.5177 18.0162C34.9492 18.0162 35.299 17.6661 35.299 17.2348C35.299 10.3234 29.6773 4.70068 22.7676 4.70068C22.3361 4.70068 21.9863 5.05079 21.9863 5.48208C21.9863 5.91368 22.3361 6.26348 22.7676 6.26348C28.8158 6.26348 33.7365 11.1851 33.7365 17.2348C33.7365 17.6661 34.0862 18.0162 34.5177 18.0162Z"
                          fill="white"
                        ></path>
                        <path
                          d="M29.0359 17.2346C29.0359 17.6659 29.3856 18.016 29.8171 18.016C30.2486 18.016 30.5984 17.6659 30.5984 17.2346C30.5984 12.9159 27.0855 9.40234 22.7676 9.40234C22.3361 9.40234 21.9863 9.75214 21.9863 10.1834C21.9863 10.615 22.3361 10.9648 22.7676 10.9648C26.224 10.9648 29.0359 13.7773 29.0359 17.2346Z"
                          fill="white"
                        ></path>
                        <path
                          d="M21.9863 14.8844C21.9863 15.3157 22.3361 15.6655 22.7677 15.6655C23.6328 15.6655 24.3366 16.3694 24.3366 17.2347C24.3366 17.666 24.6864 18.0161 25.118 18.0161C25.5493 18.0161 25.8994 17.666 25.8994 17.2347C25.8994 15.5077 24.4944 14.103 22.7677 14.103C22.3361 14.103 21.9863 14.4528 21.9863 14.8844Z"
                          fill="white"
                        ></path>
                        <path
                          d="M14.6409 25.3703C14.6409 25.8019 14.2911 26.1517 13.8595 26.1517C13.4279 26.1517 13.0781 25.8019 13.0781 25.3703C13.0781 24.939 13.4279 24.5889 13.8595 24.5889C14.2911 24.5889 14.6409 24.939 14.6409 25.3703Z"
                          fill="white"
                        ></path>
                        <path
                          d="M21.4068 39.0588C24.9642 40.8026 29.244 40.077 32.0571 37.2634L33.6723 35.6478C34.5494 34.7714 34.5497 33.3518 33.6727 32.4749L27.4312 26.2328C26.5557 25.3559 25.136 25.3547 24.2595 26.2325L21.6076 28.8853C21.0882 29.4048 20.2865 29.5107 19.7017 29.1374C18.7484 28.5279 17.821 27.8558 16.9454 27.1397C16.6112 26.8665 16.1193 26.9159 15.8462 27.2499C15.573 27.5841 15.6225 28.0764 15.9563 28.3493C16.8789 29.1039 17.8557 29.812 18.8607 30.4542C20.0585 31.2194 21.6784 31.0244 22.7123 29.9903L25.3649 27.3372C25.6301 27.0716 26.0598 27.071 26.3262 27.3375L32.5679 33.5798C32.8337 33.846 32.8343 34.2764 32.5679 34.5422L30.9523 36.1584C28.6089 38.5023 25.0493 39.1039 22.0943 37.6556C11.2689 32.3461 5.37898 23.9271 2.34432 17.7992C0.892601 14.8687 1.49532 11.3219 3.84425 8.9731L5.42445 7.3929C5.68934 7.12735 6.11933 7.12644 6.38544 7.39321L12.6278 13.6365C12.8921 13.9005 12.8948 14.3309 12.6272 14.5979L9.97521 17.2507C8.94128 18.2849 8.74628 19.905 9.51135 21.1034C9.96209 21.8088 10.4479 22.5047 10.9557 23.1716C11.217 23.515 11.7071 23.5813 12.0504 23.32C12.3937 23.0587 12.4603 22.5685 12.1987 22.2248C11.7172 21.5921 11.2557 20.9315 10.8279 20.2622C10.4546 19.677 10.5605 18.8752 11.0799 18.3557L13.7316 15.7035C14.6084 14.8278 14.6093 13.4075 13.7322 12.5312L7.49048 6.28857C6.61524 5.41163 5.19526 5.41041 4.3191 6.28826L2.73952 7.86815C-0.0839584 10.6913 -0.805392 14.9612 0.944176 18.493C4.08656 24.8379 10.187 33.556 21.4068 39.0588Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <div className="bottom">
                      <div className="text-6">Phone:</div>
                      <div>
                        <div className="text-7">Tel No : +92 345 8230986</div>
                        <div className="text-7">Fax No : +92 21 32791115</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="bg bg4"></div>
                <div className="content">
                  <div className="inner">
                    <div className="top">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="28"
                        viewBox="0 0 25 28"
                        fill="none"
                      >
                        <path
                          d="M19.7873 18.8341C18.4457 18.8341 17.237 19.4134 16.3981 20.335L8.85275 15.6618C9.0542 15.1461 9.16592 14.586 9.16592 14C9.16592 13.4138 9.0542 12.8537 8.85275 12.3382L16.3981 7.66479C17.237 8.58636 18.4457 9.16592 19.7873 9.16592C22.3144 9.16592 24.3703 7.11002 24.3703 4.58286C24.3703 2.05569 22.3144 0 19.7873 0C17.2601 0 15.2042 2.05591 15.2042 4.58307C15.2042 5.16904 15.3161 5.72916 15.5174 6.24484L7.9722 10.9181C7.1333 9.99649 5.92462 9.41693 4.58307 9.41693C2.05591 9.41693 0 11.4731 0 14C0 16.5272 2.05591 18.5831 4.58307 18.5831C5.92462 18.5831 7.1333 18.0037 7.9722 17.0819L15.5174 21.7552C15.3161 22.2708 15.2042 22.831 15.2042 23.4171C15.2042 25.9441 17.2601 28 19.7873 28C22.3144 28 24.3703 25.9441 24.3703 23.4171C24.3703 20.89 22.3144 18.8341 19.7873 18.8341ZM16.8754 4.58307C16.8754 2.97748 18.1817 1.67117 19.7873 1.67117C21.3929 1.67117 22.6992 2.97748 22.6992 4.58307C22.6992 6.18866 21.3929 7.49496 19.7873 7.49496C18.1817 7.49496 16.8754 6.18866 16.8754 4.58307ZM4.58307 16.9119C2.97726 16.9119 1.67096 15.6056 1.67096 14C1.67096 12.3944 2.97726 11.0881 4.58307 11.0881C6.18866 11.0881 7.49475 12.3944 7.49475 14C7.49475 15.6056 6.18866 16.9119 4.58307 16.9119ZM16.8754 23.4169C16.8754 21.8113 18.1817 20.505 19.7873 20.505C21.3929 20.505 22.6992 21.8113 22.6992 23.4169C22.6992 25.0225 21.3929 26.3288 19.7873 26.3288C18.1817 26.3288 16.8754 25.0225 16.8754 23.4169Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <div className="bottom">
                      <div className="text-6">Follow Us:</div>
                      <div className="socials">
                        <abbr title="Facebook">
                          <a
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=61557987998333&mibextid=LQQJ4d"
                          >
                            <div className="icon">
                              <img src={facebook} alt="" />
                            </div>
                          </a>
                        </abbr>
                        <abbr title="Instagram">
                          <a
                            target="_blank"
                            href="https://www.instagram.com/greener.pk?igsh=MWdxcnNoZTQwYzN0Nw=="
                          >
                            <div className="icon">
                              <img src={instagram} alt="" />
                            </div>
                          </a>
                        </abbr>
                        <abbr title="X(Twitter)">
                          <a
                            href="https://twitter.com/Greener1841567"
                            target="_blank"
                          >
                            <div className="icon">
                              <img src={twitter} alt="" />
                            </div>
                          </a>
                        </abbr>
                        <abbr title="LinkedIn">
                          <div className="icon">
                            <img src={linkedIn} alt="" />
                          </div>
                        </abbr>
                        <abbr title="Youtube">
                          <a
                            href="http://www.youtube.com/@GreenerPk"
                            target="_blank"
                          >
                            <div className="icon">
                              <img src={youtube} alt="" />
                            </div>
                          </a>
                        </abbr>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(ContactUs);
