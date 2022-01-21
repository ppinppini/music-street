import React from "react";
import styled from "styled-components";

const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 48%;
    object-fit: cover;
  }
`;

const TextBox = styled.ul`
  margin: 0;
  li {
    margin-top: 4vw;
  }
  padding-left: 20px;
`;

const IndieMusic = () => {
  return (
    <>
      <ImgBox>
        <img src="images/p1-1.jpeg" alt="p1-1" />
        <img src="images/p1-2.jpeg" alt="p1-2" />
      </ImgBox>
      <TextBox>
        <li>
          제작사의 케어를 받지않고! 자신의 돈으로 직접 앨범을 제작하고, 홍보
          역시 자신의 돈으로 하는 등 독립적으로 활동하는 뮤지션이 인디
          뮤지션이고, 이들의 음악이 인디 음악이다.
        </li>
        <li>
          음악적으로는 유통사의 입김이 적잖이 작용하는 대규모 레이블에서 나오는
          음반들에 비해 창작자의 개성이 잘 살아있는 특징!
        </li>
        <li>상업성 보단 창작성!</li>
      </TextBox>
    </>
  );
};

export default IndieMusic;
