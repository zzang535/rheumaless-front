import axios from "axios";
import { useState, ChangeEvent } from "react";
import Header from "@/components/Header";
import ContentLayout from "@/components/ContentLayout";
import SlidedownModal from "@/components/SlidedownModal";

function SignUp() {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [email, setEmail] = useState("");

  const showModal = (content: string) => {
    setModalStatus(true);
    setModalContent(content);
    setTimeout(() => {
      setModalStatus(false);
    }, 2000);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const onClickEmailAuth = async () => {
    if (!email) {
      showModal("이메일을 입력해주세요.");
    }

    const res = await axios("http://localhost:3000/mail/send-mail");
    console.log("res", res);
  };

  return (
    <>
      <SlidedownModal status={modalStatus} content={modalContent} />
      <Header title="회원가입" />
      <ContentLayout>
        <div className="mb-4 mt-4">
          <div className="mb-1 pl-1">이메일</div>
          <input
            className="border-2 w-full h-16 mb-2 pl-2"
            onChange={onChangeEmail}
          />
          <div className="text-right">
            <button
              className="w-1/2 h-16 text-md p-2 bg-white hover:bg-slate-200 border border-black text-xl"
              onClick={onClickEmailAuth}
            >
              이메일 인증
            </button>
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-1 pl-1">비밀번호</div>
          <input className="border-2 w-full h-16 pl-2" />
        </div>
        <button className="w-full h-16 text-xl p-2 bg-white hover:bg-slate-200 border border-black">
          회원가입
        </button>
      </ContentLayout>
    </>
  );
}

export default SignUp;
