export function isValidEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value);
}

export function validateContactPayload(payload = {}) {
  const errors = {};

  if (!payload.name?.trim()) {
    errors.name = "Name is required.";
  }

  if (!payload.email?.trim()) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(payload.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!payload.service?.trim()) {
    errors.service = "Please choose a service.";
  }

  if (!payload.budget?.trim()) {
    errors.budget = "Please choose a budget range.";
  }

  if (!payload.message?.trim()) {
    errors.message = "Project details are required.";
  }

  return errors;
}
