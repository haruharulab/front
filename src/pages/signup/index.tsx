import * as S from "./style";
export default function Signup() {
  return (
    <S.Contain>
      <S.LoginWrapper>
        <span>회원가입</span>
        <S.Input placeholder="아이디를 입력해주세요"></S.Input>
        <S.Input placeholder="비밀번호를 입력해주세요"></S.Input>
        <S.Input placeholder="비밀번호를 재확인해주세요"></S.Input>
        <S.Input placeholder="이메일 입력해주세요"></S.Input>
        <S.Input placeholder="전화번호를 입력해주세요"></S.Input>
        <S.NoneId>계정이 없으신가요?</S.NoneId>
        <S.Btn_login>회원가입</S.Btn_login>
      </S.LoginWrapper>
    </S.Contain>
  );
}