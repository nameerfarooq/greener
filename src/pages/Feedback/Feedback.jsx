import React from "react";
import HeroSection from "../../components/HeroSection";
import ButtonStyle1 from "../../components/Buttons/ButtonStyle1";

const Feedback = () => {
  return (
    <div>
      <HeroSection text={"Customer Feedback"} />
      <div className="feedback-page">
        <div className="inner">
          <div className="form">
            <div className="text-5 center">
              Your feedback helps us improve
              <br />
              <br />
              <form
                action="https://formspree.io/f/mayrvoja"
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
                    name="address"
                    placeholder="Residential Address"
                    required
                  />
                </div>
                <div className="question">
                  <div className="text-2">
                    Q1. How easy was it to understand the benefits of our solar
                    products/services?
                  </div>
                  <div className="answer-holder">
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q1. How easy was it to understand the benefits of our solar
                    products/services?"
                        value={"Very Dissatisfied"}
                      />
                      <div className="text-7">Very Dissatisfied</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q1. How easy was it to understand the benefits of our solar
                    products/services?"
                        value={"Dissatisfied"}
                      />
                      <div className="text-7">Dissatisfied</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q1. How easy was it to understand the benefits of our solar
                    products/services?"
                        value={"Neutral"}
                      />
                      <div className="text-7">Neutral</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q1. How easy was it to understand the benefits of our solar
                    products/services?"
                        value={"Satisfied"}
                      />
                      <div className="text-7">Satisfied</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q1. How easy was it to understand the benefits of our solar
                    products/services?"
                        value={"Very Satisfied"}
                      />
                      <div className="text-7">Very Satisfied</div>
                    </div>
                  </div>
                </div>
                <div className="question">
                  <div className="text-2">
                    Q2. How would you rate the overall quality of our solar
                    products/services?
                  </div>
                  <div className="answer-holder">
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q2. How would you rate the overall quality of our solar
                    products/services?"
                        value={"Poor"}
                      />
                      <div className="text-7">Poor</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q2. How would you rate the overall quality of our solar
                    products/services?"
                        value={"Above Average"}
                      />
                      <div className="text-7">Above Average</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q2. How would you rate the overall quality of our solar
                    products/services?"
                        value={"Average"}
                      />
                      <div className="text-7">Average</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q2. How would you rate the overall quality of our solar
                    products/services?"
                        value={"Good"}
                      />
                      <div className="text-7">Good</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q2. How would you rate the overall quality of our solar
                    products/services?"
                        value={"Excellent"}
                      />
                      <div className="text-7">Excellent</div>
                    </div>
                  </div>
                </div>
                <div className="question">
                  <div className="text-2">
                    Q3: To what extent do you feel our solar products/services
                    meet your needs?
                  </div>
                  <div className="answer-holder">
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q3: To what extent do you feel our solar products/services
                    meet your needs?"
                        value={"Not at all"}
                      />
                      <div className="text-7">Not at all</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q3: To what extent do you feel our solar products/services
                    meet your needs?"
                        value={"Partially"}
                      />
                      <div className="text-7">Partially</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q3: To what extent do you feel our solar products/services
                    meet your needs?"
                        value={"Moderately"}
                      />
                      <div className="text-7">Moderately</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q3: To what extent do you feel our solar products/services
                    meet your needs?"
                        value={"Mostly"}
                      />
                      <div className="text-7">Mostly</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q3: To what extent do you feel our solar products/services
                    meet your needs?"
                        value={"Completely"}
                      />
                      <div className="text-7">Completely</div>
                    </div>
                  </div>
                </div>
                <div className="question">
                  <div className="text-2">
                    Q4. How satisfied are you with the customer service provided
                    by our team?
                  </div>
                  <div className="answer-holder">
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q4. How satisfied are you with the customer service provided
                    by our team?"
                        value={"Very Dissatisfied"}
                      />
                      <div className="text-7">Very Dissatisfied</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q4. How satisfied are you with the customer service provided
                    by our team?"
                        value={"Dissatisfied"}
                      />
                      <div className="text-7">Dissatisfied</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q4. How satisfied are you with the customer service provided
                    by our team?"
                        value={"Neutral"}
                      />
                      <div className="text-7">Neutral</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q4. How satisfied are you with the customer service provided
                    by our team?"
                        value={"Satisfied"}
                      />
                      <div className="text-7">Satisfied</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q4. How satisfied are you with the customer service provided
                    by our team?"
                        value={"Very Satisfied"}
                      />
                      <div className="text-7">Very Satisfied</div>
                    </div>
                  </div>
                </div>
                <div className="question">
                  <div className="text-2">
                    Q5: How would you rate the value for money of our solar
                    products/services?
                  </div>
                  <div className="answer-holder">
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q5: How would you rate the value for money of our solar
                    products/services?"
                        value={"Poor Value"}
                      />
                      <div className="text-7">Poor Value</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q5: How would you rate the value for money of our solar
                    products/services?"
                        value={"Below Average Value"}
                      />
                      <div className="text-7">Below Average Value</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q5: How would you rate the value for money of our solar
                    products/services?"
                        value={"Average Value"}
                      />
                      <div className="text-7">Average Value</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q5: How would you rate the value for money of our solar
                    products/services?"
                        value={"Above Average Value"}
                      />
                      <div className="text-7">Above Average Value</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q5: How would you rate the value for money of our solar
                    products/services?"
                        value={"Excellent Value"}
                      />
                      <div className="text-7">Excellent Value</div>
                    </div>
                  </div>
                </div>
                <div className="question">
                  <div className="text-2">
                    Q6: How well do our solar products/services perform compared
                    to your expectations?{" "}
                  </div>
                  <div className="answer-holder">
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q6: How well do our solar products/services perform compared
                    to your expectations?"
                        value={"Much Worse"}
                      />
                      <div className="text-7">Much Worse</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q6: How well do our solar products/services perform compared
                    to your expectations?"
                        value={"Worse"}
                      />
                      <div className="text-7">Worse</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q6: How well do our solar products/services perform compared
                    to your expectations?"
                        value={"As Expected"}
                      />
                      <div className="text-7">As Expected</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q6: How well do our solar products/services perform compared
                    to your expectations?"
                        value={"Better"}
                      />
                      <div className="text-7">Better</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q6: How well do our solar products/services perform compared
                    to your expectations?"
                        value={"Much Better"}
                      />
                      <div className="text-7">Much Better</div>
                    </div>
                  </div>
                </div>
                <div className="question">
                  <div className="text-2">
                    Q7: How likely are you to recommend our solar
                    products/services to others?
                  </div>
                  <div className="answer-holder">
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q7: How likely are you to recommend our solar
                    products/services to others?"
                        value={"Unlikely"}
                      />
                      <div className="text-7">Unlikely</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q7: How likely are you to recommend our solar
                    products/services to others?"
                        value={"Maybe"}
                      />
                      <div className="text-7">Maybe</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q7: How likely are you to recommend our solar
                    products/services to others?"
                        value={"Neutral"}
                      />
                      <div className="text-7">Neutral</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q7: How likely are you to recommend our solar
                    products/services to others?"
                        value={"Likely"}
                      />
                      <div className="text-7">Likely</div>
                    </div>
                    <div className="answers">
                      <input
                        type="radio"
                        required
                        name="Q7: How likely are you to recommend our solar
                    products/services to others?"
                        value={"Very Likely"}
                      />
                      <div className="text-7">Very Likely</div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="double-field">
                  <textarea
                    name="Message"
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <br />
                <div className="center-margin">
                  <button type="submit" className="nostyle">
                    <ButtonStyle1 text="Submit" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
