

import { useEffect, useState } from "react"
import useAuth from "../myHooks/useAuth";
import { ErrorToastContainer } from "../components/toastContainer";
//import { login } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getCurrentUser } from "../services/userServices";



export function EmailConfirmed() {
    const { onLogin } = useAuth();
    const [message, updateMessage] = useState();
    const [display, updateDisplay] = useState("none");
    const [loading, updateLoading] = useState(true);
    const navTo = useNavigate();

    const notify = (mesg) => {
        updateMessage(mesg);
        updateDisplay("flex");
        setTimeout(() => {
            updateDisplay("none");
            console.log('close')
        }, 2500);
        console.log('nottttttttttttt')
    }

    useEffect(() => {
        handleLoggedUser();
    });

    const handleLoggedUser = async () => {
        const { data, error } = await getCurrentUser();
        if (data) {
            onLogin(data.user.id);
            updateLoading(false);
        } else {
            console.log('error : ', error.message);
            updateLoading(false);

            notify(error.message, true)
            navTo('/login')

        }
    }


    /*  const confirm = async () => {
  
          const params = new URLSearchParams(window.location.search);
          const confirmUrl = params.get("confirmation_url");
          console.log(confirmUrl);
          try {
              const xhr = new XMLHttpRequest();
  
              xhr.open('GET', confirmUrl)
              // send the request
              xhr.send();
              xhr.addEventListener('load', () => {
                  tryLogin();
  
              })
  
              updateLoading(false);
          } catch (error) {
              console.log(error)
          }
      }
  
      async function tryLogin() {
          try {
              const email = document.cookie.split('; ').find(row => row.startsWith("ema="))?.split('=')[1];
              const password = document.cookie.split('; ').find(row => row.startsWith("pss="))?.split('=')[1];
              console.log('email : ', email)
              console.log(' password :', password)
              const { data, error } = await login(email, password);
              if (error) throw error
              console.log(data);
              onLogin(data.user)
              const expires = new Date(0).toUTCString()
              document.cookie = `ema=; path=/; expires=${expires}; SameSite=Lax; secure`
              document.cookie = ` pss=; path=/; expires=${expires}; SameSite=Lax; secure`
  
          } catch (error) {
              notify(error.message);
              navTo('/login', -1)
          }
      }*/
    return <div className="confirmation" style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        position: "absolute"
    }}>
        {loading ? <div style={{ display: "flex", flexDirection: "column" }}>
            <ErrorToastContainer display={display} message={message} />
            <p className="messa">
                cofirming your email adress,
            </p>
            <FontAwesomeIcon icon={faSpinner} pulse size="lg" /></div> : <p className="messa">
            your email adress confirmed succesfuly,
        </p>}
    </div>
}