import Style from './index.module.scss';

const Pagination = ({ currentPage, pageSize, total, totalPages, onPageChange, hiddenPageNo = false }) => {
    const MAX_PAGES_DISPLAY = 5; // 分页可展示的页面

    const getPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(1, currentPage - Math.floor(MAX_PAGES_DISPLAY / 2));
        const endPage = Math.min(totalPages, startPage + MAX_PAGES_DISPLAY - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        };

        // 如果有更多页面要显示，请添加省略号
        if (startPage > 1) {
            pageNumbers.unshift('...');
        };
        if (endPage < totalPages) {
            pageNumbers.push('...');
        };

        return pageNumbers;
    };

    return (
        <div className={Style.component}>
            <ul>
                <li>
                    <button
                        type='button'
                        disabled={currentPage === 1}
                        className={currentPage === 1 ? Style.disabled : ''}
                        onClick={() => onPageChange(currentPage - 1)}
                    >
                        <i className='iconfont icon-arrow-left'></i>
                    </button>
                </li>
                {
                    !hiddenPageNo
                    &&
                    getPageNumbers().map((pageNumber, index) => (
                        <li key={index}>
                            {
                                pageNumber === '...'
                                ?
                                <span>•••</span>
                                :
                                <button
                                    type='button'
                                    className={pageNumber === currentPage ? Style.active : ''}
                                    onClick={() => onPageChange(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            }
                        </li>
                    ))
                }
                <li>
                    <button
                        type='button'
                        disabled={currentPage === totalPages || total < pageSize}
                        className={(currentPage === totalPages || total < pageSize) ? Style.disabled : ''}
                        onClick={() => onPageChange(currentPage + 1)}
                    >
                        <i className='iconfont icon-arrow-right'></i>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
