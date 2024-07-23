"use client"
import Image from "next/image"

export default function Home() {
	const cards = [
		{
			title: "Instagram",
			image: "https://bio-cards.vercel.app/img/posts/place.png",
			link: "https://www.instagram.com/wobblypictures",
		},
		{
			title: "Twitter",
			image: "https://bio-cards.vercel.app/img/posts/audi.png",
			link: "https://www.x.com/wobblypictures",
		},
	]

	const overlay = "https://i.imgur.com/ahI0LyM.png"
	return (
		<main className="flex w-screen min-h-screen items-center">
			<div className="flex flex-wrap justify-center gap-4 my-auto lg:w-1/2 mx-auto">
				{cards.map((card, index) => {
					const link = "https://api.memegen.link/images/custom.jpg?background=" + card.image + "&style=" + overlay + "&scale=1"

					console.log(link)
					return (
						<a
							href={card.link}
							target="_blank"
							key={index}
							className="drop-shadow-sm overflow-hidden rotate-0 hover:scale-125 transition-transform duration-100 hover:rotate-6 hover:drop-shadow-xl hover:z-10"
						>
							<Image className="box-border aspect-square w-64" src="/img/cartridge.png" alt="cartridge" width={400} height={400} />
							<div className="absolute flex items-center flex-col justify-start top-0 left-0 w-full h-full">
								<img
									className="w-[170px] h-[152px] object-cover mt-[71px] rounded-md shadow-inner"
									src={link}
									width={300}
									height={300}
								></img>
								<h2 className="absolute top-28 left-[25px] rotate-90 text-xs pt-1 text-black">{card.title}</h2>
							</div>
						</a>
					)
				})}
			</div>
		</main>
	)
}

