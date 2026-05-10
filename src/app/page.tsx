import Image from "next/image";
import NavBar from "./components/NavBar";
import AudioPlayer from "./components/AudioPlayer";

export default function Home() {
  return (
    <>
      {/* Fixed video background */}
      <video
        className="video-bg"
        src="/spaceba.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="video-overlay" />

      <NavBar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <p className="mb-4 text-xs font-semibold tracking-[0.4em] uppercase text-cyan-400">
          A Novel by James Fowler
        </p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-2xl leading-none mb-6">
          THE ASCENDANCY<br />
          <span className="text-cyan-400">PARADOX</span>
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-white/80 leading-relaxed mb-10">
          Submit… or die.<br />
          In the end, that is the only law the universe ever honored.<br />
          Humanity stumbled in naïveté, blind to the truth, deaf to reality&apos;s command.
        </p>
        <a
          href="https://www.amazon.com/Ascendancy-Paradox-James-Fowler/dp/B0B8VJF774/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/40"
        >
          Order Your Copy
        </a>
        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40 text-xs animate-bounce" style={{ zIndex: 10 }}>
          <span>Scroll to explore</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* About the Book */}
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center px-6 py-32"
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Book cover */}
          <div className="flex justify-center">
            <a
              href="https://www.amazon.com/Ascendancy-Paradox-James-Fowler/dp/B0B8VJF774/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
              target="_blank"
              rel="noopener noreferrer"
              className="w-56 md:w-72 aspect-[2/3] rounded-xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 block"
            >
              <video
                src="/tapgif.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">About the Book</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              A promise and a threat.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              From their kidnappers, &ldquo;complete their Crucible or face the annihilation of Earth.&rdquo; This is the situation 24 young men find themselves in upon waking up in a barren room. What is the Crucible and what awaits them inside it? Who is behind it? And why were they specifically chosen out of the 7 billion people Earth has to offer?
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section
        id="story"
        className="relative min-h-screen flex items-center justify-center px-6 py-32"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">The Author</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight">
            James Fowler &mdash; Author &amp; Writer
          </h2>
          <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-left">
            <p className="text-white/75 text-lg leading-relaxed">
              Hello to everyone. I&apos;ll skip the usual, &ldquo;I&apos;ve never felt comfortable with talking about myself.&rdquo; It seems to be too common a statement these days. Instead, I&apos;ll tell you about myself. I&apos;ve lived all over the United States. From California to Ohio, and from Texas to Nebraska; where I currently reside. I have an Associates of Science in General Academics and a Bachelors of Science in Criminal Justice. Growing up, I enjoyed a great many genres of fiction. My preferred genres are Fantasy and Science Fiction. These are the two main genres I will be writing. My desire in this endeavor, is to earn enough to become a full-time author, and to bring to you many stories, rich in lore and character.
            </p>
          </div>
        </div>
      </section>

      {/* Audio Teaser */}
      <section
        id="characters"
        className="relative min-h-screen flex items-center justify-center px-6 py-32"
      >
        <div className="max-w-2xl mx-auto text-center w-full">
          <AudioPlayer />
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="relative min-h-screen flex items-center justify-center px-6 py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 leading-tight">
            What Readers Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "The Ascendancy Paradox was an amazing book. I highly recommend you get this book ASAP!",
                author: "Terrance Finley",
                outlet: "July 31, 2023",
              },
              {
                quote: "King World Builder!",
                author: "Collin Nemec",
                outlet: "December 31, 2022",
              },
              {
                quote: "An amazing read! And it is not \"woke\".",
                author: "Anita M. York",
                outlet: "September 19, 2022",
              },
            ].map((r) => (
              <div
                key={r.author}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm text-left"
              >
                <p className="text-white/80 italic leading-relaxed mb-4">&ldquo;{r.quote}&rdquo;</p>
                <p className="text-white font-bold text-sm">{r.author}</p>
                <p className="text-cyan-400 text-xs">{r.outlet}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-white/40 text-sm mt-2">4.9 / 5 from over 2,400 readers</p>
        </div>
      </section>

      {/* More Amazing Books */}
      <section
        id="more-books"
        className="relative py-32 px-6 flex flex-col items-center justify-center"
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">From the Author</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 leading-tight text-center">
          More Amazing Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl w-full mx-auto">
          {[
            { src: "/tap.png", alt: "The Ascendancy Paradox", href: "https://www.amazon.com/Ascendancy-Paradox-James-Fowler/dp/B0B8VJF774/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=" },
            { src: "/Dino.png", alt: "Dino", href: "https://www.amazon.com/Saurian-Rangers-James-Fowler/dp/B093RLBMYT/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=" },
            { src: "/cross.png", alt: "Cross", href: "https://www.amazon.com/dp/B0GMXDJZ8V?ref=cm_sw_r_ffobk_cso_cp_apin_dp_SBAGEF6SSWB5J42TBNA2&ref_=cm_sw_r_ffobk_cso_cp_apin_dp_SBAGEF6SSWB5J42TBNA2&social_share=cm_sw_r_ffobk_cso_cp_apin_dp_SBAGEF6SSWB5J42TBNA2&bestFormat=true" },
          ].map((book) => {
            const inner = (
              <Image
                src={book.src}
                alt={book.alt}
                width={400}
                height={520}
                style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "520px" }}
              />
            );
            return (
              <div
                key={book.src}
                className="book-card flex flex-col items-center rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(16px)",
                }}
              >
                {book.href ? (
                  <a href={book.href} target="_blank" rel="noopener noreferrer" className="w-full">
                    {inner}
                  </a>
                ) : inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* Buy / CTA */}
      <section
        id="buy"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32"
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">Get the Book</p>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Your Journey<br />Starts Now
        </h2>
        <p className="max-w-lg text-white/70 text-lg leading-relaxed mb-10">
          Available in Paperback, and digital editions. Video game adaptation in progress.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.amazon.com/Ascendancy-Paradox-James-Fowler/dp/B0B8VJF774/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/40"
          >
            Buy on Amazon
          </a>
          <a
            href="https://www.patreon.com/cw/Ascendancythegame?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-white/30 hover:border-cyan-400 hover:text-cyan-400 text-white font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300"
          >
            Donate on Patreon
          </a>
        </div>
        <a
          href="https://x.com/authorj_fowler?s=11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on X / Twitter"
          className="mt-8 text-white/40 hover:text-white transition-colors duration-200"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
          </svg>
        </a>
        <p className="mt-8 text-white/30 text-xs tracking-widest uppercase">
          &copy; 2026 The Ascendancy Paradox. All rights reserved.
        </p>
      </section>
    </>
  );
}
