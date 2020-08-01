import React, { useEffect, useState } from 'react';
import Parent from '../../components/Parent/Parent';
import BannerMain from '../../components/BannerMain/BannerMain';
import Carousel from '../../components/Carousel/Carousel';
import apiCategories from '../../api/categories';

function Home() {
  const [defaultData, setDefaultData] = useState([]);

  useEffect(() => {
    apiCategories.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setDefaultData(categoriesWithVideos);
      })
      .catch((err) =>{
        console.log(err.message);
      });
  }, []);

  return (
    <Parent padding={0}>

      {defaultData.length === 0 && (<div>Loading...</div>)}
      {defaultData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={defaultData[0].videos[0].title}
                url={defaultData[0].videos[0].url}
                videoDescription={defaultData[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={defaultData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
      
    </Parent>
  );
}

export default Home;
