import { useLoaderData } from "@remix-run/react";
import { json } from '@remix-run/node'
import styleUrl from '../style/viewer.css';

export const links = () => {
    return [{rel: "stylesheet", href: styleUrl}];
}

export const loader = async ({ params }) => {
    //console.log(params);
    //console.log(params.name);
    const item = "https://storage.googleapis.com/trial-flyer-updated/" + params.name + ".jpg";
    console.log(item);
    return json({embedding: item});
}

export default function ViewerNameRoute() {
    const loaderData = useLoaderData();
    const item = loaderData.embedding;
    console.log(item);

    return (
        <div>
            <image src={item} alt="image"></image>
        </div>
    );
};
