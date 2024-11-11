import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Hero />
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
				doloremque laudantium at soluta voluptatem, distinctio reiciendis quia
				beatae adipisci! Ad vero laudantium dolores voluptatibus assumenda eaque
				exercitationem minus velit asperiores? Asperiores earum dolorem mollitia
				perspiciatis, sunt dolorum ducimus repellendus incidunt, vero nam,
				dolores molestiae quidem atque omnis sequi dignissimos animi ad cumque
				illo facere blanditiis itaque? Consequuntur dolores corrupti ex.
				Obcaecati cupiditate incidunt quo quaerat, corrupti excepturi
				exercitationem suscipit? Quibusdam sapiente doloremque, labore mollitia
				tempora, fuga iure nulla beatae excepturi quasi vel suscipit ratione
				voluptatum, deserunt nisi cupiditate eligendi laborum! Earum totam vitae
				quia optio? Omnis, corrupti! Tempore, in molestiae, vero recusandae
				quidem architecto cumque tenetur, ex ratione minima id quos laborum rem!
				Quo repellendus sunt unde ullam consequatur aliquam! Quam magni
				recusandae nobis, id culpa itaque odio saepe deleniti dolorum eaque
				incidunt tenetur ipsum possimus ex non? Placeat praesentium iure dicta
				eligendi nisi consequatur eveniet, consequuntur neque quam voluptates?
			</p>
		</div>
	);
}

const heroSrc =
	"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Hero = () => {
	//
	return (
		<div
			className={`w-full h-[50vh] bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col gap-1 justify-center items-center text-white font-[800] text-3xl`}
		>
			<span className='font-["cursive"]'>In Loving Memory of</span>
			<span className='font-["mono"]'>Tyler Zander Stanley-Camba</span>
		</div>
	);
};
