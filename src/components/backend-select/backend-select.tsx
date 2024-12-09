import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const backends = [
  { backend: "Java", url: "http://localhost:8080" },
  { backend: "Kotlin", url: "http://localhost:8081" },
  { backend: "Groovy", url: "http://localhost:8082" },
];

const BackendSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a backend" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Backends</SelectLabel>
          {backends.map(backend => (
            <SelectItem key={backend.url} value={backend.url}>
              {backend.backend}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default BackendSelect;
