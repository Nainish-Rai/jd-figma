"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "./checkbox";
import { CheckboxItem } from "@radix-ui/react-dropdown-menu";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function DropMenuCustom() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" text-[0.65rem] py-2  h-fit   rounded-full bg-[#17171A] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Model"}
          <ChevronDown className="ml-1 h-3 w-3 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] flex  bg-[#17171A] flex-col p-2 ml-14">
        {frameworks.map((framework) => (
          <div
            key={framework.value}
            className="flex items-center text-xs hover:bg-neutral-800 hover:cursor-pointer py-1 pl-2 rounded px-1 hover:gap-3 gap-2 transition-all duration-200"
          >
            <Checkbox className="text-black w-3 h-3 flex items-center justify-center text-sm transition-all  duration-250 bg-white" />
            <div className=" text-white/60">{framework.label}</div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
