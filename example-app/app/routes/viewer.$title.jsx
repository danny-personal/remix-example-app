import { useLoaderData } from "@remix-run/react";
import { json } from '@remix-run/node'
import styleUrl from '../style/viewer.css';

export const links = () => {
    return [{rel: "stylesheet", href: styleUrl}];
}

export const loader = async ({ params }) => {
    const { id } = params;
    const item = "https://storage.googleapis.com/trial-flyer-updated/" + id;
    return json({item});
}

export default function ViewerIdRoute() {
    const loaderData = useLoaderData;
    const item = loaderData.item;

    return (
        <article>
            <image src={item} alt="image"></image>
        </article>
    );
};
