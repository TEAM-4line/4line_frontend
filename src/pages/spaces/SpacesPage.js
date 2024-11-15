import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import FilterBar from "../../components/spaces/FilterBar";
import SpacesPost from "../../components/spaces/SpacesPost";
import NavBar from "../../components/home/NavBar";
import WriteBtn from "../../images/write-btn.png";
import axios from "axios";

const SpacesPage = () => {
  const Server_IP = process.env.REACT_APP_Server_IP;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedFilter, setSelectedFilter] = useState(
    searchParams.get("filter") || "lion"
  );
  console.log(selectedFilter);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filter = searchParams.get("filter");
    if (filter) {
      setSelectedFilter(filter);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${Server_IP}/api/accompany/${selectedFilter}/`
        );
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [selectedFilter, Server_IP]);

  const handleFilterSelect = (filterType) => {
    setSelectedFilter(filterType);
    navigate(`/spaces?filter=${filterType}`);
  };

  return (
    <Wrapper>
      <TopBar PageName={"Spaces"} userImg={null} />
      <FilterBar
        selectedFilter={selectedFilter}
        onFilterSelect={handleFilterSelect}
      />
      <ContentBox>
        <PostWrapper>
          {loading ? (
            <p>Loading...</p>
          ) : posts.length > 0 ? (
            <SpacesPost posts={posts} />
          ) : (
            <p>선택된 유형의 게시글이 없습니다.</p>
          )}
        </PostWrapper>
      </ContentBox>
      <BtnBox>
        <Write
          src={WriteBtn}
          alt="write button"
          onClick={() => navigate("/spaces/write")}
        />
      </BtnBox>
      <NavBar pageName={"spaces"} />
    </Wrapper>
  );
};

export default SpacesPage;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 412px;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  margin: 86px 0px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PostWrapper = styled.div`
  padding: 20px 27px;
  margin-top: 134px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BtnBox = styled.div`
  position: fixed;
  bottom: 96px;
  right: 530px;
`;

const Write = styled.img`
  width: 66px;
  height: 66px;
  cursor: pointer;
`;
