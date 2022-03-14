import icons from 'url:../../img/icons.svg';

class SearchView {
  _parentElement = document.querySelector('.search');
  _viewElement = document.querySelector('.search-results');
  _errorMessage = 'We could not find that recipe! Please try another one!';

  getQuery() {
    const query = document.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._viewElement.innerHTML = '';
    this._clearInput();
    this._viewElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clearInput() {
    document.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
