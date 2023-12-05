import React, { useState, useEffect } from "react";
import Pageheader from "../../../layout/layoutcomponent/pageheader";
import conveyor_animation from "../../../assets/img/SMT_LINE/conveyor.gif"
import { Button, Card, Col, Row, Accordion, Modal} from "react-bootstrap";


export default function Dashboard() {
  const [jsondata, setData] = useState({})
  const [modalOpen, setModalOpen] = useState(false);
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);


  const toggleImageFullScreen = () => {
    setIsImageFullScreen(!isImageFullScreen);
  };


  const toggleModal = () => {
    setModalOpen(!modalOpen);
    if (toggleImageFullScreen) {
      setIsImageFullScreen(false);
    }
  };

  useEffect(() => {
    const fetchJsonData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      const sortedData = [...jsonData].sort((a, b) => a.id - b.id);
      setData(sortedData);
    };
    fetchJsonData();

  }, [])
  useEffect(() => {

    const interval = setInterval(() => {
      if (jsondata.length > 1) {
       
        const newData = [...jsondata];

        
        if (newData[3] && 'status' in newData[3]) {
          
          newData[3].status = newData[3].status === 1 ? -1 : 1; //-1 = red, 0 = yellow, 1 = green 

          
          setData(newData);
        }
      }
    }, 30000); 

    return () => clearInterval(interval);
  }, [jsondata]);


  return (
    <React.Fragment>
      <div className="mt-2" />
      <Pageheader title="Line" heading="Dashboard" active="" />
      <Modal show={modalOpen} scrollable size={`${isImageFullScreen ? 'lg' : 'xl'}`} contentClassName="custom-modal" centered fullscreen={isImageFullScreen} onHide={() => { toggleModal() }}>
        <Modal.Header >
          <Modal.Title>Details</Modal.Title>
          <Button variant="" className="btn btn-close" onClick={() => { toggleImageFullScreen() }}>
            <i className="si si-frame" title="si-frame"></i>
          </Button>
          <Button variant="" className="btn btn-close" onClick={() => { toggleModal() }}>
            <i className="fas fa-times"></i>
          </Button>
        </Modal.Header>
        <Modal.Body className={`d-flex align-items-center justify-content-center`}>
          <img src="/img/pcb.webp" className={`${isImageFullScreen ? 'full-screen-image' : ''}`} />
        </Modal.Body>

      </Modal>

      <Row>
        <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="content ">
          <Col xl={12} lg={12} md={12} sm={12} className="px-0" >
            <Accordion flush className="accor" >
              <Accordion.Item>
                <Accordion.Header className=" "  >
                </Accordion.Header>
                <Accordion.Body className="p-0">
                  <Card className="">
                    <Row className="index1">
                      <Col xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xxl={2}
                      >
                        <Row className=" border-end bd-xs-e-0 ">
                          <div className="col-3 d-flex align-items-center justify-content-center bg-transparent">
                            <div className="circle-icon bg-primary text-center align-self-center overflow-hidden shadow flex-shrink-0">
                              <i className="fa fa-window-minimize tx-15 text-white"></i>
                            </div>
                          </div>
                          <div className="col-9 py-0">
                            <div className="pt-4 pb-3">
                              <div className="d-flex">
                                <h6 className="mb-2 tx-12">Line ID</h6>

                              </div>
                              <div className="pb-0 mt-0">
                                <div className="d-flex">
                                  <h4 className="tx-18 font-weight-semibold mb-0">
                                    1
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Row>
                      </Col>
                      <Col xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xxl={2}
                      >
                        <Row className=" border-end bd-xs-e-0 ">
                          <div className="col-3 d-flex align-items-center justify-content-center">
                            <div className="circle-icon bg-primary text-center align-self-center overflow-hidden shadow flex-shrink-0">
                              <i className="fa fa-bars tx-15 text-white"></i>
                            </div>
                          </div>
                          <div className="col-9 py-0">
                            <div className="pt-4 pb-3">
                              <div className="d-flex">
                                <h6 className="mb-2 tx-12">Assembly ID</h6>

                              </div>
                              <div className="pb-0 mt-0">
                                <div className="d-flex">
                                  <h4 className="tx-18 font-weight-semibold mb-0">
                                    5
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Row>
                      </Col>
                      <Col xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xxl={2}
                      >
                        <Row className=" border-end bd-xs-e-0 ">
                          <div className="col-3 d-flex align-items-center justify-content-center">
                            <div className="circle-icon bg-primary text-center align-self-center overflow-hidden shadow flex-shrink-0">
                              <i className="fa fa-circle-notch tx-15 text-white"></i>
                            </div>
                          </div>
                          <div className="col-9 py-0">
                            <div className="pt-4 pb-3">
                              <div className="d-flex">
                                <h6 className="mb-2 tx-12">Cycle Time</h6>
                                <span className="badge bg-success-transparent text-success font-weight-semibold ms-auto rounded-pill lh-maincard px-2 my-auto">
                                  <i className="fa fa-caret-up me-1"></i>0.11%
                                </span>
                              </div>
                              <div className="pb-0 mt-0">
                                <div className="d-flex">
                                  <h4 className="tx-18 font-weight-semibold mb-0">
                                    25s
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Row>
                      </Col>
                      <Col xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xxl={2}
                      >
                        <Row className=" border-end bd-md-e-0 bd-xs-e-0 bd-lg-e-0 bd-xl-e-0  ">
                          <div className="col-3 d-flex align-items-center justify-content-center">
                            <div className="circle-icon bg-warning text-center align-self-center overflow-hidden shadow flex-shrink-0">
                              <i className="fe fe-dollar-sign tx-15 text-white"></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="pt-4 pb-3">
                              <div className="d-flex">
                                <h6 className="mb-2 tx-12">CPK</h6>
                                <span className="badge bg-danger-transparent text-danger font-weight-semibold ms-auto rounded-pill lh-maincard px-2 my-auto">
                                  <i className="fa fa-caret-up me-1"></i>0.23%
                                </span>
                              </div>
                              <div className="pb-0 mt-0">
                                <div className="d-flex">
                                  <h4 className="tx-18 font-weight-semibold mb-0">
                                    1.45
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Row>
                      </Col>
                      <Col xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xxl={2}
                      >
                        <Row className=" border-end bd-xs-e-0  ">
                          <div className="col-3 d-flex align-items-center justify-content-center">
                            <div className="circle-icon bg-secondary text-center align-self-center overflow-hidden shadow flex-shrink-0">
                              <i className="fe fe-external-link tx-15 text-white"></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="pt-4 pb-3">
                              <div className="d-flex">
                                <h6 className="mb-2 tx-12">Placement Error</h6>
                                <span className="badge bg-success-transparent text-success font-weight-semibold ms-auto rounded-pill lh-maincard px-2 my-auto">
                                  <i className="fa fa-caret-up me-1"></i>1.57%
                                </span>
                              </div>
                              <div className="pb-0 mt-0">
                                <div className="d-flex">
                                  <h4 className="tx-18 font-weight-semibold mb-0">
                                    5.1%
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Row>
                      </Col>
                      <Col xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xxl={2}
                      >
                        <Row className="">
                          <div className="col-3 d-flex align-items-center justify-content-center">
                            <div className="circle-icon bg-info text-center align-self-center overflow-hidden shadow flex-shrink-0">
                              <i className="fe fe-credit-card tx-15 text-white"></i>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="pt-4 pb-3">
                              <div className="d-flex	">
                                <h6 className="mb-2 tx-12">Wastage</h6>
                                <span className="badge bg-success-transparent text-success font-weight-semibold ms-auto rounded-pill lh-maincard px-2 my-auto">
                                  <i className="fa fa-caret-up me-1"></i>0.45%
                                </span>
                              </div>
                              <div className="pb-0 mt-0">
                                <div className="d-flex">
                                  <h4 className="tx-18 font-weight-semibold mb-0">
                                    2%
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xl={12} lg={12} md={12} sm={12} className="px-0">
            <Col xl={12} lg={12} md={12} sm={12} className="px-0 bg-transparent">
              <Card className="">
                <div className="flex-scroll-x--rows-2">
                  <Row className="d-flex flex-nowrap my-3 no-gutters g-0">
                    {jsondata.length > 0 ? (
                      jsondata.map((item, index) => (
                        <React.Fragment key={index} >
                          <img src={conveyor_animation} className="h-6 my-auto p-0 g-0" style={{ position: 'relative', zIndex: 0 }}></img>
                          <Col xl={3}
                            lg={3}
                            md={3}
                            sm={3}
                            xxl={2}
                            className="d-flex align-items-center justify-content-center h-100  bg-transparent"
                            style={{ position: 'relative', zIndex: 1 }}
                          >
                            <Row className={"bd my-3 bg-light custom-radius line-card h-100 p-0 " + (item.status == 1 ? "green-shadow" : "") + (item.status == 0 ? "custom-shadow" : "") + (item.status == -1 ? "red-shadow" : "")} onClick={() => { toggleModal() }} style={{ cursor: "pointer" }}>
                              <Col md="auto" className="mx-auto" >
                                <Card className={"text-center card-img-top-1 bg-transparent my-1 "} >
                                  <Card.Title>{item.name}</Card.Title>
                                  <Card.Img
                                    className={"card-img-top w-100 ht-125 "}
                                    src={item.image_url}
                                    alt=""
                                  />
                                </Card>
                              </Col>
                            </Row>
                          </Col>
                        </React.Fragment>
                      ))) : (
                      <Col className="d-flex align-items-center justify-content-center">
                        <div className="lds-dual-ring "></div>
                      </Col>
                    )}
                    {jsondata.length > 0 ? (
                      <img src={conveyor_animation} className="h-6 my-auto p-0" style={{ zIndex: 0 }}></img>) : (null)
                    }
                  </Row>
                </div>

              </Card>

            </Col>
          </Col>

        </Col>
        <div className={`sidebar`}>
          <Button className={`d-flex align-items-center justify-content-center toggle-button letter-button`}>
            <span>S</span>
            <span>T</span>
            <span>A</span>
            <span>T</span>
            <span>S</span>
          </Button>
        </div>

      </Row>

    </React.Fragment >
  );
}
