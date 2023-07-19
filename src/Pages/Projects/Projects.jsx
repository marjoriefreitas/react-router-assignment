// importing the card component
import { Card } from '../../Components/Card/Card';
import './styles.scss';

export function Projects() {
    return (
        <main className="projects">
            <Card image="project-1.png" title="UX Case Study" />
            <Card image="project-2.png" title="Web Design" />
            <Card image="project-3.png" title="Mobile Pages" />
            <Card image="project-4.png" title="Brand Manual" />
            <Card image="project-5.png" title="Magazine" />
            <Card image="project-6.png" title="3D Mockup" />
        </main>
    )
};