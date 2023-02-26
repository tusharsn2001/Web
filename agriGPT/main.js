


  // Use fetch to retrieve the JSON data from a URL
//   fetch('agri-news.json')
//     .then(response => response.json()) // Parse the JSON data
//     .then(data => {
//       // Get the news container element
//       const newsContainer = document.getElementById('news-container');

//       // Loop through the articles in the data
//       for (const article of data.articles) {
//         // Create a new article element
//         const articleElement = document.createElement('article');

//         // Add the article title
//         const titleElement = document.createElement('h3');
//         titleElement.textContent = article.title;
//         articleElement.appendChild(titleElement);

//         // Add the article content
//         const contentElement = document.createElement('p');
//         contentElement.textContent = article.content;
//         articleElement.appendChild(contentElement);

//         // Add the article metadata
//         const metaElement = document.createElement('p');
//         metaElement.textContent = `By ${article.author} on ${article.date}`;
//         articleElement.appendChild(metaElement);

       
//         // Add the article element to the news container
//         newsContainer.appendChild(articleElement);
//       }
//     });

window.onload = function() {
    // Use fetch to retrieve the JSON data from a URL
    fetch('agri-news.json')
      .then(response => response.json()) // Parse the JSON data
      .then(data => {
        // Get the news container element
        const newsContainer = document.getElementById('news-container');
  
        // Loop through the articles in the data
        for (const article of data.articles) {
          // Create a new article element
          const articleElement = document.createElement('article');
  
          // Add the article title
          const titleElement = document.createElement('h3');
          titleElement.textContent = article.title;
          articleElement.appendChild(titleElement);
  
          // Add the article content
          const contentElement = document.createElement('p');
          contentElement.textContent = article.content;
          articleElement.appendChild(contentElement);
  
          // Add the article metadata
          const metaElement = document.createElement('p');
          metaElement.textContent = `By ${article.author} on ${article.date}`;
          articleElement.appendChild(metaElement);
  
          // Add the article element to the news container
          newsContainer.appendChild(articleElement);
        }
      });


     
  // Use fetch to retrieve the JSON data from a URL
  fetch('agr-res.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
      // Get the resources container element
      const resourcesContainer = document.getElementById('resources-container');

      // Loop through the resources in the data
      for (const resource of data.resources) {
        // Create a new resource element
        const resourceElement = document.createElement('div');

        // Add the resource title and description
        const titleElement = document.createElement('h3');
        titleElement.textContent = resource.title;
        resourceElement.appendChild(titleElement);
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = resource.description;
        resourceElement.appendChild(descriptionElement);

        // Add a link to the resource URL
        const linkElement = document.createElement('a');
        linkElement.textContent = 'Visit site';
        linkElement.href = resource.url;
        resourceElement.appendChild(linkElement);

        // Add the resource element to the resources container
        resourcesContainer.appendChild(resourceElement);
      }
    });


  };
  

