document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.getElementById('slideshowContainer');
    const currentImg = document.getElementById('currentImg');
    const caption = document.getElementById('caption');
    const date = document.getElementById(`date`);
  
    const slideshowLinks = [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
    ];
    const captions = [
        `I knew from the moment I laid eyes on you that you were something special. You were jaw-dropping. Not only because of your appearance, but everything about you took my breath away. No one else understood me. I kept it secret for a long time because I thought I would be rejected and that you were too good for me. I knew that Braiden wasn’t good for you, and I wanted you to have a better life. `,
        `When we moved in “together,” I was worried because you were so much nicer to me than most people were. You had a truly kind heart, and I could tell. You helped me put my bed together when no one else would. It’s funny thinking back that I hugged Alex when I was sad, because he didn’t do anything to help me feel at home. You did everything for me.`,
        `When you came to take care of me that day, that was when my life really changed. No one had ever cared for me like that before. It touched me in a way I didn’t fully understand until later. You were my angel, and I didn’t want to let go. I wanted to be with you for as long as I could. This moment led to everything else. Thank you for being so nice and changing my life for the better.`,
        `After a rough day at work, we decided to walk down the street and talk about our problems. I didn't really want to talk about mine since they involved me liking you, so I chose to listen to you. This was the first time I listened to you in that romantic way. And it hurt me so much to hear how hopeless you were about everything and how much you hated being with Braiden. I was full of rage and didn't know what to do. I did however know that I wanted to help you in any way I could.`,
        `It was the culmination of everything. I couldn’t handle the reality of having to trade all of my friends for my one true love, so I reacted explosively. You were there to comfort me, as you always are. We knew the situation was terrible, but we were in love. We drove off to be together, alone, and that night I truly realized how much I loved you. I can still remember how the music from my car sounded that night, and how much I wanted to hold your hand and hug you.`,
        `Others look at this night and say it was my greatest mistake. That I’ve caused so much pain by what I did. But I believe this was the best decision I ever made. I definitely wanted to kiss, but I went down to you not knowing whether or not I would go through with it. I just wanted to be near you and have fun with you. I loved you so much and seeing you alone and in pain hurt me so much. It still hurts me so much. This night it forever is my memory, and nothing will replace it.`,
        `After everything I knew fell apart before me, I was hurting. Simultaneously, you were hurting too, and it was because of my rash decisions. I decided after some thinking that I was willing to lose everything to be with you. I loved you so much and could not stand to see you suffer. I asked you if you wanted to go forward with me and you said yes. We then walked along Lougheed and ended at the school bench were we kissed and hugged again. I come back to that bench sometimes when I'm hurting to help myself remember happiness.`,
        `I had a very odd morning, going to my aunt's funeral and all, but you made me feel so much better. I remember leading up to today we were texting nonstop. I was utterly obsessed with you, and I still am, just in different ways. Back then was raw love and I was lost in it. I was lost in you. I was dressed way too nicely, and we went to Rocky Point. Dirty talk aside, we were so calm with each other and I truly felt the love from you. You gave me a flower that I kept for a while, but unfortunately lost. It makes me so sad I didn't keep that flower. It meant so much to me to be loved like that.`,
        `This day was the best day of my entire life, and no it wasn't just because I lost my virginity. I can die happy knowing I got to feel this loved for at least a day. I can only hope I make you feel the same way even sometimes. The whole day was a magical blur. I would trade everything a million times again just to feel that way again. Everytime I'm with you alone like that I feel so happy. You make me remember why we live. You make my life worth it. I know the picture I painted isn't amazing but all I can remember from this night is the feeling of love. I love you so much.`
    ]

    const dates = [
      `April 8th, 2022`,
      `June 27th, 2022`,
      `August 28th, 2022`,
      `September 19th, 2022`,
      `September 28th, 2022`,
      `October 6th, 2022`,
      `October 11th, 2022`,
      `October 17th, 2022`,
      `October 20th, 2022`,
    ]
  
    let slideshowCounter = 0;
  
    currentImg.setAttribute('src', './img/1.png');
    caption.innerText = (captions[slideshowCounter]);
    date.innerText = (dates[slideshowCounter]);
  
    slideshowContainer.addEventListener('click', () => {
      if (slideshowCounter < slideshowLinks.length - 1) {
        slideshowCounter++;
      } else {
        slideshowCounter = 0;
      }
  
      currentImg.setAttribute('src', slideshowLinks[slideshowCounter]);
      caption.innerText = (captions[slideshowCounter]);
      date.innerText = (dates[slideshowCounter]);
    });
  });

  