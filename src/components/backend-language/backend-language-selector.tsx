import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBackendLanguage } from "@/components/backend-language/backend-language-context";
import { toast } from "sonner";

export const backendLanguageOptions = [
  {
    value: process.env.NEXT_PUBLIC_API_BACKEND_JAVA || "",
    label: "Java",
    colors: ["5899C4", "DC4042"],
  },
  {
    value: process.env.NEXT_PUBLIC_API_BACKEND_KOTLIN || "",
    label: "Kotlin",
    colors: ["4B7EDC", "F78902"],
  },
  {
    value: process.env.NEXT_PUBLIC_API_BACKEND_GROOVY || "",
    label: "Groovy",
    colors: ["5B95B4", "AFAFAF"],
  },
];

const BackendLanguageSelector = () => {
  const { selectedBackendLanguage, setSelectedBackendLanguage } =
    useBackendLanguage();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">&lt;Using Next.js +</span>
      <Select
        value={selectedBackendLanguage.value}
        onValueChange={value => {
          const selectedOption = backendLanguageOptions.find(
            option => option.value === value
          );
          if (selectedOption) {
            setSelectedBackendLanguage(selectedOption);
            toast(
              `Requests will be processed by the ${selectedOption.label} backend`
            );
          }
        }}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {backendLanguageOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span>/&gt;</span>
    </div>
  );
};
export default BackendLanguageSelector;
