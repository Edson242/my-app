import { useState } from "react"
import VideoList from "../VideoList"
import styles from "./SearchVideoList.module.css"

// Filtrando vídeos por categoria ou título
function filterVideo(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearcVideoList({ videos }) {
    const [searchText, setSearchText] = useState("")
    const foundVideos = filterVideo(videos, searchText)

    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..."
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
            />
            <VideoList
                videos={foundVideos}
                emptyHeading={`Sem vídeos sobre ${searchText}`}
            />
        </section>
    )
}

export default SearcVideoList