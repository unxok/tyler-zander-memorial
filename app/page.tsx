import { H1, H2, H3, P } from "@/components/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
	return (
		<div className='scroll-smooth'>
			<Hero />
			<div className='w-full flex flex-col items-center gap-4 bg-background px-2'>
				<br />
				<Card className='max-w-[70ch]'>
					<CardHeader>
						<CardTitle>October 31st, 2024</CardTitle>
					</CardHeader>
					<CardContent>
						It is with heavy hearts that we announce the passing of our beloved
						Tyler Zander Stanley-Camba, who peacefully left this world on
						October 31st, 2024 at the age of 27.
					</CardContent>
				</Card>
				<article className='max-w-[70ch]'>
					<H2 id='obituary'>Obituary</H2>
					<br />
					<H3>Early life</H3>
					<P>
						Born on October 2nd, 1997, in San Jose, California, Tyler radiated
						joy, love, and resilience from the moment he entered our lives. At
						the beginning of his life journey, Tyler experienced infantile
						spasms that profoundly inhibited his neurological growth and
						developed into a lifelong seizure disorder. His early prognosis did
						not afford him more than a single handful of years here on this
						Earth. Despite the challenges and the insult to his development,
						Tyler surpassed these expectations and lived gracefully within his
						capabilities emanating joy and love above and through it all.{" "}
					</P>
					<br />
					<br />
					<H3>Love of music</H3>
					<P>
						Again, despite facing many challenges, Tyler loved to experience
						life and found joy in many things. Music was a central part of his
						world. He loved all kinds of music and could always find a rhythm to
						rock back and forth to, no matter the genre. Still, he had a special
						fondness for the driving beats of Alternative Rock, Country, and
						Contemporary Christian music. When he was stressed he preferred the
						flowing melodies of Andean pan flute music or being sung his “abc’s”
						to decompress. Perhaps his favorite of all was his mom’s piano
						playing and interactive songs which they sang together during their
						nightly bedtime routine. All who knew Tyler best will remember that
						he could almost always be found rocking and “dancing” with an
						enthusiastic smile beaming from his entire face.
					</P>
					<br />
					<br />
					<H3>Car ride adventures</H3>
					<P>
						Another of his favorite activities was riding in the car, where he
						would eagerly watch the world unfold beyond the window. He found joy
						in watching how people connected, expressed themselves, or went
						about their daily routines. He watched and absorbed it all, curious
						to learn about the world around him, and of course listening to
						music and rocking out in his seat. At stop signs and red lights or
						while parked, he would bounce the car so that those around would
						notice and look.{" "}
					</P>
					<br />
					<br />
					<H3>A hearty appetite</H3>
					<P>
						Tyler had a number of food allergies; but, that never dampened his
						love of eating. Despite his dietary restrictions, he delighted in
						foods like chicken adobo, curry, and almond milk yogurt. He enjoyed
						special meals carefully cooked by Sheryl and Lorna at Tupaz 5 and
						Sally at Silver Estates. Above all, however, Tyler loved to drink
						water. His hearty appetite was more than just about nourishment. It
						was a source of joy and a way for him to experience and engage with
						the world.{" "}
					</P>
					<br />
					<br />
					<H3>Friends and community</H3>
					<P>
						Despite the challenges of his disability, Tyler remained exuberantly
						playful and spirited. Whether he was scooting around on the floor or
						in his wheelchair, he was always excited to explore. He cherished
						time spent playing on his playmat and interacting with others,
						finding glee in the company of those around him.
					</P>
					<P>
						He formed meaningful connections with a community of caregivers,
						teachers, and friends who supported and loved him unconditionally.
						He thrived in Miss Heather's class at Gateway School, where he was
						embraced by a warm and caring environment. He looked forward to his
						time with Jenny, his bus driver, who made each ride a special
						experience. He grew particularly fond of his caregivers at Tupaz 5
						and enjoyed many movie nights with Adolfo as well as many other fond
						memories. His time at Greenacres, Spencer Group Home, Tupaz’s 5,
						Great Endeavors Day Program, and Silver Estates brought him a sense
						of belonging and connection with the people who cared for him.
					</P>
					<br />
					<br />
					<H3>Joy never forgotten</H3>
					<P>
						Above all, Tyler had a gift for bringing joy to everyone around him.
						His beaming smile and ability to brighten the hearts of others will
						be remembered by all who knew him. His presence will be deeply
						missed, but his legacy of love, laughter, and resilience will live
						on in the hearts of his family, friends, and everyone whose life he
						touched.
					</P>
					<br />
					<br />
					<H3>Family</H3>
					<P>
						Tyler is survived by his mother Diana Camba (Jimmy Poole); father
						Michael Stanley; siblings Mikaela Stanley-Camba and Ander (Brayden)
						Camba; grandparents, Mary Weber, Joseph and Patricia Camba, and Max
						Stanley; aunts Lorna Houser, Jeanna (Rob) Milton, Tina (John)
						Parkhurst, and Shanna (Tito) Meza; uncles Loren (Theresa) Zumwalt,
						Matthew Stanley, Steve (Angela) Stanley, Benjamin Meeker, Jeffrey
						(Naneen) Weber, and Joe Camba; cousins Benjamin Meeker Jr, Joshua
						Stanley, Sylver, Jaspyr, Jayd and Myca Milton, Naima and Nathaniel
						Parkhurst, Miguel Meza, Charlotte Camba, Courtney and Carson Houser.
					</P>
					<br />
					<br />
					<br />
				</article>
			</div>
		</div>
	);
}

const Hero = () => {
	//
	return (
		<div className='fade-out-bottom'>
			<div
				className={`w-full h-[50vh] bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col gap-1 justify-center items-center text-white font-[800] text-3xl bg-cover`}
			>
				<span className='font-["cursive"]'>In Loving Memory of</span>
				<span className='font-["mono"] break-keep flex flex-wrap justify-center gap-[.5ch]'>
					<span>Tyler Zander</span>
					<span>Stanley-Camba</span>
				</span>
			</div>
		</div>
	);
};
