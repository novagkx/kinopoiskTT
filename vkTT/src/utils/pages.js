export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (pageNumber, totalPages) => {
    let result = [];
    const pagesPerGroup = 5; // Количество страниц в группе
    const groupIndex = Math.ceil(pageNumber / pagesPerGroup) - 1; // Индекс текущей группы

    // Вычисляем номер первой страницы в текущей группе
    const startPage = groupIndex * pagesPerGroup + 1;

    // Добавляем страницы в массив
    for (let i = startPage; i < startPage + pagesPerGroup && i <= totalPages; i++) {
        result.push(i);
    }

    return result;
};