import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

export const Backends = new Map<string, string>([
  ["java", "http://localhost:8080"],
  ["kotlin", "http://localhost:8081"],
  ["groovy", "http://localhost:8082"],
]);

interface BackendSelectProps {
  onSelect?: (url: string) => void;
}

export const BackendSelect: FC<BackendSelectProps> = ({ onSelect }) => {
  const handleChange = (url: string) => {
    if (onSelect) {
      onSelect(url);
    }
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a backend" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Backends</SelectLabel>
          {Array.from(Backends.entries()).map(([backend, url]) => (
            <SelectItem key={url} value={url}>
              {backend}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
