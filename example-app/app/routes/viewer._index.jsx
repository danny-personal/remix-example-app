import styleUrl from '../style/viewer.css';

export const links = () => {
    return [{rel: "stylesheet", href: styleUrl}];
}

export default function ViewerIndexRoute() {
    return (
        <article>
            <p>ここ</p>
        </article>
    )
}