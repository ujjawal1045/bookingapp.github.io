import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const {data, loading, error} = useFetch("http://localhost:8000/api/hotels/countByType");
  console.log(data);
  const images = ["https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
                  "https://www.pandotrip.com/wp-content/uploads/2013/08/philippines-jes-aznar.jpg",
                  "https://media.istockphoto.com/id/1140199948/photo/contemporary-modern-luxury-flats-in-knightsbridge-london.jpg?s=612x612&w=0&k=20&c=RKa8ADtlwyoWJJeGkqdEOQ-IGF1iRgEi9aBg0sEKoc4=",
                  "https://static.businessworld.in/article/article_extra_large_image/1539605458_CvZVT4_oyo.jpg",
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b1/8c/fc/front-of-the-craigdarroch.jpg?w=1200&h=-1&s=1"
]
  return (
    <div className="pList">
      {loading ? (
        "Loading please wait"
      ) : (
      <>
        {data && images.map((img,i) => (
        
        <div className="pListItem" key={i}>
          <img
            src={img}
            alt="" 
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>{data[i]?.typee}</h1>
            <h2>{data[i]?.count} {data[i]?.typee}</h2>
          </div>
        </div>
        ))}
      </>
      )}
    </div>
  );
};

export default PropertyList;
