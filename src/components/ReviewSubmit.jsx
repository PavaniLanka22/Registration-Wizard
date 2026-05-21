function ReviewSubmit({ data }) {
  return (
    <div>
<>
  <h2>Review Information</h2>

  <p className="form-subtitle">
    Verify your details before submitting.
  </p>
</>
      <div className="review-box">
        <p>
          <strong>First Name:</strong> {data.firstName}
        </p>

        <p>
          <strong>Last Name:</strong> {data.lastName}
        </p>

        <p>
          <strong>Date of Birth:</strong> {data.dob}
        </p>

        <p>
          <strong>Email:</strong> {data.email}
        </p>
      </div>
    </div>
  );
}

export default ReviewSubmit;