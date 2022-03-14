import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerRender(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.page;
      //   console.log(goToPage);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const page = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;
    // console.log(page);

    // Page 1 and others
    if (currentPage === 1 && page > currentPage) {
      return `
        <button data-page=${
          currentPage + 1
        } class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    }
    // Last page
    if (currentPage === page && page > 1) {
      return `
        <button data-page=${
          currentPage - 1
        } class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
        `;
    }

    // Between other pages
    if (currentPage > 1 && currentPage < page) {
      return `
            <button data-page=${
              currentPage - 1
            } class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
            </button>
            <button data-page=${
              currentPage + 1
            } class="btn--inline pagination__btn--next">
                <span>Page ${currentPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `;
    }

    // Only 1 page
    if (currentPage === 1 && page === 1) return '';
  }

  _generateMarkupButton() {}
}

export default new PaginationView();
