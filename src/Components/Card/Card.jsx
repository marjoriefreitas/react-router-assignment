import './styles.scss';

// passing props to the component
export function Card({ image, title }) {
    return (
        <div className="card">
            <img src={image} alt="project cover" />
            <div className="overlay">
                <span>{title}</span>
            </div>
        </div>
    )
};