import erro404 from './erro404.png'
import styles from './PageNotFound.module.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function PageNotFound() {
    return (
        <>
        <Header />
        <section className={ styles.container }>
            <h2>Ops! Conteúdo não localizado!</h2>
            <img src={ erro404 } alt="Logo página não localizada" />
        </section>
        <Footer />
        </>
    );  
};

export default PageNotFound;