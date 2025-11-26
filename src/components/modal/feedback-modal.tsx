"use client";

import { useState } from "react";
import {
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModal } from "./modal-context";

export function FeedbackModal() {
  const { closeModal } = useModal();
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    // TODO: Handle feedback submission
    console.log("Feedback submitted:", feedback);
    closeModal();
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Send Feedback</DialogTitle>
        <DialogDescription>
          We'd love to hear your thoughts. How can we improve?
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4 py-4">
        <div className="space-y-2">
          <label htmlFor="feedback" className="text-sm font-medium">
            Your feedback
          </label>
          <Textarea
            id="feedback"
            placeholder="Tell us what you think..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-[160px] field-sizing-fixed scrollbar-hidden"
          />
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={closeModal}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} disabled={!feedback.trim()}>
          Submit
        </Button>
      </DialogFooter>
    </>
  );
}
