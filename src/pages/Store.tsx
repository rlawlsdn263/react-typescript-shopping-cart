import { Col, Row } from "react-bootstrap";
// 더미 데이터 불러오기
import storeItems from "../data/items.json";

export function Store() {
  return(
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {
          //리스트렌더링
          storeItems.map(item => (
            // 객체에서 값을 불러오기 때문에 JSON.stringify()로 문자화
            <Col>{JSON.stringify(item)}</Col>
          ))
        }
      </Row>
    </>
  )
}