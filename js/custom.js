var searchInput = document.querySelector('.form__control');
var searchContainer = document.querySelector('.search-container');
isValid = false;

searchInput.onfocus = function() {
    isValid = true;
    searchContainer.classList.add('is-collapse');
}

searchInput.onblur = function() {
    searchContainer.classList.remove('is-collapse');
}