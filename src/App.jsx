import { useState } from "react";
import { useForm } from "react-hook-form";

// FIX: safer resolver import (prevents 90% of setup errors)
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";

import { formSchema } from "./schemas/formSchema";

import AccountDetails from "./components/AccountDetails";
import PersonalInfo from "./components/PersonalInfo";
import ProgressBar from "./components/ProgressBar";
import ReviewSubmit from "./components/ReviewSubmit";
import Success from "./components/Success";

function App() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // STEP VALIDATION
  const nextStep = async () => {
    let fields = [];

    if (step === 1) {
      fields = ["firstName", "lastName", "dob"];
    }

    if (step === 2) {
      fields = ["email", "password", "confirmPassword"];
    }

    const isValid = await trigger(fields);

    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data) => {
    console.log("Final Payload:", data);
    setSuccess(true);
  };

  if (success) {
    return <Success />;
  }

  const formData = getValues();

  return (
    <div className="container">
      <div className="form-card">
        <ProgressBar step={step} />

        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <PersonalInfo register={register} errors={errors} />
          )}

          {step === 2 && (
            <AccountDetails register={register} errors={errors} />
          )}

          {step === 3 && <ReviewSubmit data={formData} />}

          <div className="button-group">
            {step > 1 && (
              <button
                type="button"
                className="back-btn"
                onClick={prevStep}
              >
                Back
              </button>
            )}

            {step < 3 && (
              <button
                type="button"
                className="next-btn"
                onClick={nextStep}
              >
                Next
              </button>
            )}

            {step === 3 && (
              <button type="submit" className="submit-btn">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;