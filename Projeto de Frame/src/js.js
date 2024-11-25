 const imagemContainers = document.querySelectorAll('.imagem-container');

  imagemContainers.forEach(container => {
      container.addEventListener('click', () => {
          
          const imageName = container.getAttribute('data-background');
          const newHeading = container.getAttribute('data-heading');
          const h2Color = container.getAttribute('data-h2-color');
          const buttonColor = container.getAttribute('data-button-color');

         
          const banner = document.getElementById('banner');
          banner.style.backgroundImage = `url('../src/img/${imageName}')`;

        
          const bannerHeading = document.getElementById('banner-heading');
          bannerHeading.textContent = newHeading;
          bannerHeading.className = `text-3xl pt-13 font-semibold ${h2Color}`; 

        
          const bannerButton = document.getElementById('banner-button');
          bannerButton.className = `text-2xl mt-10 p-5 font-bold border-black border-solid border-4 rounded-md ${buttonColor}`;
      });
  });


     const button = document.getElementById('mybutton');

     button.addEventListener('click', function() {
         window.location.href = '../src/video/index.html';
     });