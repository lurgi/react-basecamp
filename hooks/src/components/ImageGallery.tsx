<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import useImageHook from "../hooks/useImageHook";

const ImageGallery: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const { images } = useImageHook(keyword);
=======
import React, { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

interface Image {
  id: number;
  webformatURL: string;
  tags: string;
}
=======
import React, { useState } from "react";
import useImageHook from "../hooks/useImageHook";
>>>>>>> f1a6b7956acec4827dfd267f6cec6b5825ab0b53

const ImageGallery: React.FC = () => {
  const [keyword, setKeyword] = useState("");
<<<<<<< HEAD

  // useEffect를 사용하여 keyword가 변경될 때마다 이미지를 가져오는 로직을 작성해보세요.
  useEffect(() => {
    // 여기에 코드를 작성하세요.
    // 힌트:
    // 1. fetchImages 함수를 정의하세요.
    // 2. fetchImages 함수 내부에서 Pixabay API를 호출하여 이미지를 가져오세요.
    // 3. 가져온 이미지를 상태(images)에 업데이트하세요.
    // 4. keyword가 존재할 때만 fetchImages 함수를 호출하세요.
  }, [keyword]);
>>>>>>> df1267a743fa51ebdd3ad6fd93c37d872f3bca19
=======
  const { images } = useImageHook(keyword);
>>>>>>> f1a6b7956acec4827dfd267f6cec6b5825ab0b53

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(e.currentTarget.keyword.value);
  };

  return (
    <>
      <header>
        <h1>Image Gallery</h1>
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="searchKeyword">검색:</label>
<<<<<<< HEAD
<<<<<<< HEAD
          <input type="text" id="searchKeyword" name="keyword" placeholder="키워드 입력" />
=======
          <input
            type="text"
            id="searchKeyword"
            name="keyword"
            placeholder="키워드 입력"
          />
>>>>>>> df1267a743fa51ebdd3ad6fd93c37d872f3bca19
=======
          <input type="text" id="searchKeyword" name="keyword" placeholder="키워드 입력" />
>>>>>>> f1a6b7956acec4827dfd267f6cec6b5825ab0b53
          <button type="submit">Search</button>
        </form>
      </section>
      <section>
        {images.map((image) => (
          <article key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
            <p>{image.tags}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default ImageGallery;
