import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./css.css";
import Profile from "../profile-item/Profile";
import Data from "../../data.json";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FormControl } from "react-bootstrap";

function Home() {
  const [categories, setCategories] = useState([]);
  const [kw, setKw] = useState();
  const nav = useNavigate();
  const [newData, setNewData] = useState([]);
  const [q] = useSearchParams();
  const [dataFiltered, setDataFiltered] = useState([])

  const search = (event) => {
    event.preventDefault();

    let cat = q.get("cat");
    // console.log(status)

    if (cat) {
      nav(`/?cat=${cat}&kw=${kw}`);
    } else nav(`/?kw=${kw}`);
  };

  const clickOnline = (event) => {
    event.preventDefault();

    nav(`/?status=online`);
  };

  const clickOffline = (event) => {
    event.preventDefault();

    nav(`/?status=offline`);
  };

  const clickTogge = (e) => {
    e.preventDefault();

    let kw = q.get("kw");

    if(kw){
      nav(`/?cat=${e.target.innerText}}&kw=${kw}`);
    }else
      nav(`/?cat=${e.target.innerText}`);
  };

  let data = Data.data.advisorProfileCollection.items;
  var filtered = data

  useEffect(() => {
    let kw = q.get("kw");
    let status = q.get("status");
    let cate = q.get("cat");

    if(status != null){
      filtered = filtered.filter((d) =>
          d.status.includes(status)
      );
      setNewData(filtered);
    }

    if(cate != null){
      filtered = filtered.filter(d=>{
        let isCat = false
        d.categoriesCollection.items.forEach(c => 
          { 
            if(c.displayName.toLocaleLowerCase() === cate.toLocaleLowerCase()){
                    isCat= true
            }
          }
          );
        return isCat
      })

      setNewData(filtered);
    }

    if (kw != null) {
      filtered = filtered.filter((d) =>
          d.displayName.toLowerCase().includes(kw.toLowerCase())
      );
      if (filtered.length === 0) {
        setNewData(data);
      } else {
        setNewData(filtered);
      }
    }

    setNewData(filtered)
  }, [q]);

  return (
    <>
      <Container fluid={"md"}>
        <Row>
          <Col className="text-center" md={12}>
            <Navbar bg="light" expand="lg">
              <NavDropdown title="Loại tư vấn" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={clickTogge} href="#action3">Xem phong thủy</NavDropdown.Item>
                <NavDropdown.Item onClick={clickTogge} href="#action4">Tư vấn tâm lý</NavDropdown.Item>
                <NavDropdown.Item onClick={clickTogge} href="#action4">Tư vấn hôn nhân gia đình</NavDropdown.Item>
                <NavDropdown.Item onClick={clickTogge} href="#action4">xem chỉ tay</NavDropdown.Item>
                <NavDropdown.Item onClick={clickTogge} href="#action4">Xem tướng học</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Trạng thái"
                className="px-4"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item onClick={clickOnline} href="">
                  Online
                </NavDropdown.Item>
                <NavDropdown.Item onClick={clickOffline} href="">
                  Offline
                </NavDropdown.Item>
              </NavDropdown>

              <Navbar.Collapse id="navbarScroll">
                <Form onSubmit={search} className="d-flex flex-Grow-1">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    name="kw"
                    value={kw}
                    onChange={(evt) => setKw(evt.target.value)}
                  />
                  <Button type="submit" variant="outline-success">
                    Search
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row className="m-0">
          {newData.map((advisor) => (
            <Col md={4} className="px-0">
              {" "}
              <Profile obj={advisor} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
