import { useState } from "react"

export default function Contato() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        assunto: "",
        texto: ""
    })

    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(formData)
        sessionStorage.setItem("name", formData.name)
        sessionStorage.setItem("email", formData.email)
        sessionStorage.setItem("assunto", formData.assunto)
        sessionStorage.setItem("texto", formData.texto)
    }

    return (
        <body >
            <form className="bg-slate-600 h-full" onSubmit={handleSubmit}>
                <h1>Form</h1>
                <input 
                    type="text" 
                    name="name"  
                    id="name" 
                    placeholder="name" 
                    value={formData.name} 
                    onChange={(value) => setFormData({...formData, name: value.target.value})} />
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="email" 
                    value={formData.email} 
                    onChange={(value) => setFormData({...formData, email: value.target.value})}/>
                <input 
                    type="text" 
                    name="assunto" 
                    id="assunto" 
                    placeholder="assunto" 
                    value={formData.assunto}
                    onChange={(value) => setFormData({...formData, assunto: value.target.value})} />
                <textarea 
                    name="texto" 
                    id="texto" 
                    value={formData.texto}
                    onChange={(value) => setFormData({...formData, texto: value.target.value})}
                    ></textarea>

                <button type="submit">
                    onSubmit
                </button>
            </form>
        </body>
    )
}