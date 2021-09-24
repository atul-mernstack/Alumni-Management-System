import './style.css';
const Home=()=>{
    return(
        <>
        {/* <div className="container-fluid">
            <div className="row">
                <img style={{width:"100%", height:"500px"}} src={"/cdac-acts1.jpeg"}/>
            </div>
        </div> */}
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img style={{width:"100%", height:"500px"}} src={"/cdac-acts1.jpeg"} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2 className="text-size text-light">CDAC, PUNE</h2>
        <p className="text-size text-light">Centre For Development Of Advanced Computing, Pune</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img style={{width:"100%", height:"500px"}} src={"/cdac-acts2.jpeg"} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h2 className="text-size text-light">CDAC, PUNE</h2>
        <p className="text-size text-light">Centre For Development Of Advanced Computing, Pune</p>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{width:"100%", height:"500px"}} src={"/cdac-acts3.jpg"} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h2 className="text-size text-light">CDAC, PUNE</h2>
        <p className="text-size text-light">Centre For Development Of Advanced Computing, Pune</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="row-height"></div>
        </>
    );
}

export default Home;