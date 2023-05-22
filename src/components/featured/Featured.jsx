import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {data, loading, error} = useFetch("http://localhost:8000/api/hotels/countByCity?cities=sasaram,kolkata,bhubaneshwar");
  console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
      <>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Victoria_Memorial_By_Saprativa.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kolkata</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://pbs.twimg.com/media/EFSQA82UcAA4nGO?format=jpg&name=4096x4096"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>sasaram</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://kiit.ac.in/wp-content/uploads/2021/02/KIIT-University-Campus-KSOM.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bhubaneshwar</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default Featured;
