// /* Задания на урок:
//
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
//
// 2) Изменить жанр фильма, поменять "комедия" на "драма"
//
// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
//
// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
//
// 5) Добавить нумерацию выведенных фильмов */
//
// 'use strict';
//
// document.addEventListener('DOMContentLoaded', () => {
//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };
//
//     const adv = document.querySelectorAll('.promo__adv img'),
//         genre = document.querySelector('.promo__genre'),
//         poster = document.querySelector('.promo__bg'),
//         moviesList = document.querySelector('.promo__interactive-list'),
//         addForm = document.querySelector('form.add'),
//         addInput = addForm.querySelector('.adding__input'),
//         checkbox = addForm.querySelector('[type="checkbox"]');
//
//
//     addForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//
//         let newFilm = addInput.value;
//         const favorite = checkbox.checked;
//
//         if (newFilm) {
//
//             if (newFilm.length > 21) {
//                 newFilm = `${newFilm.substring(0, 22)}...`
//             }
//
//             if (favorite) {
//                 console.log("Добавляем наш любимый фильм")
//             }
//
//             movieDB.movies.push(newFilm);
//             sortArr(movieDB.movies)
//
//             createMovieList(movieDB.movies, moviesList);
//         }
//
//         event.target.reset()
//     });
//
//
//     const deleteAdv = (arr) => {
//         arr.forEach(item => {
//             item.remove()
//         })
//     }
//
//
//     const makeChanges = () => {
//         genre.textContent = 'ДРАМА'
//
//         poster.style.backgroundImage = 'url("img/bg.jpg")'
//     };
//
//
//
//      const sortArr = (arr) => {
//          arr.sort();
//      }
//
//
//     function createMovieList(films, parent) {
//         parent.innerHTML = '';
//         sortArr(films)
//
//         films.forEach((film, i) => {
//             parent.innerHTML += `
//                 <li class="promo__interactive-item">${i + 1} ${film}
//                     <div class="delete"></div>
//                 </li>
//     `;
//         });
//
//
//         document.querySelectorAll('.delete').forEach((btn, i) => {
//             btn.addEventListener('click', () => {
//                 btn.parentElement.remove();
//                 movieDB.movies.splice(i, 1)
//
//                 createMovieList(films, parent);
//             })
//         })
//     }
//
//
//     deleteAdv(adv)
//     createMovieList(movieDB.movies, moviesList)
//     makeChanges()
//     sortArr(movieDB.movies)
// });


// 'use strict';
//
// document.addEventListener('DOMContentLoaded', () => {
//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };
//
//     const adv = document.querySelectorAll('.promo__adv img'),
//         genre = document.querySelector('.promo__genre'),
//         poster = document.querySelector('.promo__bg'),
//         moviesList = document.querySelector('.promo__interactive-list'),
//         addForm = document.querySelector('form.add'),
//         addInput = addForm.querySelector('.adding__input'),
//         checkbox = addForm.querySelector('[type="checkbox"]');
//
//
//     addForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//
//         let newFilm = addInput.value;
//         const favorite = checkbox.checked;
//
//         if (newFilm) {
//
//             if (newFilm.length > 21) {
//                 newFilm = `${newFilm.substring(0, 21)}...`
//             }
//
//             sortArr(movieDB.movies);
//             movieDB.movies.push(newFilm);
//             createMovieList(movieDB.movies, moviesList)
//         }
//         if (favorite) {
//             console.log('Наш любимый фильм')
//         }
//
//         e.target.reset();
//
//     })
//
//     const sortArr = (arr) => {
//         arr.sort()
//     }
//
//     const deleteAdv = (arr) => {
//         arr.forEach(item => {
//             item.remove()
//         })
//     }
//
//     const makeChanges = () => {
//         genre.textContent = 'ДРАМА'
//
//         poster.style.backgroundImage = 'url("img/bg.jpg")'
//     }
//
//
//     const createMovieList = (films, parent) => {
//         parent.innerHTML = '';
//         sortArr(films)
//
//
//         films.forEach((film, i) => {
//             parent.innerHTML += `
//                 <li class="promo__interactive-item">${i + 1} ${film}
//                     <div class="delete"></div>
//                 </li>
//     `
//         })
//
//         document.querySelectorAll('.delete').forEach((btn, i) => {
//             btn.addEventListener('click', () => {
//                 btn.parentElement.remove()
//                 movieDB.movies.splice(i, 1)
//
//                 createMovieList(films, parent);
//             })
//         })
//     }
//
//     sortArr(movieDB.movies)
//     deleteAdv(adv)
//     makeChanges()
//     createMovieList(movieDB.movies, moviesList)
// })


// 'use strict';
//
// document.addEventListener('DOMContentLoaded', () => {
//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };
//
//     const adv = document.querySelectorAll('.promo__adv img'),
//         genre = document.querySelector('.promo__genre'),
//         poster = document.querySelector('.promo__bg'),
//         moviesList = document.querySelector('.promo__interactive-list'),
//         addForm = document.querySelector('form.add'),
//         addInput = addForm.querySelector('.adding__input'),
//         checkbox = addForm.querySelector('[type="checkbox"]');
//
//
//     addForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//
//         let newFilm = addInput.value;
//         const favorite = checkbox.checked;
//
//         if (newFilm) {
//
//             if (newFilm.length > 21) {
//                 newFilm = `${newFilm.substring(0, 22)}...`
//             }
//
//
//             sortArr(movieDB.movies);
//             movieDB.movies.push(newFilm);
//             createMovieList(movieDB.movies, moviesList)
//         }
//
//         e.target.reset();
//
//     })
//
//
//     const deleteAdv = (arr) => {
//         arr.forEach(item => {
//             item.remove()
//         })
//     }
//
//     const makeChanges = () => {
//         genre.textContent = 'ДРАМА'
//         poster.style.backgroundImage = 'url("img/bg.jpg")'
//     }
//
//     const sortArr = (arr) => {
//         arr.sort();
//     }
//
//     const createMovieList = (films, parent) => {
//         parent.innerHTML = '';
//         sortArr(films)
//
//         films.forEach((film, i) => {
//             parent.innerHTML += `
//                 <li class="promo__interactive-item">${i + 1} ${film}
//                     <div class="delete"></div>
//                 </li>
//     `
//         })
//
//         document.querySelectorAll('.delete').forEach((btn, i) => {
//             btn.addEventListener('click', () => {
//                 btn.parentElement.remove()
//                 movieDB.movies.splice(i, 1)
//             })
//         })
//     }
//
//     makeChanges()
//     deleteAdv(adv)
//     sortArr(movieDB.movies)
//     createMovieList(movieDB.movies, moviesList)
// })




'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        moviesList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');




    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`
            }

            if (favorite) {
                console.log('Это ваш любимый фильм')
            }

            movieDB.movies.push(newFilm)
            createMovieList(movieDB.movies, moviesList)
            sortArr(movieDB.movies)
        }

        event.target.reset();
    })




    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove()
        })
    }

    const makeChanges = () => {
        genre.textContent = 'ДРАМА'

        poster.style.backgroundImage = 'url("img/bg.jpg")'
    }

    const sortArr = (arr) => {
        arr.sort();
    }

    const createMovieList = (films, parent) => {
        parent.innerHTML = '';
        sortArr(films)


        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
    `
        })

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1)

                createMovieList(movieDB.movies, moviesList)
            })
        })
    }

    sortArr(movieDB.movies)
    createMovieList(movieDB.movies, moviesList)
    deleteAdv(adv)
    makeChanges()
})





















