import React, { useContext, useEffect, useState } from 'react';
import { Badge, Jumbotron, Table } from 'react-bootstrap';
import { booksContext } from '../../App';
import HomeNav from "../Home/HomeNav/HomeNav"
const Orders = () => {
  const [books, setBooks, loggedInUser] = useContext(booksContext);
  const [userInfo, setUserInfo] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/user-data?email=${loggedInUser.email}`)
      .then(res => res.json())
      .then(data => setUserInfo(data))
  }, [loggedInUser.email])
  return (
    <div>
      <HomeNav></HomeNav>
      <Jumbotron className="m-3">
        <h4>Dear {userInfo?.[0]?.name},</h4>
        <h4>You've purchased <Badge pill variant="info">{userInfo?.length}</Badge> book(s)</h4>
        <Table striped bordered hover>
          <tbody>
            {
              userInfo?.map(info => {
                return (
                  <tr key={info._id}>
                    <td> <img src={info.imgUrl} alt="books" style={{ width: "50px" }} /> </td>
                    <td>{info.bookName}</td>
                    <td>{info.authorName}</td>
                    <td>${info.price}</td>
                    <td>{info.date}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Jumbotron>
    </div>
  );
};

export default Orders;