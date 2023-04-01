import GalleryItem from "./GalleryItem";

interface GalleryProps {
  data: ItemProps[];
}

function Gallery(props: GalleryProps) {
  const display = props.data.map((item: ItemProps, index: number) => {
    return <GalleryItem item={item} key={index} />;
  });

  return <div>{display}</div>;
}

export default Gallery;
