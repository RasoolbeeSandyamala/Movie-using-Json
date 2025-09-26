document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('movieSearchInput');
    let cardscontainer = document.getElementById('cardscontainer');
    let allMovies = [];

    // Fetch all movies
    async function fetchingdata() {
        let res = await fetch('./movies.json');
        let data = await res.json();
        allMovies = data;
        displaycards(data);
    }
    fetchingdata();

    // Display cards
    function displaycards(m) {
        cardscontainer.innerHTML = '';
        for (let i of m) {
            let imgsrc = i.image;
            let moviename = i.title;
            let moviedes = i.Description;
            let image = document.createElement("img");
            image.src = imgsrc;
            let div = document.createElement('div');
            div.style.display = 'inline-block';
            div.style.margin = '10px';
            div.style.cursor = 'pointer';
            div.style.width = '200px';
            div.style.verticalAlign = 'top';
            div.style.boxShadow = '0 2px 8px #ccc';
            div.style.borderRadius = '8px';
            div.style.overflow = 'hidden';
            div.style.background = '#fff';
            image.style.width = '100%';
            image.style.height = '250px';
            image.style.objectFit = 'cover';
            div.appendChild(image);
            let MovieTitle = document.createElement('h3');
            MovieTitle.innerHTML = moviename;
            MovieTitle.style.margin = '10px';
            div.appendChild(MovieTitle);
            let MovieDescription = document.createElement('p');
            MovieDescription.innerHTML = moviedes;
            MovieDescription.style.margin = '10px';
            div.appendChild(MovieDescription);
            cardscontainer.appendChild(div);

            // Add click event to open detail view
            div.addEventListener('click', function () {
                sessionStorage.setItem('selectedMovie', JSON.stringify({
                    image: imgsrc,
                    title: moviename,
                    description: moviedes
                }));
                window.location.href = 'movie.html';
            });
        }
    }

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = this.value.trim().toLowerCase();
            const filtered = allMovies.filter(movie => movie.title.toLowerCase().includes(query));
            displaycards(filtered);
        });
    }
});
