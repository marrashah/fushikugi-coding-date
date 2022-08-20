import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Break = () => (
    <>
        <br/><br/>
    </>
);

const Rasha = () => (
  <Layout>
    <h1>Hai ini Rasha, Nobarbarnya Eknath</h1>
    <h4 style={{textAlign: "right", marginRight: "15%"}}>August 20, 2022 22:19</h4>
    <div style={{textAlign: "justify"}}>
        <p>
            If only I knew what I know today.<Break />
            I try to live my life without regrets, but feelings never come with warnings, right? Needless to be said that I should've shown you more how much I love you.<Break />
            Thank you Eknath for brightening my days and giving support, especially as fellow developer. The first rent that I can joke around with technical terms, with willy typing, with Fushiguro Megumi face & Gojo Satoru personality. You're my friends-to-lovers trope I never had, you're my dreams come true.<Break />
            I love how you remember little things and how you act confidently — the <i>right</i> kind of acts of service.
        </p>
        <div style={{width: "80%", textAlign: "center"}}>
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Hi, Simran. I&#39;ve faced the same error as you. Have you figured out how to solve this yet? Thanks in advance. <a href="https://t.co/E9Ck39TfSs">https://t.co/E9Ck39TfSs</a></p>&mdash; Eknath. (@wiramadhava) <a href="https://twitter.com/wiramadhava/status/1558493846849216513?ref_src=twsrc%5Etfw">August 13, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
        <p>
            When you did that my heart melted to puddle. That's when I really felt like I had an actual boyfriend. Then, today you showed me videos of takoyaki & bubble tea when I was eating those in real life.
        </p>
        <div style={{width: "80%", textAlign: "center"}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZirRov5fqOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <Break />
        <p>
            Some will say it's the bare minimum. I know what you do were simple actions, but for me, it's exactly what I want. So, thank you — at least for guiding me and showing me what to look for. I hope I will never settle for less.<Break />
            I hope what Gem Goddess said will come true for you, that you will encounter your biggest blessing even if you have to embrace the challenges & put extra effort to reach your dream life. I believe you're going to succeed — you're a Capricorn rising filled with many Capricorn placements. Success will come naturally to you and perseverance is not a stranger. You're always be my Fushiguro Megumi — talented, strong, hard working, but also laced with empathy and gentleness. I wish happiness & contentment in your life as well. I'm supporting you from here. Like Nanami Kento's last words, "you've got it from here."<Break />
            I'm running out of words to say, but this site can be our personal diary, a means to communicate with each other. I hope I can find time & energy to fill this out because I will miss you. I'm missing you already. I'm not good with words but I hope you know how much I feel for you.<Break />
            Thank you for coming to Rasha's life, I hope what we experienced together were memorable enough for you to look back in nostalgia. Take care & see you soon. You know you can reach me out whenever you want. I love you, Eknath Wiramadhava. ❤️
        </p>
    </div>
    
    <Link to="/">Home</Link>
  </Layout>
)

export const Head = () => <Seo title="Rasha" />

export default Rasha;
