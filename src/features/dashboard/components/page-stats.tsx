import { Bolt, Heart } from "lucide-react";

function PageStats({}) {
  return (
    <div className="stats bg-base-100 shadow">
      <div className="stat text-secondary">
        <div className="stat-figure invisible md:visible">
          <Heart className="w-8 h-8" />
        </div>
        <div className="stat-title">J</div>
        <div className="stat-value">2K</div>
        <div className="stat-desc">21%</div>
      </div>

      <div className="stat text-secondary">
        <div className="stat-figure invisible md:visible">
          <Bolt className="w-8 h-8" />
        </div>
        <div className="stat-title">P</div>
        <div className="stat-value">2M</div>
        <div className="stat-desc">14%</div>
      </div>
    </div>
  );
}

export default PageStats;
