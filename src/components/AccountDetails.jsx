import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function AccountDetails({ register, errors }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div>
      <h2>Secure Your Account</h2>

      <p className="form-subtitle">
        Create a strong password for your account.
      </p>

      {/* EMAIL */}
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
        {errors.email && (
          <p className="error">{errors.email.message}</p>
        )}
      </div>

      {/* PASSWORD */}
      <div className="input-group">
        <label>Password</label>

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            {...register("password")}
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {errors.password && (
          <p className="error">{errors.password.message}</p>
        )}
      </div>

      {/* CONFIRM PASSWORD */}
      <div className="input-group">
        <label>Confirm Password</label>

        <div className="password-wrapper">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />

          <span
            className="eye-icon"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {errors.confirmPassword && (
          <p className="error">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default AccountDetails;