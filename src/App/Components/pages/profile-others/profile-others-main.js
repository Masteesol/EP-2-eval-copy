import axios from "axios";
import { useContext, useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostCard from "../../post-card";
import { URLSingleUserPost, URLUserdata } from "../../../../constants/url";
import AuthContext from "../../../../context/AuthContext";
import { Colours } from "../../../../global-styles";
import { useSearchParams } from "react-router-dom";
import BannerSource from "../../layout/context/BannerContext";

export default () => {
  const [auth] = useContext(AuthContext);
  const [allPosts, setAllPosts] = useState([]);
  const [userData, setUserData] = useState();
  const [source, setSource] = useContext(BannerSource);

  const [searchParams] = useSearchParams();
  const username = searchParams.get("name");
  const postsUrl = URLSingleUserPost(username);
  const userUrl = URLUserdata(username);
  const [counterPost, setCounterPost] = useState(0);
  const dataFetchedRefPost = useRef(false);

  const [counterUser, setCounterUser] = useState(0);
  const dataFetchedRefUser = useRef(false);

  const fetchData = async () => {
    try {
      const req = await axios.get(postsUrl, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      console.log("Fetching post data...");
      setCounterPost((oldValue) => oldValue + 1);
      setAllPosts(req.data);
    } catch (error) {
      console.log("Something went wrong: ", error);
    }
  };

  useEffect(() => {
    if (dataFetchedRefPost.current) return;
    dataFetchedRefPost.current = true;
    fetchData();
  }, []);

  const fetchUser = async () => {
    try {
      const req = await axios.get(userUrl, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      console.log("Fetching user data...");
      setCounterUser((oldValue) => oldValue + 1);
      setSource(req.data.banner);
      setUserData(req.data);
    } catch (error) {
      console.log("Something went wrong when fetching user: ", error);
    }
  };

  useEffect(() => {
    if (dataFetchedRefUser.current) return;
    dataFetchedRefUser.current = true;
    fetchUser();
  }, []);

  console.log(userData);
  return (
    <main style={{ position: "relative" }}>
      <Container
        className="header-spacer"
        style={{ height: "15rem" }}
      ></Container>
      <Container fluid style={{ backgroundColor: Colours.bgLightMode.medium }}>
        <Container style={{ maxWidth: 700 }}>
          <Row></Row>
          <Row className="flex-column mt-5">
            {allPosts.map((postData, index) => {
              if (userData) {
                postData["author"] = {
                  name: username,
                  avatar: userData.avatar,
                };
                if (index < 10) {
                  return <PostCard key={index} userData={[postData, index]} />;
                }
              }
            })}
          </Row>
        </Container>
      </Container>
    </main>
  );
};
