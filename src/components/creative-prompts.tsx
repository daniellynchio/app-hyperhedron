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
  "What if gravity worked in reverse for one day?",
  "Describe a color that doesn't exist yet.",
  "What would your life look like if you made the opposite choice 5 years ago?",
  "Invent a new holiday and its traditions.",
  "What if animals could vote?",
  "Design a house for someone who can fly.",
  "What would music look like if you could see it?",
  "Create a new emotion and describe how it feels.",
  "What if dreams were shared experiences?",
  "Invent a sport that combines three existing ones.",
  "What would a tree write in its diary?",
  "Design a city for people who never sleep.",
  "What if memories were transferable?",
  "Create a new sense beyond the five we have.",
  "What would happen if everyone could read minds for an hour?",
  "Invent a machine that solves an impossible problem.",
  "What if silence had a texture?",
  "Design a restaurant where you pay with stories.",
  "What would art look like made by AI 1000 years from now?",
  "Create a language with only 10 words.",
  "What if you could bottle experiences?",
  "Invent a new form of transportation using only natural forces.",
  "What would the internet smell like?",
  "Design a school where failure is celebrated.",
  "What if time moved differently for each person?",
  "Create a creature that evolves based on human emotions.",
  "What would happen if books could talk back?",
  "Invent a currency based on kindness.",
  "What if shadows had personalities?",
  "Design a game where everyone wins differently.",
  "What would a song written by the ocean sound like?",
  "Create a map of imaginary places that feel real.",
  "What if you could taste words?",
  "Invent a tool that helps people forget selectively.",
  "What would architecture look like if we lived underwater?",
  "Design a communication method without words or images.",
  "What if plants could migrate?",
  "Create a story told entirely through smells.",
  "What would happen if everyone's age reset annually?",
  "Invent a way to measure happiness precisely.",
  "What if laughter was contagious like a virus?",
  "Design a museum of things that never existed.",
  "What would friendship look like as a physical object?",
  "Create a weather system for indoor spaces.",
  "What if mistakes left visible marks on the world?",
  "Invent a device that translates animal thoughts.",
  "What would a library of the future contain besides books?",
  "Design an experience that can't be photographed.",
  "What if your reflection had different opinions?",
  "Create a ritual for saying goodbye to old ideas.",
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
          <span className="sr-only">Creative prompts</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72">
        <div className="space-y-3">
          <p className="text-sm font-medium">Creative Prompts</p>
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
