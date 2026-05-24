import React, { useState } from 'react';
import GiveReviews from './GiveReviews';
import './ReviewForm.css';

const ReviewForm = () => {

  const doctors = [
    { name: "Dr. John", speciality: "Cardiologist" },
    { name: "Dr. Priya", speciality: "Dermatologist" }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [reviews, setReviews] = useState({});
  
  const handleSubmit = (index, data) => {

    setReviews({
      ...reviews,
      [index]: {
        ...data,
        submitted: true
      }
    });

  };

  return (
    <div className="review-container">

      <h2>Reviews</h2>

      <table>

        <thead>
          <tr>
            <th>S.No</th>
            <th>Doctor Name</th>
            <th>Speciality</th>
            <th>Provide Feedback</th>
            <th>Review</th>
          </tr>
        </thead>

        <tbody>

          {doctors.map((doc, index) => (

            <tr key={index}>

              <td>{index + 1}</td>

              <td>{doc.name}</td>

              <td>{doc.speciality}</td>

              <td>

                {reviews[index]?.submitted ? (

                  <span style={{ color: "green" }}>
                    Feedback Submitted
                  </span>

                ) : (

                  <button onClick={() => setActiveIndex(index)}>
                    Click Here
                  </button>

                )}

                {/* FORM INJECTION */}
                {activeIndex === index && !reviews[index]?.submitted && (

                  <GiveReviews
                    doctor={doc}
                    onClose={() => setActiveIndex(null)}
                    onSubmit={(data) => handleSubmit(index, data)}
                  />

                )}

              </td>

              <td>
                {reviews[index]?.review || "-"}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ReviewForm;