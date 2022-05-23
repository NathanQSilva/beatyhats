import { useState } from "react"

export default function Login() {
    
    const [loginData, setLoginData] = useState({
        user: "",
        pass: "",
        passConfirm: ""        
    })

    const handleSubmit = (event:any) => {
        event.preventDefault()
        sessionStorage.setItem("user", loginData.user)
        if (loginData.pass === loginData.passConfirm) {
            sessionStorage.setItem("pass", loginData.pass)
        } else {
            console.log("erro")
        }
    }

    const handleChange = (event: any) => {
        if (event.target.value === loginData.pass ) {
            setLoginData({...loginData, passConfirm: event.target.value})
        }
    }

    return (
        <body>
            <form className="bg-slate-500 p-11 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                <input type="text" placeholder="User" value={loginData.user} onChange={(event) => setLoginData({...loginData, user: event.target.value})} />
                <input type="password" placeholder="password" value={loginData.pass} onChange={(event) => setLoginData({...loginData, pass: event.target.value})} />
                <input type="password" placeholder="confirm password" value={loginData.passConfirm} onChange={(event) => {handleChange(event)}} />
                <button type="submit">
                    Entrar
                </button>
            </form>
        </body>
    )
}