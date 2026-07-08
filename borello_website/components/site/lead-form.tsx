"use client";

import { useActionState, useState } from "react";

import { submitLead, type LeadFormState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const initialState: LeadFormState = { status: "idle", message: "" };

const interestOptions = [
  { value: "touring", label: "Scheduling a private tour" },
  { value: "floor-plans", label: "Floor plans & pricing" },
  { value: "selling", label: "Selling my current home" },
  { value: "general", label: "General questions" },
];

export function LeadForm() {
  const [state, formAction, isPending] = useActionState(
    submitLead,
    initialState
  );
  const [interest, setInterest] = useState<string | null>(null);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-xl border border-accent/30 bg-accent/10 p-8 text-center"
      >
        <p className="font-heading text-2xl">We&apos;ll Be in Touch</p>
        <p className="mt-3 max-w-sm text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="Jane Smith" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(408) 555-0123" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="interest">I&apos;m Interested In</Label>
          <Select
            items={interestOptions}
            value={interest}
            onValueChange={setInterest}
          >
            <SelectTrigger id="interest" className="w-full">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              {interestOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="interest" value={interest ?? ""} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your timeline, must-haves, or questions..."
          rows={4}
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="h-11 w-full bg-accent text-base text-accent-foreground hover:bg-accent/85"
      >
        {isPending ? "Sending..." : "Request Information"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to be contacted about Borello Ranch Estates.
        We never share your information.
      </p>
    </form>
  );
}
