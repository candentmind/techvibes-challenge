import React from "react";
import styled from "styled-components";
import productLogo from "../../assets/product-logo2.png";
import userImage from "../../assets/profile_photo_small.png";
import { Row, Col, Container } from "react-bootstrap";
import { FaMicrophone } from "react-icons/fa";

const Backdrop = styled.div`
  border: solid orange-red 2px;
  background-color: #e5e9ec;
`;

const PageHeader = styled.section`
  form {
    padding: 0.5em;

    .form-group {
      position: relative;
      display: flex;
      align-items: center;

      .search {
        width: 100%;
        position: relative;
      }

      img {
        border-radius: 100%;
        width: 10%;
      }

      input {
        width: 100%;
      }

      .mic-icon {
        position: absolute;
        right: 0.5em;
      }
    }
  }
`;

const Main = styled.div`
  border: solid green 2px;
  padding: 1em;
  background-color: whitesmoke;
`;

const SideBar = styled.section`
  border: solid brown 2px;
  padding: 1em;
  background-color: whitesmoke;
`;

const Dashboard = (props) => {
  return (
    <Backdrop>
      <PageHeader>
        <Container fluid>
          <Row>
            <Col md={{ span: 3 }}>
              <a class="navbar-brand" href="#">
                <img
                  src={productLogo}
                  alt="product-logo"
                  className="img-fluid"
                ></img>
              </a>
            </Col>
            <Col md={{ span: 9 }}>
              <form id="search" role="search">
                <div class="form-group">
                  <div className="search">
                    <input type="text" placeholder="Search..." />
                    <span className="mic-icon">
                      <FaMicrophone />
                    </span>
                  </div>
                  <div>
                    <img src={userImage} className="img-fluid" />
                    <span>Hello world</span>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </PageHeader>
      <Container fluid>
        <Row>
          <Col md={{ span: 3 }}>
            <SideBar>SideBar</SideBar>
          </Col>
          <Col md={{ span: 9 }}>
            <Main>Main</Main>
          </Col>
        </Row>
      </Container>
    </Backdrop>
  );
};

export default Dashboard;
