import { achievements } from "../../data/achievements";
import SectionWrapper from "../layout/SectionWrapper";
import AchievementCard from "../ui/AchievementCard";

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Highlights from my journey so far"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id ?? achievement.title} {...achievement} />
        ))}
      </div>
    </SectionWrapper>
  );
}
