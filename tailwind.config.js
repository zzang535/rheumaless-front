/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "key-color": "#f9f4e8", // 여기에 원하는 키 컬러 코드를 추가
      },
    },
  },
  plugins: [],
};
