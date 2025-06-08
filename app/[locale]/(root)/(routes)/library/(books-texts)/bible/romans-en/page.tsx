"use client";
 
 import { useTranslations } from "next-intl";
 import { useState, useEffect, useRef } from "react";
 import { useNavigation } from "@/lib/navigation-context";
 import { BOOKS_DATA } from "@/books-data_for-del";
 
 export default function RomansEnPage() {
    const t = useTranslations("BookContents");

    const { addBookToHistory } = useNavigation();
    const currentBookLink = "/library/bible/romans-en";
    const romansEn1132Ref = useRef<HTMLParagraphElement>(null);
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [bookContent, setBookContent] = useState<any>(null);

useEffect(() => {
          if (!bookContent) { 
      const foundBook = BOOKS_DATA.find(item => item.link === currentBookLink);

      if (foundBook) {
        setBookContent(foundBook);
        addBookToHistory(foundBook.id);
      } else {
        setBookContent(null);
      }
    }
  const url = new URL(window.location.href);
  const hash = url.hash;
  const shouldScrollToSection = hash.includes('#romansEn-11-32') && hash.includes('scroll=true');

  if (shouldScrollToSection) {
    setIsHighlighted(true); 
    // setTimeout(() => {
    //   setIsHighlighted(false);
    // }, 4000);

          if (romansEn1132Ref.current) {
        romansEn1132Ref.current.scrollIntoView({
          behavior: 'smooth', 
          block: 'start',   
        });
      }
  } else {
    setIsHighlighted(false);
  }
},  [bookContent, addBookToHistory, currentBookLink]); 

        if (!bookContent) {
    return <div>{t("loading")}</div>;
  }

     return (
        <div className="h-min-full flex">
                     <div className="relative h-full w-full px-4 pt-2 block">        
  <div className="w-full">
    <h2 className="pt-0">Epistle of Paul to the Romans (trans. New King James Version)</h2>
    <section id="section1" className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 mb-2 px-2 border border-gray-300 rounded-md">
      <h2>Chapter 11</h2>
<p>1. I say then, has God cast away His people? Certainly not! For I also am an Israelite, of the seed of Abraham, of the tribe of Benjamin.</p>
<p>2. God has not cast away His people whom He foreknew. Or do you not know what the Scripture says of Elijah, how he pleads with God against Israel, saying:</p>
<p>3. “Lord, they have murdered Your prophets and torn down Your altars, and I alone am left, and they seek my life.”</p>
<p>4. But what does the divine response say to him? “I have reserved for Myself seven thousand men who have not bowed the knee to Baal.”</p>
<p>5. Even so then, at this present time there is a remnant according to the election of grace.</p>
<p>6. And if by grace, then it is no longer of works; otherwise grace is no longer grace. But if it is of works, it is no longer grace; otherwise work is no longer work.</p>
<p>7. What then? Israel has not obtained what it seeks; but the elect have obtained it, and the rest were blinded.</p>
<p>8. Just as it is written: “God has given them a spirit of stupor, eyes that they should not see and ears that they should not hear, to this very day.”</p>
<p>9. And David says: “Let their table become a snare and a trap, a stumbling block and a recompense to them;</p>
<p>10. Let their eyes be darkened, so that they do not see, and bow down their back always.”</p>
<p>11. I say then, have they stumbled that they should fall? Certainly not! But through their fall, to provoke them to jealousy, salvation has come to the Gentiles.</p>
<p>12. Now if their fall is riches for the world, and their failure riches for the Gentiles, how much more their fullness!</p>
<p>13. For I speak to you Gentiles; inasmuch as I am an apostle to the Gentiles, I magnify my ministry,</p>
<p>14. if by any means I may provoke to jealousy those who are my flesh and save some of them.</p>
<p>15. For if their being cast away is the reconciling of the world, what will their acceptance be but life from the dead?</p>
<p>16. For if the firstfruit is holy, the lump is also holy; and if the root is holy, so are the branches.</p>
<p>17. And if some of the branches were broken off, and you, being a wild olive tree, were grafted in among them, and with them became a partaker of the root and fatness of the olive tree,</p>
<p>18. do not boast against the branches. But if you do boast, remember that you do not support the root, but the root supports you.</p>
<p>19. You will say then, “Branches were broken off that I might be grafted in.”</p>
<p>20. Well said. Because of unbelief they were broken off, and you stand by faith. Do not be haughty, but fear.</p>
      <p>21. For if God did not spare the natural branches, He may not spare you either.</p>
<p>22. Therefore consider the goodness and severity of God: on those who fell, severity; but toward you, goodness, if you continue in His goodness. Otherwise you also will be cut off.</p>
<p>23. And they also, if they do not continue in unbelief, will be grafted in, for God is able to graft them in again.</p>
<p>24. For if you were cut out of the olive tree which is wild by nature, and were grafted contrary to nature into a cultivated olive tree, how much more will these, who are natural branches, be grafted into their own olive tree?</p>
<p>25. For I do not desire, brethren, that you should be ignorant of this mystery, lest you should be wise in your own opinion, that blindness in part has happened to Israel until the fullness of the Gentiles has come in.</p>
<p>26. And so all Israel will be saved, as it is written: “The Deliverer will come out of Zion, and He will turn away ungodliness from Jacob;</p>
<p>27. For this is My covenant with them, when I take away their sins.”</p>
<p>28. Concerning the gospel they are enemies for your sake, but concerning the election they are beloved for the sake of the fathers.</p>
<p>29. For the gifts and the calling of God are irrevocable.</p>
<p>30. For as you were once disobedient to God, yet now have obtained mercy through their disobedience,</p>
<p>31. even so these also have now been disobedient, that through the mercy shown you they also may obtain mercy.</p>
<p id="romansEn-11-32" ref={romansEn1132Ref}>
  32. <span className={isHighlighted ? 'text-primary': ''}>
    For God has committed them all to disobedience, that He might have mercy on all.</span></p>
<p>
    33. <span className={isHighlighted ? 'text-primary' : ''}>Oh, the depth of the riches both of the wisdom and knowledge  of God! How unsearchable are His judgments and His ways past finding out!</span></p>
<p>
    34. <span className={isHighlighted ? 'text-primary' : ''}>For who has known the mind of the Lord? Or who has become His  counselor?</span></p>
<p>
    35. <span className={isHighlighted ? 'text-primary' : ''}>Or who has first given to Him, and it shall be repaid to him?</span></p>
<p>
    36. <span className={isHighlighted ? 'text-primary' : ''}>For of Him and through Him and to Him are all things, to whom  be glory forever. Amen.</span></p>
    </section>

    <section id="section2" className="mx-auto w-4/5 md:w-3/5 lg:w-1/2 px-2 border border-gray-300 rounded-md">
      <h2>Chapter 12</h2>
      <p>1. I beseech you therefore, brethren, by the mercies of God, that you present your bodies a living sacrifice, holy, acceptable to God, which is your reasonable service.</p>
<p>2. And do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is that good and acceptable and perfect will of God.</p>
<p>3. For I say, through the grace given to me, to everyone among you not to think of himself more highly than he ought to think, but to think soberly, as God has dealt to each one a measure of faith.</p>
<p>4. For as we have many members in one body, but all the members do not have the same function,</p>
<p>5. so we, being many, are one body in Christ, and individually members of one another.</p>
<p>6. Having then gifts differing according to the grace that is given to us, let us use them: if prophecy, let us prophesy in proportion to our faith;</p>
<p>7. or ministry, let us use it in our ministering; he who teaches, in teaching;</p>
<p>8. he who exhorts, in exhortation; he who gives, with liberality; he who leads, with diligence; he who shows mercy, with cheerfulness.</p>
<p>9. Let love be without hypocrisy. Abhor what is evil. Cling to what is good.</p>
<p>10. Be kindly affectionate to one another with brotherly love, in honor giving preference to one another;</p>
<p>11. not lagging in diligence, fervent in spirit, serving the Lord;</p>
<p>12. rejoicing in hope, patient in tribulation, continuing steadfastly in prayer;</p>
<p>13. distributing to the needs of the saints, given to hospitality.</p>
<p>14. Bless those who persecute you; bless and do not curse.</p>
<p>15. Rejoice with those who rejoice, and weep with those who weep.</p>
<p>16. Be of the same mind toward one another. Do not set your mind on high things, but associate with the humble. Do not be wise in your own opinion.</p>
<p>17. Repay no one evil for evil. Have regard for good things in the sight of all men.</p>
<p>18. If it is possible, as much as depends on you, live peaceably with all men.</p>
<p>19. Beloved, do not avenge yourselves, but rather give place to wrath; for it is written, “Vengeance is Mine, I will repay,” says the Lord.</p>
<p>20. Therefore “If your enemy is hungry, feed him; if he is thirsty, give him a drink; for in so doing you will heap coals of fire on his head.”</p>
<p>21. Do not be overcome by evil, but overcome evil with good.</p>
    </section>
  </div>
</div>
         </div>  
         );
         }