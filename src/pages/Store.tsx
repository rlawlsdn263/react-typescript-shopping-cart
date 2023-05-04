import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from '../components/_index';

export function Store() {
  return(
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {
          storeItems.map(item => (
            // 객체를 StoreItem의 props로 전달
            <Col key={item.id}>
              <StoreItem {...item}/>
            </Col>
          ))
        }
      </Row>
    </>
  )
}