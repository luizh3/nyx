import GameTrendingSection from "~/lib/components/ui/game/game-trending-section";
import SectionCard from "~/lib/components/ui/game/section-card";
import { SectionType } from "~/types/react_types";

export default function Home({ sections }: { sections: SectionType[] }) {
  return (
    <div className="pl-12 pr-12 pt-8 pb-8 gap-8 flex flex-col flex-1">

      <GameTrendingSection section={sections.at(0)} />

      <div className="items-center justify-center flex flex-col gap-8">

        {sections.map((section) => {
          return <SectionCard infos={section}
            config={{
              numberCards: {
                max: section.max_elements,
                min: section.min_elements
              }
            }}
          ></SectionCard>
        })
        }
      </div>
    </div >
  )
}