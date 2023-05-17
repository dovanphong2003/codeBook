import React from "react";

export const Rating = ({ rating }) => {
    const allRating = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
        allRating[i] = true;
    }
    return (
        <>
            {allRating.map((rt, index) =>
                rt ? (
                    <i
                        key={index}
                        className="text-lg bi bi-star-fill text-yellow-500 mr-1"
                    ></i>
                ) : (
                    <i
                        key={index}
                        className="text-lg bi bi-star text-yellow-500 mr-1"
                    ></i>
                )
            )}
        </>
    );
};
