

async function process(){
    let given_link = 'http://api.tvmaze.com/search/shows?q='
    let searching_name = document.getElementById('search_here').value;
    let response = await fetch('http://api.tvmaze.com/search/shows?q= + searching_name')

    let data = await response.json();

//creating a new div inside the section
    let inner_division1 = document.getElementById('result_screen');
    inner_division1 = document.createAttribute('div')
    
    inner_division1.className ='container p-5 bg-grey view_port';
    inner_division1.id='view_screen'

    //looping through object to get the data
    for(i=0;i<data.length;i++){

//creating another div inside a section to present the movies 
        let inner_division2 = document.createAttribute('section')
        inner_division2.className='container mini_view1';
        inner_division2.id='mini_view2';
        inner_division2.style='margin:12 px; width 300 px; border: 2px solid brown ; padding:8px'

//creating a paragraph section to specify the details correctly

        //movie name display section
        let what_movie = document.createElement('p');
        what_movie.innerHTML = 'Movie Name : ' + data[i].show.name;

        //movie type display section
        let what_type = document.createElement('p');
        what_type.innerHTML = 'Movie Type : ' + data[i].show.type;

        //movie language display section
        let what_language = document.createElement('p');
        what_language.innerHTML = 'Movie Language : ' + data[i].show.language;

        //movie genres display section
        let what_genres = document.createElement('p');
        what_genres.innerHTML = 'Movie Genres : ' + data[i].show.genres;

        //movie runtime display section
        let what_runtime = document.createElement('p');
        what_runtime.innerHTML = 'Movie Runtime : ' + data[i].show.runtime

        //movie premiered display section
        let when_premiered = document.createElement('p');
        when_premiered.innerHTML = 'Premiered On : ' + data[i].show.premiered;

        //movie network display section
        let what_network = document.createElement('p');
        what_network.innerHTML = 'Network Type : ' + data[i].show.network.name;

        //movie rating display section
        let what_rating = document.createElement('p');
        what_rating.innerHTML = 'Overall Rating : ' + data[i].show.rating.average;


     //appending the display section to the previously created div with a var name inner_division1
     inner_division1.append(inner_division2)



    }
    
     
}

process()