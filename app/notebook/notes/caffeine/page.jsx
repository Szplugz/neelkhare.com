import MobileHeader from "@/app/_components/MobileHeader";
import React from "react";
import { newsreader } from "@/app/fonts";

const caffeine = () => {
  return (
    <div className="caffeine-page ${newsreader.className} bg-eggshell2 flex sm:flex-row flex-col justify-center items-center selection:bg-mangoHighlight font-inter sm:overflow-y-hidden overflow-y-visible">
      <MobileHeader></MobileHeader>
      <div className="caffeine-notes flex flex-col md:w-[60%] max-w-full">
        <div
          className={`caffeine-heading text-mud flex justify-between sm:text-xl text-lg font-semibold mb-5`}
        >
          <div>On Caffeine</div>
          <div>2023-03-09</div>
        </div>
        <div className="text-lightMud text-sm mb-5">
          <em>
            I should note that most of the information I have about the brain
            and anything associated with it comes from{" "}
            <a href="https://hubermanlab.com/about/" target="_blank">
              <span className="decoration-dotted underline decoration-chinaRose hover:decoration-solid">
                Andrew Huberman
              </span>
            </a>
            , so you can safely read on without worrying about the accuracy of
            what you&apos;re about to read (but it&apos;s also a good idea to be
            skeptical of all claims a 20y/o college student makes, so if you
            wish to dispute anything I&apos;ve written here, please shoot me an
            email).
          </em>
        </div>
        <div className="mb-5 font-inter">
          Everyone has their drug of choice, and mine is caffeine. Despite it
          being the most widely-used{" "}
          <a
            href="https://en.wikipedia.org/wiki/Psychoactive_drug"
            target="_blank"
          >
            <span className="decoration-dotted underline decoration-chinaRose hover:decoration-solid">
              psychoactive substance
            </span>
          </a>{" "}
          in the world, I feel like most people are unaware of how fascinating
          it is. It helps you focus, elevates your mood, improves cognition, and
          gives you a head start to your day - without being addictive
          <a href="#footnotes">
            <sup className="text-lightMud">1</sup>
          </a>
          . Bottom line: Caffeine is good for you.
        </div>
        <div className="mb-5 text-mud sm:text-xl text-lg font-semibold">
          Mechanism
        </div>
        <div className="mb-5">
          Fundamentally, caffeine works by stimulating the release of Dopamine
          and Acetylcholine, two{" "}
          <a
            href="https://en.wikipedia.org/wiki/Neuromodulation"
            target="_blank"
          >
            <span className="decoration-dotted underline decoration-chinaRose hover:decoration-solid">
              neuromodulators
            </span>
          </a>{" "}
          responsible for increasing focus, alertness, and feelings of
          well-being. What&apos;s even better is that this release of Dopamine
          occurs in a manner that&apos;s distinct from the classical dopamine
          pathway associated with addiction and reward (mesolimbic pathway). In
          the mesolimbic pathway, caffeine only increases the amount of Dopamine{" "}
          <em>receptors</em>, thereby increasing the efficacy of the Dopamine
          that&apos;s already available, instead of tapping into that very
          potent pathway like so many other drugs (alcohol, opioids, etc.) do.
        </div>
        <div className="mb-5 text-mud sm:text-xl text-lg font-semibold">
          Use Cases
        </div>
        <ul className="caffeine-cases list-disc pl-5 mb-5 marker:text-chinaRose">
          <li className="mb-5">
            <span className="font-semibold">Wakefulness:</span> The reason
            caffeine is a great way to shake off morning/daytime grogginess is
            because it is an Adenosine-antagonist, meaning that it competes with
            Adenosine molecules to bind to the same receptors. Adenosine,
            present in large-quantities in humans, is a chemical compound that
            makes us feel drowsy because of the way it interacts with the energy
            production system in our body. In a nutshell, because caffeine binds
            to the same receptors as Adenosine, it temporarily blocks the
            effects of Adenosine, thereby making us feel less drowsy and more
            alert/energetic. This means that caffeine simply <em>delays</em> the
            effects of adenosine. It does not get rid of the already present
            adenosine, and it does not stop that adenosine from doing its job
            once the caffeine gets dislodged from those receptors.
            <br></br>
            <br></br>
            Consequently, it&apos;s generally not a good idea to take in
            caffeine right when you wake up. Throughout the course of the day,
            Adenosine builds up in your body and makes you feel progressively
            tired. When you sleep, your body metabolizes most of the built-up
            Adenosine, and after a good night&apos;s sleep, Adenosine levels in
            your body are at their lowest (but not 0). If you consume caffeine
            right after you wake up, you&apos;re not giving that residual
            adenosine a chance to wear off, so you&apos;re bound to feel a
            noticeable dip in wakefulness and energy once the caffeine starts
            getting out of your system. The way to combat this is to engage in
            activities that boost your{" "}
            <a
              href="https://en.wikipedia.org/wiki/Cortisol_awakening_response"
              target="_blank"
            >
              <span className="decoration-dotted underline decoration-chinaRose hover:decoration-solid">
                cortisol awakening response
              </span>
            </a>{" "}
            (a walk in the morning sun or physical exercise if you can) right
            after you wake up, and wait 90–120 minutes before you consume
            caffeine. Doing so will ensure you&apos;re minimizing the amount of
            residual adenosine in your system, thereby extracting the most out
            of the caffeine you take in and avoiding the afternoon crash.
          </li>
          <li className="mb-5">
            {" "}
            <span className="font-semibold">Learning & Memory:</span> Caffeine
            leads to an increase in catecholamines (epinephrine, norepinephrine,
            and dopamine), and they are certainly helpful when you&apos;re
            trying to concentrate on a task or have a focused bout of learning.
            But a spike in catecholamines leads to the consolidation in memory
            of the information you learned <em>prior</em> to that spike, which
            means that if you want to optimize your learning and memory, you
            should consume caffeine <em>after</em> a learning/study session,
            instead of consuming it during or before the session. This is
            certainly the most unintuitive part of how caffeine works (at least
            for me), and I rarely have the mental fortitude to abstain from
            drinking coffee until after I&apos;m done studying. That being said,
            consuming caffeine during a learning session will ensure that your
            ability to learn and retain information from the session will be at
            least as good as (and usually better than) not consuming caffeine at
            all, but waiting until after your bout of learning to consume
            caffeine is the most effective way to consolidate that information
            in memory.
          </li>
          <li className="mb-5">
            <span className="font-semibold">Performance:</span> Unsurprisingly,
            caffeine enhances both mental and physical performance. This
            includes reaction time, power output, alertness, strength, focus,
            and mood. I personally don&apos;t use caffeine as a part of my
            pre-workout, but I know a few people that do, and their experience
            aligns with what I just mentioned above.
          </li>
          <li className="mb-5">
            <span className="font-semibold">Dependence & Problems:</span> There
            really aren&apos;t any problems with caffeine if it&apos;s not
            abused. As in, don&apos;t drink 20 shots of espresso and you&apos;ll
            be fine. Don&apos;t drink Red Bull at 11PM and you&apos;ll be fine.
            Since caffeine does not activate the brain&apos;s reward circuit,
            its use is classified as a dependence , not an addiction
            <sup className="text-lightMud">2</sup>. The current consensus seems
            to be that chronic caffeine use can induce mild physical dependence
            - the withdrawal symptoms of which may include headaches, nausea,
            loss of focus, joint pain, etc. Beyond that, no significant harm
            (that we know of).
          </li>
        </ul>
        <div className="mb-5 text-mud sm:text-xl text-lg font-semibold">
          My Caffeine Usage
        </div>
        <div className="mb-5">
          I love coffee, and I love mornings. I look forward to most mornings
          with the excitement that a 9 year old has on christmas eve. I usually
          go to{" "}
          <a
            href="https://www.google.com/maps/place/BrewLab+Coffee/@40.1106863,-88.2340641,17z/data=!3m2!4b1!5s0x880cd738b1e112db:0x1c4f9441e0a9d28d!4m6!3m5!1s0x880cd738b023d461:0xa2547b03caecc901!8m2!3d40.1106863!4d-88.2318754!16s%2Fg%2F11g8_3gnvq"
            target="_blank"
          >
            <span className="decoration-dotted underline decoration-chinaRose hover:decoration-solid">
              Brewlab
            </span>
          </a>{" "}
          and get either a 12 oz mocha or a brown sugar latte with oatmilk, or
          less frequently, a triple espresso. I limit myself to one cup
          (150-200mg) a day. I also restrict my coffee intake between 10 AM
          (since I wake up at 8:30 AM) and 12 PM. I&apos;ve been following this
          routine for the last 6 months (as part of my Grand Plan To Optimize My
          Life), and it&apos;s much easier now than it was 6 months ago to
          restrict my caffeine intake to a 2 hour window once a day in the
          morning.
        </div>
        <div
          id="footnotes"
          className="mb-5 text-mud sm:text-xl text-lg font-semibold"
        >
          Footnotes
        </div>
        <ul className="mb-5">
          <li className="footnote text-lightMud text-sm mb-1">
            <sup className="text-mud">1 </sup>
            <a
              className="hover:underline hover:decoration-dotted hover:decoration-chinaRose"
              href="https://www.youtube.com/watch?v=iw97uvIge7c"
              target="_blank"
            >
              Andrew Huberman - Using Caffeine to Optimize Mental & Physical
              Performance
            </a>
          </li>
          <li className="footnote text-lightMud text-sm mb-1">
            <sup className="text-mud">2 </sup>
            <a
              className="hover:underline hover:decoration-dotted hover:decoration-chinaRose"
              href="https://scholarship.law.edu/cgi/viewcontent.cgi?httpsredir=1&article=1057&context=jchlp"
              target="_blank"
            >
              James G. Hodge Jr., Megan Scanlon, Alicia Corbett & Andrew
              Sorensen, The Consumable Vice: Caffeine, Public Health, and the
              Law, 27 J. Contemp. Health L. & Pol&apos;y 76 (2011).
            </a>
          </li>
          <li className="footnote text-lightMud text-sm mb-1">
            <sup className="text-mud">3 </sup>
            <a
              className="hover:underline hover:decoration-dotted hover:decoration-chinaRose"
              href="https://en.wikipedia.org/wiki/Caffeine_dependence"
              target="_blank"
            >
              Caffeine dependence - Wikipedia
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default caffeine;
