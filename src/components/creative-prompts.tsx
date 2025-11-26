"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

const prompts = [
  // Reverse & Invert
  "List your core assumptions about this problem, then flip each one. What solutions emerge?",
  "What's the opposite of your current approach? Explore it seriously for 10 minutes.",
  "If you had to make this worse on purpose, how would you? Now reverse those actions.",

  // Constraints as Catalysts
  "Remove your biggest resource (time, budget, team). What would you build with half?",
  "What if this had to ship tomorrow? What's the simplest version that still matters?",
  "Limit yourself to three features only. Which three actually move the needle?",
  "What would a 10-year-old understand about this? Simplify until they could explain it.",

  // Perspective Shifts
  "How would your harshest critic attack this idea? Address their best arguments.",
  "Describe this project from your end user's Monday morning perspective.",
  "What would someone from a completely different industry find strange about your approach?",
  "If you inherited this project tomorrow with fresh eyes, what would you change first?",

  // Analogies & Cross-Pollination
  "What unrelated field has solved a similar problem? Steal their approach.",
  "If this were a restaurant, what kind would it be? What does that tell you?",
  "Find three products you admire. What principle from each could apply here?",
  "How would nature solve this problem? Look for biological analogies.",

  // Time Travel
  "Fast-forward 5 years: what will you wish you had done differently today?",
  "What would the 2030 version of this look like? Work backwards from there.",
  "What's the decision you keep postponing? That's probably the important one.",
  "If you had started this a year ago, what would you know now that you don't?",

  // First Principles
  "Strip away all conventions. What problem are you actually solving?",
  "Forget how it's 'usually done.' If you started from scratch today, what would you build?",
  "What's the job-to-be-done here? Focus only on that outcome.",
  "List everything you're doing out of habit versus intention.",

  // Bad Ideas Welcome
  "Generate 10 terrible ideas in 5 minutes. Mine them for hidden gems.",
  "What's the most embarrassingly simple solution? Why aren't you trying it?",
  "What would you do if you knew you couldn't fail? Now, why not try it anyway?",
  "What's the 'lazy' solution? Sometimes efficient and lazy are the same thing.",

  // Expand & Contract
  "If budget were unlimited, what would change? Often the answer reveals priorities.",
  "What would you cut if forced to reduce scope by 50%? Consider cutting it anyway.",
  "What's one small bet you could make this week to test your biggest assumption?",
  "What are you overcomplicating? Find the version that fits on a napkin.",

  // Stakeholder Lens
  "Who's not in the room that should be? What would they say?",
  "What does success look like for each stakeholder? Where do they conflict?",
  "Who will hate this? Understanding resistance often reveals the real issues.",
  "What would make this so good that customers tell others without being asked?",

  // Reframing
  "You're framing this as a problem. What if it's actually an opportunity?",
  "What question are you not asking that might change everything?",
  "Instead of 'how do we fix this,' ask 'what would make this unnecessary?'",
  "What are you optimizing for? Is that still the right metric?",

  // Action Bias
  "What's the smallest experiment you could run in the next hour?",
  "Stop planning. What's one thing you could ship today to learn something?",
  "What decision are you avoiding? Make it now with the information you have.",
  "What would you do if you had to present progress tomorrow morning?",

  // Creative Destruction
  "What sacred cow needs to be questioned? Every project has one.",
  "What would you stop doing if you weren't afraid of the reaction?",
  "Kill your darlings: what are you attached to that isn't serving the work?",
  "If a competitor copied everything you're doing, what would still make you win?",
];

export function CreativePrompts() {
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * prompts.length)
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? prompts.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === prompts.length - 1 ? 0 : prev + 1));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-7 cursor-pointer"
        >
          <Lightbulb className="h-4 w-4" />
          <span className="sr-only">Pattern breakers</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72">
        <div className="space-y-3">
          <p className="text-sm font-medium">Pattern Breakers</p>
          <div className="min-h-[60px] flex items-center">
            <p className="text-sm text-muted-foreground italic">
              "{prompts[currentIndex]}"
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="size-7 cursor-pointer"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-xs text-muted-foreground">
              {currentIndex + 1} / {prompts.length}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="size-7 cursor-pointer"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
