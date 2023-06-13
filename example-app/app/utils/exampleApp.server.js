export async function getImages() {
    return fetch(`https://storage.googleapis.com/storage/v1/b/trial-flyer/o?maxResults=10`).then(
        (response) => response.json()
    );
}
