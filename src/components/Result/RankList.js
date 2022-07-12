import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const RankList = () => {
  const lzURL = 'https://www.lezhin.com';
  const rankData = useSelector((state) => state.resultdata.rankData);
  return (
    <RankListWrap>
      {rankData?.map((data) => (
        <a href={`${lzURL}${data.link}`} key={data.title}>
          <RankItem>
            <div>
              <RankImg src={data.img} alt="랭킹 상위 이미지" />
            </div>
            <RankTitle>{data.title}</RankTitle>
          </RankItem>
        </a>
      ))}
    </RankListWrap>
  );
};

const RankListWrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  padding: 30px 50px 50px 50px;
`;

const RankItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const RankImg = styled.img`
  border-radius: 20px;
`;

const RankTitle = styled.p`
  width: 135px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default RankList;
