"use server";

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const interest = formData.get("interest")?.toString() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email) {
    return {
      status: "error",
      message: "Please provide your name and email so we can reach you.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "That email address doesn't look right — please double-check it.",
    };
  }

  // TODO: forward to CRM / email service. For now, log the inquiry server-side.
  console.log("New Borello Ranch inquiry:", {
    name,
    email,
    phone,
    interest,
    message,
  });

  return {
    status: "success",
    message: `Thank you, ${name}. A member of our team will be in touch within one business day.`,
  };
}
