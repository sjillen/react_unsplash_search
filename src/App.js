import { useState } from "react";
import PhotoList from "./components/photo_list";
import TagInput from "./components/tag_input";
import usePhotos from "./hooks/usePhotos";
import "./styles.css";

export default function App() {
  const [tag, setTag] = useState("");
  const { list } = usePhotos(tag);

  const handleTag = (newTag) => {
    if (newTag !== tag) {
      setTag(newTag);
    }
  };
  return (
    <div className="App">
      <h2 className="mt-4 mb-4">Search Photos by Tag</h2>
      <TagInput value={tag} handleChange={handleTag} />
      <PhotoList list={list} />
    </div>
  );
}
