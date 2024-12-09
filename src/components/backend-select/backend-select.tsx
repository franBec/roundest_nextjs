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
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Backends = new Map<string, string>([
  ["java", "http://localhost:8080"],
  ["kotlin", "http://localhost:8081"],
  ["groovy", "http://localhost:8082"],
]);

interface BackendSelectProps {
  onSelectCallback: (url: string) => void;
  refetch: () => void;
  isPending: boolean;
  isRefetching: boolean;
}

const toCapitalCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const BackendSelect: FC<BackendSelectProps> = ({
  isPending,
  isRefetching,
  onSelectCallback,
  refetch,
}) => {
  const [firstBackend] = Array.from(Backends.entries());
  const [selectedBackend, setSelectedBackend] = useState(firstBackend[1]);

  const handleChange = (url: string) => {
    setSelectedBackend(url);
    onSelectCallback(url);
  };

  return (
    <div className="flex items-end space-x-2">
      <div className="space-y-2">
        <Label htmlFor="backend-select">
          Choose a backend to process your request
        </Label>
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
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => refetch()}
        disabled={isPending || isRefetching}
        aria-label="Refetch data"
      >
        <RefreshCw
          className={`h-4 w-4 ${isRefetching ? "animate-spin" : ""}`}
        />
      </Button>
    </div>
  );
};
