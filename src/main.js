"use strict";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImg } from './js/pixabay-api';
import { createGallery } from './js/render-functions';


const form = document.querySelector(".form");
const input = document.querySelector(".search-input");

const myGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
  enableKeyboard: true,
  docClose: true,
});

form.addEventListener("submit", makeGallery);

// global

let inputValue;
let currentPage = 1;
let maxPage; 
const perPage = 15;


async function makeGallery(e) {
    // base
    e.preventDefault();
    const list = document.querySelector(".gallery");
    list.innerHTML = '';
    currentPage = 1;
    showLoader(true);
    inputValue = input.value;


    if (!inputValue) {
        loadMoreBtnOff();
        errorMess('Value cannot be empty');
    } else {
        try {showLoader(true);
            const data = await getImg(inputValue, currentPage);
            if (data.hits.length === 0)
            {loadMoreBtnOff();
                errorMess("Sorry, there are no images matching your search query. Please try again!");
        } else {try {showLoader(true);
                maxPage = Math.ceil(data.totalHits / perPage);
                lastPage();
                const images = data.hits;
                createGallery(images);
                loadMoreBtnOn();
                const card = document.querySelector(".list-item");
                const height = card.getBoundingClientRect().height * 2;
                window.scrollBy(0, height);
                myGallery.refresh();
            } catch {
                console.log("makeGallery error");
                }
                }
            } catch (error) {
        errorMess("Something wrong=(");
        }
        showLoader(false);
    }};



const errorMess = (messege) => {
     iziToast.error({
    title: 'Error',
    message: messege,
    backgroundColor: '#EF4040',
    messageColor: '#FFFFFF',
    maxWidth: 300,
    timeout: 2000,
    progressBar: false,
    position: 'topRight',
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 12,
})
}

const showLoader = (state) => {
  const loader = document.querySelector('.loader');
  loader.style.display = state ? 'block' : 'none';
};

// пагінація
// створив, приховав кнопку

const loadMoreBtn = document.querySelector(".load-more-btn");

function loadMoreBtnOn() {
    loadMoreBtn.style.display = "block";
};

function loadMoreBtnOff() {
    loadMoreBtn.style.display = "none";
};

loadMoreBtn.addEventListener("click", loadMoreBtnClick);

async function loadMoreBtnClick() {
    currentPage += 1;
    const data = await getImg(inputValue, currentPage);
    const images = data.hits;
    createGallery(images);
    loadMoreBtnOn();
    myGallery.refresh();
    lastPage();
};

function lastPage() {
    if (currentPage >= maxPage) {
        loadMoreBtnOff();
        errorMess("We're sorry, but you've reached the end of search results.");
    }
}

