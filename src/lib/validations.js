export function isValidEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value);
}

export function validateContactPayload(payload) {
  const errors = {};

  if (!payload.name?.trim()) {
    errors.name = "Full name is required.";
  }

  if (!payload.email?.trim()) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(payload.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!payload.message?.trim()) {
    errors.message = "Project details are required.";
  }

  return errors;
}
