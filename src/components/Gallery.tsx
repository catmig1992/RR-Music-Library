import GalleryItem from "./GalleryItem";

interface GalleryProps {
  data: {
    trackName: string;
    collectionName: string;
    primaryGenreName: string;
    releaseDate: string;
    artworkUrl100: string;
  }[];
}

function Gallery(props: GalleryProps) {
  const display = props.data.map(
    (
      item: {
        trackName: string;
        collectionName: string;
        primaryGenreName: string;
        releaseDate: string;
        artworkUrl100: string;
      },
      index: any
    ) => {
      return <GalleryItem item={item} key={index} />;
    }
  );

  return <div>{display}</div>;
}

export default Gallery;


