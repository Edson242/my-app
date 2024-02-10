import { useState } from "react"
import { categories } from "../Category"
import styles from "./Form.module.css"

function Form() {

    const [url, setUrl] = useState("")
    const [category, setCategory] = useState("")
    const [videos, setVideo] = useState([])
    const [errors, setErrors] = useState("")

    function valideUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if (!regex.test(url) || url.lenght < 43) {
            setErrors("ERRO: URL inválida!")
            return false
        } else {
            return url.substring(32, 43) // id do vídeo
        }
    }

    function onSave(e) {
        e.preventDefault()
        console.log(url, category)

        // Validar category
        if (!category || category === "-") {
            setErrors("ERRO: Escolha uma categoria!")
            return
        } else {
            setErrors("")
        }

        // Validar url
        const urlVideo = valideUrl(url)
        if (urlVideo && category) {
            // Guardar a URL e a Category
            const newVideo = { url, category }
            setVideo([...videos, newVideo])

            localStorage.setItem("video", JSON.stringify([...videos, newVideo]))
            // Limpar o Form
            setUrl("")
            setCategory("")
        } else {
            setErrors("ERRO: URL inválida!")
        }
    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label htmlFor="">URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required={true}
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                    <div>
                        <label htmlFor="">Categoria</label>
                        <select
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        >
                            <option value="-">Selecione uma categoria</option>
                            {categories.map(item => {
                                return <option value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <div className={ styles.buttonAndErrorContainer }>
                        <div>
                            <button>Cadastrar</button>
                        </div>
                        {
                            errors ? <div className={styles.errors}>{errors}</div> : null
                        }
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Form
