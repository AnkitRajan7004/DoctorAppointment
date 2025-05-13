import React from 'react';
import PropTypes from 'prop-types';
import starIcon from '../../assets/images/star.png';

const Feedback = ({ feedback }) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        const totalStars = 5;

        return [...Array(totalStars)].map((_, i) => {
            if (i < fullStars) {
                return <img key={i} src={starIcon} alt="star" className="w-4 h-4" />;
            } else if (i === fullStars && hasHalfStar) {
                return (
                    <img key={i} src={starIcon} alt="half star" className="w-4 h-4 opacity-50" />
                );
            } else {
                return <img key={i} src={starIcon} alt="empty star" className="w-4 h-4 grayscale" />;
            }
        });
    };

    return (
        <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-md">
            <h3 className="text-headingColor font-bold text-[20px] mb-4">Patient Feedback</h3>
            <p className="text-textColor text-[16px] mb-4">"{feedback.comment}"</p>
            <div className="flex items-center gap-4">
                <span className="font-semibold text-[16px]">Rating:</span>
                <div className="flex items-center gap-1">
                    {renderStars(feedback.rating)}
                </div>
            </div>
        </div>
    );
};

// PropTypes for feedback validation
Feedback.propTypes = {
    feedback: PropTypes.shape({
        comment: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default Feedback;
