"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { validateContactPayload } from "@/lib/validations";

const serviceOptions = [
  { value: "", label: "Select a service" },
  ...services.map((service) => ({ value: service.title, label: service.title })),
];

const budgetOptions = [
  { value: "", label: "Select a budget range" },
  { value: "under-2k", label: "Under $2,000" },
  { value: "2k-5k", label: "$2,000 - $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-plus", label: "$10,000+" },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateContactPayload(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors || { form: "Something went wrong." });
        return;
      }

      setForm(initialForm);
      router.push("/thank-you");
    } catch (error) {
      console.error("Contact form error:", error);
      setErrors({ form: "Unable to submit right now. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Full name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <Input
          label="Timeline"
          name="timeline"
          placeholder="Example: next 2 months"
          value={form.timeline}
          onChange={handleChange}
          error={errors.timeline}
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Select
          label="Service"
          name="service"
          value={form.service}
          onChange={handleChange}
          options={serviceOptions}
          error={errors.service}
        />
        <Select
          label="Budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          options={budgetOptions}
          error={errors.budget}
        />
      </div>

      <div className="mt-5">
        <Textarea
          label="Project details"
          name="message"
          value={form.message}
          onChange={handleChange}
          error={errors.message}
          placeholder="Tell us about the space, goals, and what kind of support you need."
        />
      </div>

      {errors.form ? (
        <p className="mt-4 text-sm text-red-600">{errors.form}</p>
      ) : null}

      <div className="mt-6">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </div>
    </form>
  );
}