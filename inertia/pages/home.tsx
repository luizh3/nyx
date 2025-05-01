import GameTrendingSection from "~/lib/components/ui/game/game-trending-section";
import SectionCard from "~/lib/components/ui/game/section-card";

const infos = {
  title: "Em Alta",
  games: [
    {
      poster_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg",
      name: "Dark Souls III",
      percentage_discount: 75,
      price: 79.99,
      liquid_price: 19.00
    },
    {
      poster_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
      name: "Cyberpunk 2077",
      percentage_discount: 50,
      price: 199.99,
      liquid_price: 99.99
    },
    {
      poster_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      name: "Elden Ring",
      percentage_discount: 30,
      price: 299.90,
      liquid_price: 209.93
    },
    {
      poster_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
      name: "Red Dead Redemption 2",
      percentage_discount: 67,
      price: 249.90,
      liquid_price: 82.47
    },
    {
      poster_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
      name: "Grand Theft Auto V",
      percentage_discount: 63,
      price: 99.99,
      liquid_price: 36.99
    },
    {
      poster_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg",
      name: "Assassin's Creed Odyssey",
      percentage_discount: 85,
      price: 199.99,
      liquid_price: 29.99
    }
  ]
}

const trendingInfos = {
  games: [
    {
      poster_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg",
      id: 1
    },
    {
      poster_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg",
      id: 2
    },
    {
      poster_image_url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
      id: 3
    }
  ]
}

export default function Home({ }: any) {
  return (
    <div className="pl-12 pr-12 pt-8 pb-8 gap-8 flex flex-col flex-1">

      <GameTrendingSection infos={trendingInfos} />

      <div className="items-center justify-center flex flex-col gap-8">

        <SectionCard infos={infos}
          config={{
            numberCards: {
              max: 6,
              min: 4
            }
          }}
        ></SectionCard>

        <SectionCard infos={infos}></SectionCard>

      </div>
    </div >
  )
}