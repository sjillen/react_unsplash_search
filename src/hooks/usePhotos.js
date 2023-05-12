import { useEffect, useRef, useState } from "react";
import { fetchPhotosByTag } from "../api/unsplash";

const usePhotos = (tag) => {
  const [list, setList] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!tag || tag.length < 3) {
      return;
    }
    timerRef.current = setTimeout(() => {
      (async () => {
        const photos = await fetchPhotosByTag(tag);
        setList(photos ?? []);
      })();
    }, 2000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [tag]);

  return { list };
};

export default usePhotos;
