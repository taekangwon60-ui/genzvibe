import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Filters() {
  const countries = [
    { value: "worldwide", label: "Worldwide" },
    { value: "us", label: "United States" },
    { value: "in", label: "India" },
    { value: "id", label: "Indonesia" },
    { value: "br", label: "Brazil" },
    { value: "kr", label: "South Korea" },
  ];

  const platforms = [
    { value: "youtube", label: "YouTube" },
    { value: "tiktok", label: "TikTok" },
    { value: "instagram", label: "Instagram" },
    { value: "all", label: "All Platforms" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center space-x-4">
        <Select defaultValue="worldwide">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                {country.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select defaultValue="youtube">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a platform" />
          </SelectTrigger>
          <SelectContent>
            {platforms.map((platform) => (
              <SelectItem key={platform.value} value={platform.value}>
                {platform.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
