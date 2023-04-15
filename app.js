document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.getElementById('slideshowContainer');
    const currentImg = document.getElementById('currentImg');
    const caption = document.getElementById('caption');
  
    const slideshowLinks = [
      'img/1.png',
      'img/2.png',
    ];
    const captions = [
        `I knew from the moment I laid eyes on you that you were something special. You were jaw-dropping. Not only because of your appearance, but everything about you took my breath away. No one else understood me. I kept it secret for a long time because I thought I would be rejected and that you were too good for me. I knew that Braiden wasn’t good for you, and I wanted you to have a better life. `,
        `When we moved in “together,” I was worried because you were so much nicer to me than most people were. You had a truly kind heart, and I could tell. You helped me put my bed together when no one else would. It’s funny thinking back that I hugged Alex when I was sad, because he didn’t do anything to help me feel at home. You did everything for me.`,
    ]
  
    let slideshowCounter = 0;
  
    currentImg.setAttribute('src', 'img/1.png');
    caption.innerText = (captions[slideshowCounter])
  
    slideshowContainer.addEventListener('click', () => {
      if (slideshowCounter < slideshowLinks.length - 1) {
        slideshowCounter++;
      } else {
        slideshowCounter = 0;
      }
  
      currentImg.setAttribute('src', slideshowLinks[slideshowCounter]);
      caption.innerText = (captions[slideshowCounter])
    });
  });