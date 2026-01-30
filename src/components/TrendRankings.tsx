import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const trendingKeywords = [
  { rank: 1, keyword: "#SoraAI", score: 98, change: 5 },
  { rank: 2, keyword: "#GenzVibe", score: 95, change: -2 },
  { rank: 3, keyword: "#DevHumor", score: 92, change: 8 },
  { rank: 4, keyword: "#CodeLife", score: 88, change: 1 },
  { rank: 5, keyword: "#WFH", score: 85, change: -4 },
];

export function TrendRankings() {
  return (
    <Card className="bg-[#1F2937]">
      <CardHeader>
        <CardTitle>Top Trending Keywords</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingKeywords.map((item) => (
            <div key={item.rank} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-lg font-bold text-gray-400">{item.rank}</span>
                <span className="text-lg font-medium">{item.keyword}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">{item.score}</span>
                <span className={`text-sm ${item.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {item.change >= 0 ? `+${item.change}` : item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
