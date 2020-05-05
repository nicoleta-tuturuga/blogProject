import React from "react";

import "./Log.css";

const log = () => {

    return (
        <div>
            <div className="log-container row d-flex justify-content-center">
                <div className="login-container col-lg-6">
                    <div className="loginForm signin-form d-flex flex-column align-items-center">
                        <div className="sign-title">
                            <p>
                                SIGN IN
                            </p>
                            <h3>
                                Enter in your account
                            </h3>
                        </div>
                        <form className="signin-form d-flex flex-column">
                            <label for="UserName">
                                Enter your email or username
                                </label>
                            <input className="username-field"
                                required="required"
                                id="UserName"
                                name="UserName"
                                type="text">
                            </input>
                            <label for="Password">
                                Enter your password
                                </label>
                            <input className="password-field"
                                required="required"
                                id="Password"
                                name="Password"
                                type="password">
                            </input>
                            <input className="signButton signin-button"
                                type="submit"
                                value="SIGN IN" />
                        </form>
                        <a className="forgot-password" href="#">
                            Have you forgot your password?
                        </a>
                    </div>
                </div>

                {/*--------------- Sign in section--------------- */}
                <div className="loginForm signup-form col-lg-6 d-flex flex-column align-items-center">
                    <div className="sign-title">
                        <p>
                            SIGN UP
                    </p>
                        <h3>
                            Create a NEW account
                    </h3>
                    </div>
                    <div>
                        <form className="signup-form d-flex flex-column">
                            <label for="FirstName">
                                First Name
                            </label>
                            <input
                                maxlength="30"
                                required="required"
                                id="FirstName"
                                name="FirstName"
                                type="text">
                            </input>
                            <label for="LastName">
                                Last Name
                            </label>
                            <input
                                maxlength="30"
                                required="required"
                                id="LastName"
                                name="LastName"
                                type="text">
                            </input>

                            <div className="input-field">
                                <label for="UserName">
                                    UserName
                            </label>
                                <input
                                    maxlength="10"
                                    required="required"
                                    id="UserName"
                                    name="UserName"
                                    type="text">
                                </input>
                            </div>

                            <label for="EmailAdress">
                                Email
                            </label>
                            <input
                                required="required"
                                id="EmailAdress"
                                name="EmailAdress"
                                type="email">
                            </input>

                            <label for="Password">
                                Password (min 5 characters)
                            </label>
                            <input
                                minlength="5"
                                maxlength="10"
                                required="required"
                                id="Password"
                                name="Password"
                                type="password">
                            </input>

                            <label for="confirm-Password">
                                Confirm Password
                                {/* password validation with javascript */}
                            </label>
                            <input
                                minlength="5"
                                maxlength="10"
                                required="required"
                                id="Password"
                                name="Password"
                                type="password">
                            </input>

                            <div className="gender-field">
                                <label for="gender">
                                    Gender
                            </label>
                                <ul className="gender-radio-list">
                                    <li>
                                        <input
                                            required
                                            id="maleGender"
                                            name="Gender"
                                            type="radio"
                                            value="Male" />
                                        <label for="maleGender">
                                            Male
                                    </label>
                                    </li>
                                    <li>
                                        <input
                                            required
                                            id="femaleGender"
                                            name="Gender"
                                            type="radio"
                                            value="Female" />
                                        <label for="femaleGender">
                                            Female
                                    </label>
                                    </li>
                                </ul>
                            </div>

                            <div className="date-of-birth">
                                <label for="date-of-birth">
                                    Date of birth
                            </label>

                                <input
                                    type="date"
                                    name="dateOfBirth" />
                            </div>

                            <div className="checkbox-field">
                                <label>
                                    Select your interests and we'll update you via email.
                            </label>
                                <ul className="checkbox-marketing-field">
                                    <li>
                                        <input className="marketing-newsletter"
                                            type="radio"
                                            name="marketing-newsletter"
                                            required />
                                        <label for="NewProductMarketing">
                                            New In
                                    </label>
                                    </li>
                                    <li>
                                        <input className="marketing-newsletter"
                                            type="radio"
                                            name="marketing-newsletter"
                                            required />
                                        <label for="SalesProductMarketing">
                                            Discounts & Sales
                                    </label>
                                    </li>
                                    <li>
                                        <input className="marketing-newsletter"
                                            type="radio"
                                            name="marketing-newsletter"
                                            required />
                                        <label for="BoutiquesMarketing">
                                            Boutique News
                                    </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="signup-terms">
                                <input className="signButton signup-button"
                                    type="submit"
                                    value="SIGN UP" />

                                <span className="terms-of-service">
                                    By clicking on Sign up you are agreeing to the
                            <a className="terms" href="#">
                                        Terms of Service.
                            </a>
                                </span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default log;