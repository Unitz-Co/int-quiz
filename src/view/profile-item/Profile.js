import "./profile.css"
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { memo } from "react";


function Profile(props) {
  let avatarUrl = ""
  if(props.obj.avatarUrl)
    avatarUrl = props.obj.avatarUrl.url
  else
    avatarUrl = "https://images.ctfassets.net/49vqjgy9zjzd/XASRYtoFDuJ4Pp5CsIkhi/215e3a1cd82209307a85a12a02f38e1b/hoang.jpeg"
  
  let status
  if(props.obj.status == "online")
    status = <>
                <p className="small mb-0 online">
                <MDBIcon far icon="clock me-2"  /><strong>{props.obj.status}</strong>
              </p>
            </>
  else
    status = <>
              <p className="small mb-0 offline">
                <MDBIcon far icon="clock me-2"/><strong>{props.obj.status}</strong>
              </p>
              </>

  return (
    <>  
        <div className="" style={{ backgroundColor: '#eee' }}>
          <MDBContainer>
            <MDBRow className="justify-content-center">
              <MDBCol md="12" lg="7" xl="5" className="mt-2 item-width-100">
                <MDBCard  style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
                  <MDBCardBody className="p-4 text-black">
                    <div>
                      <MDBTypography tag='h6' className="none-wrap-paragrap">
                        {props.obj.categoriesCollection.items.map((value, index)=>{
                          if(props.obj.categoriesCollection.items.length - 1 === index)
                            return value.displayName;
                          return value.displayName + ', '
                        })}
                      </MDBTypography>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <p className="small mb-0">{status}</p>
                        <p className="fw-bold mb-0">$90</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          style={{ width: '70px' }}
                          className="img-fluid rounded-circle border border-dark border-3 width-img-102"
                          src={avatarUrl}
                          alt='Generic placeholder image'
                          fluid />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex flex-row align-items-center mb-2">
                          <h6 className="mb-0 mx-0 fw-bold">{props.obj.displayName}</h6>
                          <ul className="mb-0 ml-5 mr-0-2 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                            <li>
                              <MDBIcon fas icon="star fa-xs" />
                            </li>
                            <li>
                              <MDBIcon fas icon="star fa-xs" />
                            </li>
                            <li>
                              <MDBIcon fas icon="star fa-xs" />
                            </li>
                            <li>
                              <MDBIcon fas icon="star fa-xs" />
                            </li>
                            <li>
                              <MDBIcon fas icon="star fa-xs" />
                            </li>
                          </ul>

                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <p title='Email: pnhoang@gmail.com' className="mb-0 me-2 none-wrap-paragrap">Email: <strong>{props.obj.email}</strong></p>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <p className="mb-0 me-2">Phone: <strong>{props.obj.phone}</strong></p>
                        </div>
                        <div>
                          <span>
                          <MDBIcon fas icon="video" />
                            {props.obj.servicesCollection.items.map((item, index)=>{
                              if(item.name === "VideoService" )
                                return " " + item.name;
                            }).filter(function( element ) {
                                return element !== undefined;
                              }).pop() || " No VideoService"
                            }
                          </span>
                          <span className="ms-3"><MDBIcon fas icon="sms" className="sms-icon" />
                            {
                              props.obj.servicesCollection.items.map((item, index)=>{
                              if(item.name === "ChatService")
                                return " " + item.name;
                              }).filter(function( element ) {
                                return element !== undefined;
                              }).pop() || " No Chat"
                            }
                            
                           </span>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <MDBCardText>52 comments</MDBCardText>
                    <MDBBtn color="success" rounded block size="lg">
                      <MDBIcon far icon="clock me-2" /> Book now
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default Profile;
