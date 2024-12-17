import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const HeaderLanguageSelector = () => {
  const languageOptions = [
    { value: "java", label: "Java" },
    { value: "kotlin", label: "Kotlin" },
    { value: "groovy", label: "Groovy" },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageOptions[0].value
  );

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">&lt;Using Next.js +</span>
      <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
        <SelectTrigger className="w-[100px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languageOptions.map(option => (
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
