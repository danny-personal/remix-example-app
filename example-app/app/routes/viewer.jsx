import { useLoaderData, Outlet, Link } from "@remix-run/react";

import stylesUrl from "../style/viewer.css";

import { getImages } from "../utils/exampleApp.server";

export const links = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader = async () => {
    const json = await getImages();
    console.log(json);
    const result = json.items.map(item => ({
        id: item.id,
        title: item.name
      }));
    return result;
};

export default function ViewerRoute() {
    const data = useLoaderData();
    return (
        <div>
            <header>
                <h1>Image Viewer</h1>
            </header>
            <div id="title">
                <span>Title</span>
            </div>
            <div id="container">
                <div id="sidebar-left">
                {data.map((item) => (
                    <div key={item.id}>
                                <Link to={`/viewer/${item.title}`}>{item.title}</Link>
                    </div>
                    ))}
                </div>
                <main id="sidebar-right">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}
