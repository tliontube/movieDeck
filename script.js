const api =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1 ";
const cardContents = document.querySelector(".card-Content");

async function fetchMovies() {
  const response = await fetch(api);
  const moviesData = await response.json();
  moviesData.results.map((details) => {
    //Parent content
    const content = document.createElement("div");
    content.classList.add("content");

    //image Poster and image code
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("img-div");
    const imagePoster = document.createElement("img");
    imagePoster.classList.add("movieImg");
    imagePoster.src = details.backdrop_path;
    imageDiv.appendChild(imagePoster);
    content.appendChild(imageDiv);
    cardContents.appendChild(content);

    //movie Details create divs
    const ContentDetailFlex = document.createElement("div");
    ContentDetailFlex.classList.add("content-detailFlex");
    const ContentDetail = document.createElement("div");
    ContentDetail.classList.add("content-details");
    ContentDetailFlex.appendChild(ContentDetail);
    const heartDiv = document.createElement("div");
    heartDiv.classList.add("hearDiv");

    //movie Detail div
    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = details.title;
    ContentDetail.appendChild(title);

    //movie Vote
    const Vote = document.createElement("p");
    Vote.classList.add("vote");
    Vote.textContent = "Votes: " + details.vote_count;
    ContentDetail.appendChild(Vote);

    //movie Rating
    const rating = document.createElement("p");
    rating.classList.add("rating");
    rating.textContent = "Rating: " + details.vote_average;
    ContentDetail.appendChild(rating);
    content.appendChild(ContentDetailFlex);
    
    //Heart Button Div
    const heartButton = document.createElement("button");
    heartButton.classList.add("content-heart");
    heartButton.textContent = "Heart";
    heartDiv.appendChild(heartButton);
    ContentDetailFlex.appendChild(heartDiv);
  });
}
fetchMovies();
