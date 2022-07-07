import React from 'react';
import styled from 'styled-components';

const RankList = () => {
  const rankArr = [
    {
      imgAdd: `https://ccdn.lezhin.com/v2/comics/260/images/square.webp?updated=1626417228107&width=84`,
      title: `레바툰`,
    },
    {
      imgAdd: `https://ccdn.lezhin.com/v2/comics/6727405857669120/images/square.webp?updated=1656983622401&width=84`,
      title: `박씨유대기`,
    },
    {
      imgAdd: `https://ccdn.lezhin.com/v2/comics/4825209502760960/images/square.webp?updated=1655345793457&width=84`,
      title: `자꾸 그러시면 저 녹아요.`,
    },
    {
      imgAdd: `https://ccdn.lezhin.com/v2/comics/5183802990723072/images/square.webp?updated=1645421373661&width=84`,
      title: `클라우드`,
    },
  ];

  return (
    <RankListWrap>
      {rankArr.map((data) => (
        <RankItem key={data.title}>
          <div>
            <RankImg src={data.imgAdd} alt="랭킹 상위 이미지" />
          </div>
          <RankTitle>{data.title}</RankTitle>
        </RankItem>
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
