import axios from "axios";
import { useContext, useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthContext from "../../../../context/AuthContext";
import { Colours } from "../../../../global-styles";
import PostCard from "../../post-card/";
import Search from "./search";
import { posts } from "../../../../constants/url";
import ContentSelectorButtons from "./buttons-content-selector";
import { SelectContentProvider } from "./context/ContentContext";
import logout from "../../../../utils/logout";

export default () => {
  const [auth] = useContext(AuthContext);
  const [allPosts, setAllPosts] = useState([]);
  const [counter, setCounter] = useState(0);
  const dataFetchedRef = useRef(false);

  const fetchData = async () => {
    if (auth) {
      try {
        const req = await axios.get(posts.unsorted, {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        });
        console.log("Fetching data...");
        setCounter((oldValue) => oldValue + 1);
        setAllPosts(req.data);
      } catch (error) {
        console.log("Couldn't get posts, something went wrong: ", error);
      }
    }
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
  }, []);
  return (
    <SelectContentProvider>
      <main style={{ position: "relative" }}>
        <Container
          className="header-spacer"
          style={{ height: "15rem" }}
        ></Container>
        <Container
          fluid
          style={{ backgroundColor: Colours.bgLightMode.medium }}
        >
          <Container style={{ maxWidth: 700 }}>
            <Row></Row>
            <Row className="flex-column mt-5">
              <Col>
                <Search />
              </Col>
              <ContentSelectorButtons />
              {allPosts.map((data, index) => {
                if (index < 10) {
                  return <PostCard key={index} userData={[data, index]} />;
                }
              })}
            </Row>
          </Container>
        </Container>
      </main>
    </SelectContentProvider>
  );
};

/**/
