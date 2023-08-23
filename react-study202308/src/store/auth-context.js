import React, {useState, useEffect, Children} from "react"
// 로그인 상태 변수르 관리할 컨텍스트
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = ({Children}) => {
     // 로그인 상태를 관리하는 변수
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log('useEffect 실행! - 최초 단한번만 실행됨!');
        const storedLoginFlag = localStorage.getItem('login-flag');
        if (storedLoginFlag === '1') {
          setIsLoggedIn(true);
        }
      }, []);
    
      // 서버로 로그인을 요청하는 함수
      const loginHandler = (email, password) => {
        // 로그인의 증거로 브라우저에 로그인 값을 1로 표현해서 저장
        localStorage.setItem('login-flag', '1');
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        localStorage.removeItem('login-flag');
        setIsLoggedIn(false);
      };

      return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>
            {Children}
        </AuthContext.Provider>
      )
};

export default AuthContext;