import { TrendChart } from "@/components/TrendChart";
import { TrendRankings } from "@/components/TrendRankings";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <header className="py-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">GenzVibe</h1>
          <div className="flex items-center gap-4">
            <Select defaultValue="worldwide">
              <SelectTrigger className="w-[180px] bg-[#1F2937] border-none">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="worldwide">Worldwide</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="indonesia">Indonesia</SelectItem>
                <SelectItem value="brazil">Brazil</SelectItem>
                <SelectItem value="korea">Korea</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="youtube">
              <SelectTrigger className="w-[180px] bg-[#1F2937] border-none">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="youtube">Youtube</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <TrendRankings />
          </div>
          <div className="md:col-span-2">
            <TrendChart />
          </div>
        </div>
      </main>
    </div>
  );
}
