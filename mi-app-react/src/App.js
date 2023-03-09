import Gallery from './Componentes/Ejercicio1';
import Form from './Componentes/Ejercicio2';
import FeedbackForm from './Componentes/Ejercicio3';
import FeedbackForm2 from './Componentes/Ejercicio4';

export default function App() {
    return (
        <div className="App">
            <h2>Ejercicio 1</h2>
            <Gallery />
            <h2>Ejercicio 2</h2>
            <Form />
            <h2>Ejercicio 3</h2>
            <FeedbackForm />
            <h2>Ejercicio 4</h2>
            <FeedbackForm2 />
        </div>
    );
}