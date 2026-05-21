function PersonalInfo({ register, errors }) {
  return (
    <div>
<>
  <h2>Create Your Profile</h2>

  <p className="form-subtitle">
    Enter your personal information to get started.
  </p>
</>
      <div className="input-group">
        <label>First Name</label>

        <input
          type="text"
          placeholder="Enter first name"
          {...register("firstName")}
        />

        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}
      </div>

      <div className="input-group">
        <label>Last Name</label>

        <input
          type="text"
          placeholder="Enter last name"
          {...register("lastName")}
        />

        {errors.lastName && (
          <p className="error">{errors.lastName.message}</p>
        )}
      </div>

      <div className="input-group">
        <label>Date of Birth</label>

        <input type="date" {...register("dob")} />

        {errors.dob && <p className="error">{errors.dob.message}</p>}
      </div>
    </div>
  );
}

export default PersonalInfo;