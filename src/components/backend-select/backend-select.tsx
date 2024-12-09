"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FC, useState } from "react";

export const Backends = new Map<string, string>([
  ["java", "http://localhost:8080"],
  ["kotlin", "http://localhost:8081"],
  ["groovy", "http://localhost:8082"],
]);

interface BackendSelectProps {
  onSelect?: (url: string) => void;
}

const toCapitalCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const BackendSelect: FC<BackendSelectProps> = ({ onSelect }) => {
  const [firstBackend] = Array.from(Backends.entries());
  const [selectedBackend, setSelectedBackend] = useState(firstBackend[1]);

  const handleChange = (url: string) => {
    setSelectedBackend(url);
    if (onSelect) {
      onSelect(url);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="backend-select">Backend</Label>
      <Select onValueChange={handleChange} defaultValue={selectedBackend}>
        <SelectTrigger id="backend-select" className="w-[200px]">
          <SelectValue placeholder="Select a backend" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Backends</SelectLabel>
            {Array.from(Backends.entries()).map(([backend, url]) => (
              <SelectItem key={url} value={url}>
                {toCapitalCase(backend)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        Choose a backend to process your request
      </p>
    </div>
  );
};
