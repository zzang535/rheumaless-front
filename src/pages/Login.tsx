import Header from "@/components/Header";
import ContentLayout from "@/components/ContentLayout";

function Login() {
  return (
    <>
      <Header title="로그인" />
      <ContentLayout>
        <div className="mb-4 mt-4">
          <div className="mb-1">이메일 입력하세요.</div>
          <input className="border-2 w-full h-10" />
        </div>
        <div className="mb-4">
          <div className="mb-1">비밀번호</div>
          <input className="border-2 w-full h-10" />
        </div>
        <button className="w-full text-xl p-2 bg-white hover:bg-slate-200 border border-black">
          로그인 하세요
        </button>
      </ContentLayout>
    </>
  );
}

export default Login;
