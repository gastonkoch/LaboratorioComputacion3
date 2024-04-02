import PropTypes from 'prop-types';
const BookItem = ({ title, author, pageCount, rating }) => {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <div>{rating.length} estrellas</div>
            <p>{pageCount} páginas</p>
        </div>
    );
};
BookItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pageCount: PropTypes.number,
    rating: PropTypes.array,
};

export default BookItem;