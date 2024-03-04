import { RouterProvider, useNavigate } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import { router } from "../../routes"
import theme from "../../assets/theme"
import { getToken } from "../../utils/tokenStorage";
import { useEffect } from "react";

export const App = () => {
  const navigate = useNavigate();

  const cbCheck = async () => {
    const token = getToken();
    if (token) {
      const user = USERS.find((user) => user.token === `${token}`);
      } else {
        navigate("/signin");
      }
    }

  useEffect(() => {
    cbCheck();
  }, []);

/*   function handleLogin(data) {
    Api.login(data)
    .then ((data) => {
      localStorage.setItem("loggedIn", true);
        setLoggedIn(true);
        setCurrentUser({
          email: data.email,
          name: data.name,
        });
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(`Произошла ошибка ${err}`);
    })
  } */


  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
