import React from "react";
import styled from "styled-components";
import Button from "./Button";
import productLogo from "../../assets/product-logo.PNG";
import businessMan from "../../assets/business-man.jpg";
import { Row, Col, Container } from "react-bootstrap";

const Backdrop = styled.div`
  padding: 3em;
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient(90deg, #c9a2e5, #fa9cbe);
  position: relative;
  z-index: 0;
`;

const Card = styled.div`
  padding: 2rem;
  border-radius: 1.5em;
  background-color: #d4aad8;
  border-bottom-right-radius: 7em;
  position: relative;

  :after {
    background-color: #e4becb;
    border-radius: 2em;
    right: 0;
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: -1;
  }
`;

const LoginFormWrapper = styled.div`
  text-align: center;

  input::placeholder,
  textarea::placeholder {
    color: grey;
    font-weight: bold;
  }

  input:focus,
  input:focus-visible {
    outline: none;
  }

  input,
  textarea {
    border: 1px none #000;
    background-color: #d4aad8;
    display: block;
    width: 100%;
    height: 38px;
    padding: 8px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.42857143;
    color: grey;
    border-bottom: 1px solid whitesmoke;
  }

  .form-header {
    color: white;
    font-weight: bold;
  }

  button {
    margin-left: 0;
    padding-left: 4em;
    padding-right: 4em;
  }
`;

const RememberMeControls = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    display: initial;
    width: 1.5em;
    margin-bottom: 0;
    padding: 0;
    margin-right: 1em;
  }

  label {
    color: #7b4bff;
    font-weight: bold;
  }
`;

const CTASection = styled.section`
  img {
    max-width: 100%;
    transform: rotate(-1.5deg);
  }
`;

const ProductHeader = styled.section`
  img {
    max-width: 100%;
  }
`;

const LoginPage = (props) => {
  return (
    <Backdrop>
      <Card>
        <ProductHeader>
          <img src={productLogo} alt="product-logo"></img>
        </ProductHeader>
        <Container fluid>
          <Row>
            <Col md={{ span: 7 }}>
              <CTASection>
                <a href={"#"}>
                  <Button>Create your organization</Button>
                </a>
                <a href={"#"}>
                  <Button>Apply for admission</Button>
                </a>
                <img src={businessMan} alt="business-man"></img>
              </CTASection>
            </Col>
            <Col md={{ span: 5 }}>
              <LoginFormWrapper>
                <h3 className="form-header">Welcome back</h3>
                <form name="login-form" method="POST">
                  <input
                    type="text"
                    maxLength="256"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="password"
                    name="user_password"
                    placeholder="Password"
                    required
                  />
                  <input
                    type="text"
                    maxLength="4"
                    name="school_code"
                    placeholder="School Code"
                    required
                  />
                  <RememberMeControls>
                    <input type="checkbox" id="rememberMe" name="remember-me" />
                    <label for="rememberMe">Remember me</label>
                  </RememberMeControls>
                  <Button>Log in</Button>
                </form>
              </LoginFormWrapper>
            </Col>
          </Row>
        </Container>
      </Card>
    </Backdrop>
  );
};

export default LoginPage;
