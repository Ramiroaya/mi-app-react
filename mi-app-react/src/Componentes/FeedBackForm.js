import { useState } from 'react';

export default function FeedbackForm() {
    const [isSent, setIsSent] = useState('');
    const [message, setMessage] = useState('');
    if (isSent) {
        return <h1> Gracias!!</h1>;
    } else{
        // eslint-disable-next-line        
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Enviar</button>
            </form>            
        );
    }
}