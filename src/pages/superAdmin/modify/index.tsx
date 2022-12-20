import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAdmin, putAdmin } from "../../../apis/super.api";
import * as S from "./style";
const Modify = () => {
  const { userId } = useParams();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [centerInfo, setCenterInfo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    const data = {
      id: "afdsfd",
      password: "dak",
      email: "dafjk@gmail.com",
      centerInfo: "dfak",
      phoneNumber: "21301032",
      nickname: "afds",
    };
    const data2 = getAdmin(userId);
    console.log(data2);
    setId(data.id);
    setPassword(data.password);
    setEmail(data.email);
    setCenterInfo(data.centerInfo);
    setPhoneNumber(data.phoneNumber);
    setNickname(data.nickname);
  }, []);

  type putData = {
    authId: string;
    password: string;
    email: string;
    nickname: string;
    phoneNumber: string;
    centerInfo: string;
  };
  const submit = async () => {
    await putAdmin(userId, {
      authId: id,
      password: password,
      email: email,
      nickname: nickname,
      phoneNumber: phoneNumber,
      centerInfo: centerInfo,
    });
  };
  return (
    <S.Contain>
      <S.Form>
        <S.Title>수정</S.Title>
        <S.InputWrap>
          <S.Text>아이디</S.Text>
          <S.Input defaultValue={id} onChange={(e) => setId(e.target.value)} />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>비밀번호</S.Text>
          <S.Input
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>이메일</S.Text>
          <S.Input
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>닉네임</S.Text>
          <S.Input
            defaultValue={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>전화번호</S.Text>
          <S.Input
            defaultValue={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Text>소속</S.Text>
          <S.Input
            defaultValue={centerInfo}
            onChange={(e) => setCenterInfo(e.target.value)}
          />
        </S.InputWrap>
        <S.ModifyButton onClick={() => submit()}>수정</S.ModifyButton>
      </S.Form>
    </S.Contain>
  );
};

export default Modify;