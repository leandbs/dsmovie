import Pagination from "assets/components/Pagination";
//import MovieScore from "assets/components/MovieScore";
import MovieCard from "assets/components/MovieCard";
function Listing(){
    return(
<>
<Pagination /> 
<div className="contanier" >
    <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3 md-3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 md-3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 md-3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 md-3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 md-3">
                <MovieCard />
            </div>
     </div>
</div>
</>
    );
}
export default Listing;