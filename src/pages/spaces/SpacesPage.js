import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import FilterBar from "../../components/spaces/FilterBar";
import SpacesPost from "../../components/spaces/SpacesPost";
import NavBar from "../../components/home/NavBar";
import SampleProfile from "../../images/sample-profile.svg";
import WriteBtn from "../../images/write-btn.png";

const SpacesPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // URL에서 필터 값을 읽어 초기 상태 설정
  const [selectedFilter, setSelectedFilter] = useState(
    searchParams.get("filter") || "lion"
  );

  useEffect(() => {
    // URL이 변경되었을 때도 필터 값 업데이트
    const filter = searchParams.get("filter");
    if (filter) {
      setSelectedFilter(filter);
    }
  }, [searchParams]);

  const handleFilterSelect = (filterType) => {
    setSelectedFilter(filterType);
    navigate(`/spaces?filter=${filterType}`); // URL 업데이트
  };

  return (
    <Wrapper>
      <TopBar PageName={"Spaces"} userImg={SampleProfile} />
      <FilterBar
        selectedFilter={selectedFilter}
        onFilterSelect={handleFilterSelect}
      />
      <ContentBox>
        <PostWrapper>
          <SpacesPost selectedFilter={selectedFilter} />
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
