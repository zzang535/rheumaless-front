import { useNavigate } from "react-router-dom";
import mainLogo from "@/assets/main-logo.png";

function Home() {
  const navigate = useNavigate(); // useNavigate hook for navigation
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToSignUp = () => {
    navigate("/signup"); // Add a similar function for sign-up navigation
  };
  return (
    <>
      <div className="h-screen w-screen bg-key-color flex flex-col items-center justify-center gap-4">
        <img src={mainLogo} alt="main-logo" />
        <button
          className="w-1/2 text-xl p-2 bg-white hover:bg-slate-200"
          onClick={navigateToLogin}
        >
          로그인 페이지로 이동
        </button>
        <button
          className="w-1/2 text-xl p-2 bg-white hover:bg-slate-200"
          onClick={navigateToSignUp}
        >
          회원가입
        </button>
      </div>
    </>
  );
}

export default Home;
